# Opsgenie Routing

Our team has decided to split up on call based on the people on the east and west side of the Atlantic ocean. Here are the steps and screenshot of what we did.

Note, this version is not currently compatible with the [Slackgenie background job](https://sourcegraph.com/github.com/sourcegraph/background-jobs/-/blob/slackgenie/README.md)

## Step 1

Create separate schedules for each team. We have search-core-support-east and search-core-support-west.

Schedules image

## Step 2

Create a rotation inside of each schedule. We used search-core-support-east-rotation and support-core-support-west-rotation. Inside of the rotations is where you add people. People in Europe and Africa are in the east rotation and people in the Americas are in the west rotation. People can override schedules just as they have previously.

Rotations image

Update rotation image

## Step 3

Create Routing rules that use the time of day to control which schedule to use. A really useful feature is that each routing rule can use a different timezone. It doesn’t show it in this image, but east is using the timezone in Cape Town and west is using PST.

Routing image

## Step 4

Create an escalation policy to support each group and make sure the routing rule is updated to support it.

Escalation image


And that's it!

