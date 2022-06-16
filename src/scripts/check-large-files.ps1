[CmdletBinding()]
param (
    [Parameter(Mandatory)]
    [string] $BaseRef,

    [Parameter(Mandatory)]
    [int] $PullRequestNumber,

    [Parameter(Mandatory)]
    [SecureString] $GitHubToken
)

$limit = 100KB

$repo = Find-GitRepository
$base = Get-GitCommit $BaseRef

$largeChanges =
  # Get all commits between HEAD and the base ref
  Get-GitCommit -Since HEAD -Until $base.Sha |
  ForEach-Object {
    $commit = $_
    # Compare commit to all parents
    $commit.Parents |
      ForEach-Object { $parent = $_; Compare-GitTree -ReferenceRevision $parent.Sha -DifferenceRevision $commit.Sha } |
      # Flatten changes collection
      ForEach-Object { $_ } |
      # Only consider changes that are present compared to all parents,
      # meaning the change should appear exactly as many times as there are parents.
      Group-Object -Property Oid |
      Where-Object { $_.Count -eq $commit.Parents.Count } |
      ForEach-Object { $_.Group[0] }
  } |
  # Ignore deleted files, renamed/moved files and files outside the content/ folder
  Where-Object { $_.Status -notin 'Deleted','Renamed' -and $_.Path -like 'content/*' } |
  # Filter for binary blobs larger than the limit
  Where-Object {
    $blob = $repo.Lookup($_.Oid)
    $message = "{0} Size={1:N0}B IsBinary={2}" -f $_.Path, $blob.Size, $blob.IsBinary
    if ($blob.Size -gt $limit -and $blob.IsBinary) {
      Write-Warning $message
    } else {
      Write-Information $message
    }
    $blob.Size -gt $limit -and $blob.IsBinary
  }

if ($largeChanges) {
  $existingComment = $repo | Get-GitHubComment -Number $PullRequestNumber -Token $GitHubToken | Where-Object { $_.User.type -eq 'Bot' -and $_.Body -match 'large binary files' } | Select-Object -First 1
  $still = if ($existingComment) { 'still' } else { '' }
  $message =
    "There were $still large binary files (over $($limit / 1KB)KB) detected in this pull request.`n" +
    "To not bloat the size of the Git repository, large binary files, such as pictures and videos, must be uploaded to our [sourcegraph-assets storage](https://console.cloud.google.com/storage/browser/sourcegraph-assets/handbook?project=sourcegraph-dev).`n" +
    "You can do this with drag&drop after following the link. After uploading, use the `"Copy public URL`" button to get a URL you can reference on the handbook page.`n"

  if ($largeChanges | Split-Path -Extension | Where-Object { $_ -in '.png','.jpg' }) {
    $message += "`nIf the images you want to add are _diagrams_, _infographics_, or other image types containing **text**, please consider exporting them as [SVG](https://blog.hubspot.com/website/what-is-an-svg-file) instead, which are **allowed** to be added to the repository, more accessible and higher quality.`n`n"
  }

  $message += "`n" +
    "You can find more information on the handbook page [Adding images or video to the handbook](https://handbook.sourcegraph.com/handbook/editing/handbook-images-video).`n" +
    "`n" +
    "This branch will need to be **rebased** with the binary file completely removed, otherwise the file will still be present in the repository history. @sourcegraph/handbook-support will be happy to help with this.`n" +
    "`n" +
    "The following large binary files $still need to be removed:`n" +
    ($largeChanges | ForEach-Object { "- ``$($_.Path)```n" }) + "`n" +
    "`n" +
    "Thank you! \\(^-^)/"

  $repo | New-GitHubComment -Number $PullRequestNumber -Body $message -Token $GitHubToken

  throw $message # fail the GitHub action check
}
