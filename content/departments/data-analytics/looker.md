## **Looker**

Looker is a business intelligence tool used for standard enterprise reporting and ad hoc reporting and analysis. All Sourcegraph employees can have View access to Looker. Some groups have the ability to create reports. If you are not a part of a group that can save content, reach out to #Analytics in Slack.

Looker has the ability to connect to all data sources that are located in our BigQuery DWH. It can also connect to documents in Google.

### **Things to know about using Looker**

- By clicking Explore from here or changing a filter on a dashboard, you _will not_ change the underlying dashboard. Unless you explicitly click Edit, you are considered to be on your own temporary branch and will not change anything (even for yourself the next time you open the dashboard).
- When creating and editing dashboards, save individual tables and charts as [looks](https://docs.looker.com/exploring-data/saving-and-editing-looks) instead of tiles directly to the dashboard. Looks can be added to multiple dashboards while tiles cannot be, and when look is edited, the changes will apply to dashboards where that look exists.

### Downsides of Looker (and our plans to address them)

- **Discoverability of data**: Bookmarking, favoriting or adding the sales/customer engineering board, product/engineering board and server instances overview look (or some combination of them) to your Looker instance is the best solution right now. These are all kept up-to-date with the most relevant data for all teams.
- **Speed**: Looker’s UI makes it easy to analyze data, but the result is a really complex SQL query that take awhile to run (especially on dashboards that are compiled of many separate queries). Fixing the performance issues is not currently a priority, but is something that we’ll get to when we grow the team out.
- **Naming conventions**: We’re slowly working on making naming conventions of dashboards, graphs, data points, etc... more obvious. If you come across anything that isn’t clear, let us know!

### **Looker Administration**

When adding a user to Looker, they need to be in both the group and role:

- Engineering, marketing, customer support, people ops, talent users = View
- CE, sales, product users = ‘All internal users, view and edit’
- Any other teams not listed should default to ‘View’
- Generally, CE, sales, product, customer support, engineering, and marketing receive accounts when joining the company

### Quick links

- [Where to start](https://sourcegraph.looker.com/projects/sourcegraph_events/files/1_home.md)
- [Sales](https://sourcegraph.looker.com/browse/boards/2)
- [Customer Engineering](https://sourcegraph.looker.com/browse/boards/8)
- [Product/engineering board](https://sourcegraph.looker.com/browse/boards/5)
