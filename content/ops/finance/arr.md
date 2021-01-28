# ARR

## Definitions

See [definitions of ARR, IARR, new IARR, expansion IARR, and bookings](../../sales/index.md#definitions) in the sales handbook.

## Monthly closing process

Twice every month the finance team closes the books and reports the latest ARR to the team based on calculations in the ARR source of truth, the [ARR tracker spreadsheet](https://docs.google.com/spreadsheets/d/1Ao3Nqw6gH3yAuZtICV3xo35kKKnI9oKXnvPuTQ0Fh9c/edit). This process will be completed within 5 business days of halfway and the end of the month.

### New IARR

- Throughout each month, finance will take any announced sales and add them to the ARR tracker spreadsheet on the Deals tab. Whenever a sale is announced in the #sales Slack channel, before adding it to the ARR tracker spreadsheet, finance will respond to the AE with their assumptions for the following values, and sales must confirm in writing that each of these is correct:
  - Customer name
  - Contract start date
  - IARR amount

Finance should also update the [server to company details](https://docs.google.com/spreadsheets/d/1wo_KQIcGrNGCWYKa6iHJ7MImJ_aI7GN12E-T21Es8TU/edit#gid=0) and [server installers to company](https://docs.google.com/spreadsheets/d/1Y2Z23-2uAjgIEITqmR_tC368OLLbuz12dKjEl4CMINA/edit#gid=0) spreadsheets with the relevant changes. 

### Expansion IARR

- Halfway and at the end of each month, finance will calculate [expansion IARR and MAU bookings](https://docs.google.com/spreadsheets/d/1tRcz3bNOho1TyWvrYSv37RIYcQs7I0i05-5eKwLq8TI/edit#gid=0). Finance will post a message in the #sales channel listing each individual booking, with the AE and CE who own the account tagged on each line. Each AE with a booking must confirm in writing that the expansion is approved and can be booked.
- These expansion and MAU bookings are added to the ARR tracker spreadsheet and should be dated as of the beginning of the month being closed (e.g., when closing September 2020, the booking will be dated 9/1/2020, the beginning of the month in which the expansion occurred).
- All final expansion and MAU bookings should be copy-pasted out of the ARR tracker spreadsheet and sent to the [Sales Ops](../../sales/sales-ops/index.md) team so they can be added to Salesforce.

### Final internal reports

- When the finance team member who is updating the tracker feels confident in the results, they should ask @dan and @gregg to review each change, as well as the aggregate metrics in a draft of the public message below, and provide a final approval.
- The finance team member who completed the process should post an update to the #finance channel containing the following, as well as cross-post this to the #general channel.

```
**<month> close**

We added <closing IARR> IARR in <month>, bringing total ARR to <closing ARR>. This includes:
* <new IARR> new IARR
* <expansion IARR> expansion IARR

This represents <month-over-month ARR growth %> month-over-month growth in total ARR. For the quarter so far, expansion IARR represents an annualized <annualized ARR retention %> net ARR retention.

See our growth in the quarterly cohort chart below:

<screenshot of the quarterly ARR by cohort chart>

See full details in our ARR tracker spreadsheet: https://docs.google.com/spreadsheets/d/1Ao3Nqw6gH3yAuZtICV3xo35kKKnI9oKXnvPuTQ0Fh9c.
```

- At the end of each calendar quarter, @dan will send this report to the Sourcegraph board of directors.

### Invoices

- Within the first 15 days of the end of the month, finance will send invoices to all customers with new bookings through Xero.
