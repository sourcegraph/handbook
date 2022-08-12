# Create GCP Notification for Slack with Terraform

## Configure a Slack App

Follow https://slack.com/intl/en-au/help/articles/115005265703-Create-a-bot-for-your-workspace to create a new Slack Bot App.

Ensure you grant the below bot token scopes

- `chat:write`: Send messages as @bot
- `chat:write.customize`: Send messages as @bot with a customized username and avatar
- `chat:write.public`: Send messages to channels @bot isn't a member of

Install the created Slack app in the workspace

Generate and keep a copy of the `Bot User OAuth Token`.

You should upload the created token in GCP secret manager.

## Terraform stuff

Reference the created secret

```tf
data "google_secret_manager_secret_version" "slack_bot_user_oauth_token" {
  secret  = "SLACK_BOT_USER_OAUTH_TOKEN"
  project = "sourcegraph"
}
```

Configure the notification channel for slack

```tf
resource "google_monitoring_notification_channel" "slack" {
  display_name = "Slack"
  type         = "slack"
  labels = {
    "channel_name" = "#some-channel-name"
  }
  sensitive_labels {
    auth_token = data.google_secret_manager_secret_version.slack_bot_user_oauth_token.secret_data
  }
}
```

Then you may reference the notification channel in resources like `google_monitoring_alert_policy`.
