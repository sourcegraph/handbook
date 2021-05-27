# Sourcegraph workflow

Sourcegraph helps [<!-- personas -->](../marketing/personas.md) organizations with the following stages of the development workflow:

- **Code:** Unblock yourself while coding by finding answers in the code and every bit of related information.
- **Review:** Review code, find problems early, and share knowledge.
- **Verify:** Uphold code quality standards and comply with required processes on all code changes.
- **Monitor:** Monitor services and quickly respond to incidents in your production environment.
- **Automate:** Automate error-prone and time-consuming workflows such as refactors and triage, coordinated across projects and teams.
- **Manage:** All of your repositories and users, configured and accessible in one place.

# Other tools

See product comparisons and integrations with:

- [Atlassian Fisheye](tools/atlassian_fisheye_vs_sourcegraph.md)
- [Bitbucket Cloud](tools/bitbucket_cloud_vs_sourcegraph.md)
- [Bitbucket Server](tools/bitbucket_server_vs_sourcegraph.md)
- [GitHub](tools/github_vs_sourcegraph.md)
- [GitLab](tools/gitlab_vs_sourcegraph.md)
- [Google Cloud Source Repositories](tools/google_cloud_source_repositories_vs_sourcegraph.md)
- [Hound](tools/hound_vs_sourcegraph.md)
- [Livegrep](tools/livegrep_vs_sourcegraph.md)
- [OpenGrok](tools/opengrok_vs_sourcegraph.md)
- [Phabricator](tools/phabricator_vs_sourcegraph.md)

([File an issue](https://github.com/sourcegraph/about/issues) if you want us to add a page about another product.)

## Summary feature comparison chart

<style>
    table.comparison-chart {
        table-layout: fixed;
    }
    table.comparison-chart thead th:nth-child(1) {
        width: 20%;
    }
    table.comparison-chart thead th:nth-child(2) {
        width: 20%;
    }
    table.comparison-chart thead th:nth-child(3) {
        width: 20%;
    }
    table.comparison-chart thead th:nth-child(4) {
        width: 20%;
    }
    table.comparison-chart thead th:nth-child(5) {
        width: 20%;
    }
    table.comparison-chart td {
        height: 4em;
        overflow: hidden;
    }
    .green {
        background-color: #42cf68;
    }
    .gray {
        background-color: #222;
    }
    .tooltip-container .tooltiptext {
        display: none;
        position: absolute;
    }
    .tooltip-container:hover .tooltiptext {
        display: inline-block;
        visibility: visible;
        width: 250px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 0.5em 0.5em;

        position: absolute;
        z-index: 1;
        margin-left: 1em;
    }
</style>

<table class="comparison-chart">
<thead>
    <th></th>
    <th>Sourcegraph</th>
    <th>GitHub</th>
    <th>GitLab</th>
    <th>Oracle OpenGrok</th>
    <th>Google Cloud Source Repositories</th>
</thead>

<tr>
    <th>Search</th>
    <th colspan="20"></th>
</tr>

<tr>
    <td class="tooltip-container">
        Basic text and file search
        <span class="tooltiptext">
            Offers some search capabilities over code, often very limited and not tailored to core code search use cases.
        </span>
    </td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
</tr>

<tr>
    <td class="tooltip-container">
        Symbol search
        <span class="tooltiptext">The ability to search specifically for function, class, and variable names, while filtering out noise from matches in non-code files, comments, and string constants.</span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="green"></td>
    <td class="gray"></td>
</tr>

<tr>
    <td class="tooltip-container">
        Regular expressions
        <span class="tooltiptext">Regular expressions ("regex") are a powerful pattern-matching syntax used for many types of patterns found in code, such as similarly named functions, anti-patterns that should be avoided, and fuzzy matching.</span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="green"></td>
    <td class="green"></td>
</tr>
<tr>
    <td class="tooltip-container">
        Multi-repository regex search
        <span class="tooltiptext">Regular expression search is especially useful when you can look for patterns and anti-patterns across all repositories in your organization.</span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="green"></td>
</tr>
<tr>
    <td class="tooltip-container">
        <a href="https://comby.dev/" target="_blank">Comby syntax</a>
        <span class="tooltiptext">
            A powerful pattern-matching syntax that goes beyond regular expressions and makes it easy to match common patterns in code (like balanced parens) that are hard to describe in regex.
        </span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td>Scales to 100,000s of repositories</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td class="tooltip-container">
        Universal search
        <span class="tooltiptext">
            Most engineering organizations have multiple repositories and code hosts. Universal search lets you search across all repositories, wherever they may be hosted, while obeying whatever permissions are defined.
        </span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>

<tr>
    <th>Code navigation</th>
    <th colspan="20"></th>
</tr>
<tr>
    <td>Basic file browsing</td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
</tr>
<tr>
    <td class="tooltip-container">
        Symbol outline
        <span class="tooltiptext">
            View an outline of functions, classes, and variables defined in a code file.
        </span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="green"></td>
    <td class="green"></td>
</tr>
<tr>
    <td class="tooltip-container">
        Basic code intelligence
        <span class="tooltiptext">Jump-to-definition within the same file, in some languages</span>
    </td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td class="tooltip-container">Universal code intelligence
        <span class="tooltiptext">Jump-to-definition across files and repositories, most languages</span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td>Provides code navigation on all major code hosts</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>


<tr>
    <th>Other</th>
    <th colspan="20"></th>
</tr>
<tr>
    <td class="tooltip-container">
        Integrates with major code hosts and code review
        <span class="tooltiptext">
            Whatever code host or code review tool is used, makes code searchable, navigable, and accessible.
        </span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td class="tooltip-container">
        Extensions
        <span class="tooltiptext">
            Third-party and internal developer tools integrating directly into search and code browsing UI.
        <span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td>Open source</td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td class="tooltip-container">
        Code-as-data GraphQL API
        <span class="tooltiptext">
            GraphQL API supports structured information about source code that is used to power smart internal developer tools
        </span>
    </td>
    <td class="green"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
    <td class="gray"></td>
</tr>
<tr>
    <td class="tooltip-container">
        On-prem deployment
        <span class="tooltiptext">
            Can be deployed on-premises in a deployment environment you control and which obeys the security policies you set.
        </span>
    </td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="green"></td>
    <td class="gray"></td>
</tr>

</table>
<br><br><br>
