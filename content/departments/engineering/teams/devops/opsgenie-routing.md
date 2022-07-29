# Opsgenie Routing

Our team has decided to split up on call based on the people on the east and west side of the Atlantic ocean. Here are the steps and screenshot of what we did.

Note, this version is not currently compatible with the [Slackgenie background job](https://sourcegraph.com/github.com/sourcegraph/background-jobs/-/blob/slackgenie/README.md)

## Step 1

Create separate schedules for each team. We have search-core-support-east and search-core-support-west.

![schedules](https://user-images.githubusercontent.com/3095053/179857501-71987f39-bcc0-42d4-9c6f-7659f1896999.png)

## Step 2

Create a rotation inside of each schedule. We used search-core-support-east-rotation and support-core-support-west-rotation. Inside of the rotations is where you add people. People in Europe and Africa are in the east rotation and people in the Americas are in the west rotation. People can override schedules just as they have previously.

![rotations](https://user-images.githubusercontent.com/3095053/179857537-cb799f4e-1c4d-4fa2-bd8f-417b0edab7d9.png)

![update-rotations](https://user-images.githubusercontent.com/3095053/179857574-724ce4e0-8411-4fe1-ad3b-c2b962775af5.png)

## Step 3

Create Routing rules that use the time of day to control which schedule to use. A really useful feature is that each routing rule can use a different timezone. It doesn’t show it in this image, but east is using the timezone in Cape Town and west is using PST.

![routing](https://user-images.githubusercontent.com/3095053/179857618-79eaaaf6-23a9-41a7-a5c9-a27c98d92085.png)

## Step 4

Create an escalation policy to support each group and make sure the routing rule is updated to support it.

![escalation](https://user-images.githubusercontent.com/3095053/179857653-326ffc44-f425-4e86-9c1f-9e39d410977b.png)

And that's it!

## SlackOpsgenie integration

If you want to automatically update the Slack support handle with the handle of the people currently on call, use the [Slackgenie](../../dev/tools/slackgenie.md) tool.
