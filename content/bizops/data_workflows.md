# Data Workflows

This document outlines the processes we have in place to pull data from our various third-party tools and get it into BigQuery and Looker for analysis.

We extract data from our tools using several methods, described in more detail below.

- [Google Sheets Add-Ons](#google-sheets-add-ons)
- [Writing Python scripts](#write-a-script)
- [Zapier](#zapier)

## Google Sheets Add-Ons

We use Google Sheets as a data store after pulling data from some of our tools. Once the sheets are created with the data we want, we connect them to BigQuery to create database tables.

The add-ons we use depend on the data source. Currently, we use:

- The [Google Analytics Spreadsheet Add on](https://developers.google.com/analytics/solutions/google-analytics-spreadsheet-add-on) to pull Google Analytics data.
- [Data Connector for Salesforce](https://workspace.google.com/marketplace/app/data_connector_for_salesforce/857627895310) to pull Salesforce data. You should create a report in Salesforce containing the data you want, and then use this add on to pull data directly from the report.

Both of these add-ons allow us to define the data we pull from our GA and Salesforce instances, and automatically refresh the data periodically.

### Connecting the sheet to BigQuery

Once the data we want is populated into a Google sheet, we can use it create a new table in BigQuery. In BigQuery, select the dataset you want to add the table to. For example, we have a dataset called `google_analytics` that contains our GA data.

Then, click _Create Table_. In the configuration section, in the dropdown next to _Create table from_, select _Drive_, and _Google Sheets_ as the file format. Then, copy and paste the Google Sheet URL containing your data into the URL field. BigQuery may be able to autodetect the schema, but if not, you will have to add each column name manually. You’ll also need to specify the number of header rows to skip to ensure your headers don’t get included as data. Then, create a table.

Once the table is created in BigQuery, you can create a view in Looker using the table as normal.

_Note_: In order for BigQuery to query your sheet, you’ll need to share the sheet to a Google service account associated with the GCP project that the database is in. For example, looks at the service account [this spreadsheet](https://docs.google.com/spreadsheets/d/1fQVFchOA9FmThQLWumJt_bkO5BfgZxUGOSzDnDFRH-8/edit#gid=2123963677) is shared with.

## Write a script

We have Python scripts that fetch data via APIs and send that data into BigQuery. These scripts are run periodically via a CI pipeline.

### HubSpot

To pull data from HubSpot, we have Python scripts that pull in data using the HubSpot API and creates a table with the data in BigQuery. For example, we have a script that pulls in all of our [Contacts data](https://github.com/sourcegraph/analytics/blob/master/HubSpot%20ETL/get_contacts.py), and creates a corresponding table in BigQuery. This script is run via the [ETL script](https://github.com/sourcegraph/analytics/blob/master/HubSpot%20ETL/hubspot_etl.py), which is run every 24 hours via a [CI pipeline](https://buildkite.com/sourcegraph/analytics).

## Zapier

Sometimes, it may be easier to create an if-this-then-that workflow/Zap in Zapier than writing a script. Zaps can run code snippets, and update data in various places in response to certain events. For example, we have a [zap that runs whenever a new HubSpot form submission](https://zapier.com/app/editor/113508746) and updates a Google Sheet with new submissions. The Google Sheet is then used to create a table in BigQuery as above.
