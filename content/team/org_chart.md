# Org chart

The org chart is generated automatically from data files in the handbook repository ([need to edit it?](#how-to-edit)). Sourcegraph teammates can see a complete and up-to-date org chart for the entire company in [BambooHR](https://sourcegraph.bamboohr.com/).

## [Engineering](../departments/engineering/index.md)

Our Engineering department includes design, and development.

{{generator:reporting_structure.eng_lead}}

## Product

Our Product team includes product management (PM) and technical project management (TPM).

{{generator:reporting_structure.product_lead}}

## Cloud

{{generator:reporting_structure.engineering_manager_cloud}}

## [Security](../departments/security/index.md#members)

{{generator:reporting_structure.engineering_manager_security}}

## [Technical Success](../departments/technical-success/index.md#current-team-members)

{{generator:reporting_structure.vp_technical_success}}

## [Marketing](../departments/marketing/index.md)

{{generator:reporting_structure.marketing_lead}}

## [Talent & People Ops](../departments/people-talent/index.md)

{{generator:reporting_structure.vp_talent}}

## [Executive Business Partners](executive-business-partners.md)

{{generator:reporting_structure.ebp_lead}}

## [Data & Analytics](../departments/data-analytics/index.md#the-team)

{{generator:reporting_structure.director_data_analytics}}

## [Finance & Accounting](../departments/finance/index.md#members)

{{generator:reporting_structure.manager_financial_planning}}

{{generator:reporting_structure.financial_controller}}

## [Legal](../departments/legal/index.md#members)

{{generator:reporting_structure.director_legal}}

## [Tech Ops](../departments/tech-ops/index.md#members)

{{generator:reporting_structure.tech_ops_manager}}

## Sales

### [Sales team](../departments/sales/index.md#members)

{{generator:reporting_structure.vp_sales}}

### [SDR team](../departments/sales/sdrteam/index.md#members)

{{generator:reporting_structure.head_sales_development}}

### [Sales strategy & operations](../departments/sales/sales-ops/index.md#members)

{{generator:reporting_structure.strategy_operations_manager}}

### [Value Engineering & Sales Enablement](../departments/sales/sales-enablement/index.md)

{{generator:reporting_structure.senior_manager_value_engineering}}

## Other teams: TODO

Not all teams are listed here yet.

---

## How to edit

This org chart is generated automatically based on the contents of other handbook pages.

1. To add a team, [edit this page](https://github.com/sourcegraph/handbook/edit/main/content/team/org_chart.md) and add a link to the section of the team's page that lists the members as the header (such as `### [My team](../../myteam/index.md#members)`).
2. To edit a team, [edit this file](https://github.com/sourcegraph/handbook/edit/main/data/team.yml), and, if working on a Product team, [this file](https://github.com/sourcegraph/handbook/edit/main/data/product_teams.yml) to add or adjust any team members. Follow the steps below:

   a. **New Managers**: Be sure to add a `manager_role_slug` to your personal entry. After adding that, check that any team members who report to you have the appropriate `reports_to` field in their entry. If you are stepping into a role that has been filled by an interim manager, you can update the existing entry rather than creating a new one by removing `(Interim)` from the role title.

   b. **New Teammates**: Add your personal entry, and make sure it has a `reports_to` field with the appropriate slug. To find this slug, locate your manager's entry, and use the value they have entered for `manager_role_slug`.
