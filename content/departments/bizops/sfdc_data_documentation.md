# **SFDC Architecture Data Documentation**

The salesforce data architecture consists of raw data which has been transformed into derivative tables for ease of use. These transformations have been done to bring all of the needed data into one place to make the process of joining data for analysis simpler and to ensure data accuracy. This graphic illustrates the processes, transformations, and joins used to create the core derivative tables.

![SFDC Architecture](https://drive.google.com/file/d/1GoHi1TM3qRA-EEyyoq-LqnGeZ66pzxsK/uc?usp=sharing)

**SFDC Raw Tables - Blue**
These tables are all of the raw data salesforce tables created by salesforce and fivetran.

**Normalized Tables - Green**
These are the first step transformation tables. These tables contain the historical data for all of the changes which have occurred in salesforce. The timestamp field of valid_to is the indicator for the historical changes. This is where the fivetran formulas are also joined to the salesforce data.

**Daily Snapshot Tables - Yellow**
The daily snapshot tables insert a new row every day at 23:59:59 UTC. This is to show the most recent record at the end of each day for the account.

**Current Snapshot Tables - Pink**
These tables provide the current state of the record as only including the most recent record for each account.

**Custom Data Export - Orange**
At this level of transformation, we include only the records from the current snapshot level and perform other requested calculations on that data. This is the level of data which most will use for analysis. This data does not include the historical changes at the account level.

# **Implementation**

This pipeline is implemented using Python to create the three layers of the sfdc data model from the normalized to the current snapshot. Python was chosen as the complexity to create these tables exceeded the capabilities of BigQuery (SQL).

**Folder & File Structure**

The files live under [soucegraph/analytics/sfdc](https://github.com/sourcegraph/analytics/pull/561) and follow a folder structure like below:

```
sourcegrahph/analytics/
└── SFDC/
    ├── utils.py
    ├── account/
    │   ├── normalized_account.py
    │   ├── daily_account.py
    │   ├── account.py
    │   └── last_run.json
    ├── user/
    │   ├── normalized_user.py
    │   └── last_run.json
    ├── opportunity/
    │   ├── normalized_opportunity.py
    │   ├── daily_opportunity.py
    │   ├── opportunity.py
    │   └── last_run.json
    ├── lead/
    │   ├── normalized_lead.py
    │   ├── daily_lead.py
    │   ├── lead.py
    │   └── last_run.json
    └── campaign/
        ├── normalized_campaign.py
        ├── daily_campaign.py
        ├── campaign.py
        └── last_run.json
```

**Technical Considerations and Execution Details**
The `last_run.json` file stores the timestamp of when the normalized tables last pulled data from BigQuery and checked for changes. It is important for the pipeline to check for updates as often as new data is pulled into BigQuery [through Fivetran](https://fivetran.com/dashboard/connectors/salesforce/salesforce_data/setup?requiredGroup=august_stressing).

The pipeline is orchestrated to be both _cost-effective_ and _efficient_ as such that it only processes net new records through the pipeline, this is done by filtering records via the `system_modstamp` field and keep tracking of when scripts have ran.

The pipeline is able to adapt and accept new fields from salesforce and is able to update its schema to allow new fields to be passed through. Regarding special “salesfoce calculated formulas”, the script is able to automatically compile and accept the majority\_ \_of the new formualated fields created, however this doesn’t work when the formulated fields use a` REGEXP` function, since special formatting needs to be applied to those in the back-end. We can look into creating special helper functions to automate this process in the future.

**Hosting**
The scripts are hosting on our etl_scripts VM

**Scheduling**
Scheduling was a huge consideration of this project as we have different layers of data that need to be refreshed and updated at different times.

For the _normalized layer_, since we are tracking the history of changes, we want to mimic the scheduling of this as often as new data is pulled into our raw tables [through Fivetran](https://fivetran.com/dashboard/connectors/salesforce/salesforce_data/setup?requiredGroup=august_stressing).

For the _daily snapshot layer_, we take the most recent row at the end of the day (23:59:59UTC) to store as a record of what that account, user, opportunity, etc looked like on that day.

For the \_current snapshot layer, \_we replace the tables with the most up-to-date data we have daily. It serves as the truth of what is happening “today” on our accounts, leads, opportunity, etc.

![Fivetran Transformation](https://drive.google.com/file/d/16FH6BSOR7NUL0C3Hk9oqFkuxlWuDTQi-/view?usp=sharingg)

# **BigQuery**

Below is a screenshot of how the tables look like on BigQuerys:

![Data Model](https://drive.google.com/file/d/1kd4NwiD07ZvY67MtvZtXKuIj91jwFqN6/view?usp=sharing)

# **SFDC Account**

For more detail on the SFDC Account table please see this [link](https://docs.google.com/spreadsheets/d/1Yc602GUEKjEwReZgdnaSZ_62crnc7EZIIE2-7qLZMns/edit#gid=0). You will find a breakdown of this table by column.

# **SFDC Opportunity**

For more detail on the SFDC Opportunity table please see this [link](https://docs.google.com/spreadsheets/d/1Yc602GUEKjEwReZgdnaSZ_62crnc7EZIIE2-7qLZMns/edit#gid=1417098663) You will find a breakdown of this table by column.

# **SFDC Lead**

For more detail on the SFDC Account table please see this [link](https://docs.google.com/spreadsheets/d/1Yc602GUEKjEwReZgdnaSZ_62crnc7EZIIE2-7qLZMns/edit#gid=1954937052). You will find a breakdown of this table by column.

# **SFDC Campaign Member**

For more detail on the SFDC Account table please see this [link](https://docs.google.com/spreadsheets/d/1Yc602GUEKjEwReZgdnaSZ_62crnc7EZIIE2-7qLZMns/edit#gid=1385430871). You will find a breakdown of this table by column.
