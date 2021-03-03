# Sales and CE Looker onboarding

## Looker configuration and entry-points

Most, if not all, relevant data to any given team can be found in boards. Adding these to your Looker instance will make navigating Looker _much_ easier. 

- [Sales](https://sourcegraph.looker.com/browse/boards/2)
- [Customer Engineering](https://sourcegraph.looker.com/browse/boards/8)
- [Product/Engineering](https://sourcegraph.looker.com/browse/boards/5)

There are links within Salesforce that go to a Looker dashboard for each account’s Sourcegraph instance. 

- Within each account’s Account Summary there’s a ‘Looker Report’ link. This will take you to [this report](https://sourcegraph.looker.com/dashboards/94?Unique%20Server%20ID=Uber&Site%20ID=&Salesforce%20Unique%20ID=&filter_config=%7B%22Unique%20Server%20ID%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22Uber%22%7D,%7B%7D%5D,%22id%22:0%7D%5D,%22Site%20ID%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22%22%7D,%7B%7D%5D,%22id%22:1%7D%5D,%22Salesforce%20Unique%20ID%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22%22%7D,%7B%7D%5D,%22id%22:2%7D%5D%7D), unless the account does not have a Sourcegraph instance. This will be true for any prospect that has not yet at the POC stage. 
- There’s a [Salesforce report](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O3t000006jfbmEAA/view?queryScope=userFolders) that lists all of your accounts and their Looker links.

**Typical use cases are:**

- How is the trial going? → [Server instances overview](https://sourcegraph.looker.com/dashboards/94)
- What feedback are we getting from an account? → [NPS](https://sourcegraph.looker.com/dashboards/128)
- Who has set up an instance in this company before? → [All instances filtered by an email domain](https://sourcegraph.looker.com/looks/750)
- What are the deployment characteristics of an account? → [Server instances](https://sourcegraph.looker.com/looks/436)

**Two notes on using Looker:**

- You can mess with the filters to navigate to the account you’re looking for. You won’t change the underlying dashboard that others see.
- You can click ‘Explore from here’ to create your separate branch of the dashboard. You can add/edit/remove fields to do a quick analysis and like filters, you won’t change the underlying dashboards. You can always save the look if you want to keep it!

## What data do we get?

Because we’re hosted on-prem, we only collect a certain amount of data on customer usage. A full list can be found in [the docs](https://docs.sourcegraph.com/admin/pings). There _are_ certain cases where we don’t collect any information. If the instance is completely offline and doesn’t communicate with us, we will have no data and the account will not show up anywhere in Looker. There is an option for admins to disable non-critical data from being sent back to us. In this case, the account will show up, but there will be limitations on what we can see. A full list of these offline of critical data accounts can be found in [Drive](https://docs.google.com/document/d/18q-xbHl53hg_y_0xX-buZpD04vMv3vJrqiXd9IeeE64/edit).