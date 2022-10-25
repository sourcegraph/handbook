# **Data Transformations**

## What is data transformation?

Data transformation is the process of changing the format, structure, or values of data.

### Types of data transformations

**Extraction and parsing**
Initial transformations are focused on shaping the format and structure of data to ensure its compatibility with both the destination system and the data already there.
Example: Parsing fields out of a json object for loading to a relational database

**Translation and mapping**
Some of the most basic data transformations involve the mapping and translation of data.
Example: A column containing integers representing statuses can be mapped to the relevant status descriptions

**Filtering, aggregation, and summarization**
Data transformation often slims data down and making it more manageable. Data may be consolidated by filtering out unnecessary fields, columns, and records.
Example: Exclude records from certain types of organizations or aggregate data to a daily count

**Enrichment and imputation**
Data from different sources can be merged to create denormalized, enriched information.
Example: Create a table that has a contracted quantity and product usage

**Indexing and ordering**
Data can be transformed so that it's ordered logically or to suit a data storage scheme.
Example: Index data by timestamp

**Anonymization and encryption**
Data containing personally identifiable information, or other information that could compromise privacy or security, should be anonymized before propagation.
Example: Splitting an email address into two columns, keeping the domain and hashing the name

**Modeling, typecasting, formatting, and renaming**
Transformations that reshape data without changing content.
Example: Renaming a column for clarity

## Why do we need to transform data?

- To make it better-organized and easier to use
- To improve data quality and protect applications from potential issues
- To facilitate compatibility between applications, systems, and types of data
- To improve performance of data output in downstream applications, like BI tools or spreadsheets
- To marry data from disparate systems to provide deeper insight

## What transformations are a part of our standard data model?

- [Salesforce](sfdc-architecture.md)
- Pings (Documentation coming soon)
