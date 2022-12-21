# Reporting Links

- [Web Analytics - Visitor Acquisition](https://sourcegraph.looker.com/dashboards/362?UTM+Source=&Referrer=&Timeframe=30+day&Sourcegraph+site=&Event=)

- [Web Analytics - Audience](https://sourcegraph.looker.com/dashboards/368?Sourcegraph%20Site=&Session%20Start%20Date=7%20day)

- [Web Analytics - Behavior](https://sourcegraph.looker.com/dashboards/367?URL=&Name=&Timestamp%20Time=)

# Dashboard Definitions

**NOTE - The session ID is a new cookie parameter (approx beginning of December 2022). Reporting on the session ID is directional until enough time has passed for accurate comparisons to the visitor count over time.**

- Referrer - The session referrer, the external site that sends the visitor to a sourcegraph site. This could be organic (like a google search) or driven by us (like a linkedin post).

- UTM Source - The source is a parameter in the UTM (part of the first session URL) that denotes where the visitor is coming from when a visitor is driven to sourcegraph by us.

- UTM Campaign - The campaign is a parameter in the UTM (part of the first session URL) that denotes what campaign the visitor is responding to.

- Visitors - Distinct count of visitors to the site over a period of time. Calculated by counting the user id (if authenticated) or the anonymous user id.

- Sessions - Distinct count of sessions during a period of time. A session id is assigned through a cookie when a user is either brand new or whose last visit or activity was greater than 30 minutes ago.

- Pageviews - The number of distinct URLs that are recorded.

- Events - An event is any recorded action in the EventLogger. Including, but not limited to, searches and other product events, page views, hovers, and clicks.

- Pageviews/Session - The average number of pageviews per session over a given period of time.

- Sessions/Visitor - The average number of sessions per user over a given period of time.

- Average Session Length - the average time between the first timestamp and last timestamp in sessions over a given period of time.

- New Vs Returning Visitors - A new user is when the session date is equal to the first time seen. And a returning user is everyone else. Note: First time seen is a new metric that we started tracking in December 2022. Users before this time period may not have a first time seen date.

- Visitors

  - 1-Day - the count of users whose last seen date is yesterday.

  - 7-Day - the count of users whose last seen date is in the last 7 days.

  - 14-Day - the count of users whose last seen date is in the last 14 days.

  - 28-Day - the count of users whose last seen date is in the last 28 days.

# Tracking Overview

**Cookies**

A cookie is information that a website tracks about a visitor. At Sourcegraph, we cookie a visitor by assigning an anonymous user id which stays valid for 365 days. By doing this, we can track visitor behavior over multiple visits to understand how a visitor interacts with our sites. This data is tracked in our EventLogger and loaded into BigQuery for use in Amplitude and Looker.

- _What data do we track in the Cookie?_

  - Anonymous User ID - an id that is assigned to a visitor at the time the cookie is generated. This id will persist on each subsequent visit for 365 days.

  - Session ID - an id that is assigned to a session. A session will reset when there has been no activity for 30 minutes.

  - First Source URL - the first Sourcegraph URL a visitor landed on when the cookie is created.

  - Last Source URL - the most recent Sourcegraph URL a visitor landed on before converting.

  - Referrer - The previous website visited (this could include other sourcegraph sites)

  - Original Referrer - the external website that sends the visitor to a sourcegraph site at the time the cookie is created. This will not change on subsequent visits to our sites.

  - Session Referrer - the external website that sends the visitor to a sourcegraph site at the time the session id is created. This will change when a new session is started.

  - First Session URL - the first Sourcegraph URL a visitor landed on when the session is started

**UTMs**

UTM parameters are information that is attached to the end of a URL that helps track and measure digital marketing campaigns.

- _What data do we care about in UTMs today?_

  - UTM Source - is where the visitor is coming from. Could be google, linkedin, etc…

  - UTM Medium - is the type of campaign. Could be social-paid, social-organic, search-paid, search- organic.

  - UTM Campaign - is the campaign name

  - There are other parameters present in UTMs that we create. We will add those when we include them in reporting.
