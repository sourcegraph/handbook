# Digital Ad Conversion Flows

We run advertisements on several platforms, including Google, Bing, and LinkedIn. We measure the effectiveness of our digital advertisements by tracking the number of key actions taken by users that land on our site from ads. These key actions are called conversion goals. Goals include actions like filling out a form, signing up for an account, or conducting a search on Sourcegraph.com.

This document describes how we set up and measure conversion goals for digital advertising campaigns for each major platform. At a high level, we set up Tags in Google Tag Manager that fire events when certain actions are conducted on our site. These events are then sent to the respective ad platform, where we define goals by matching on these events.

There is some assumed knowledge here about Google Tag Manager (GTM) concepts: Tags and Triggers. Please read the GTM documentation to learn more.

## Google Ads

For Google ads, events flow from Google Tag Manager to Google Analytics to Google AdWords.

1. Google Tag Manager

In Google Tag Manager, to send events to Google Analytics, we set up Tags with the type `Google Analytics: Universal Analytics`. These events can be very broad, like 'Any HubSpot form submission', which fires whenever any HubSpot form is submitted on our site, or specific, like 'Batch Changes Demo Request Form Submission', which only fires when the Batch Changes demo request form is submitted.

Each Tag defines a Category, Action, and Label. These are used for scoping down events. For example, if the Tag is for 'Any form submission', the Category is "HubSpot Form", the Action is the Page Path variable (the URL path), and the Label is the HubSpot form ID.

If you want to add a new tag specifically for a conversion, lean towards being specific rather than broad.

2. Google Analytics

In Google Analytics, we define Goals. You can find these goals in `Admin > Goals`. Goals are defined by specifying the Event Category, Action (optional), and Label (optional) that should match for a specific goal. Using the form submission example, if we wanted to count a conversion for any HubSpot form submission, we would specify a Goal that matches on any event where the Event Category matches "HubSpot Form". If we wanted to create a conversion for form submissions only on the `/contact/sales` page, we would define a Goal that matches on any event matching Event Category "HubSpot Form" and an "Event Action" of `/contact/sales`. As a reminder, these Actions and Labels are set in Google Tag Manager in the step above.

3. Google AdWords

In AdWords, you can see the conversion goals that are synced from Google Analytics via `Tools and Settings > Measurements > Conversions`. Several charts in AdWords show the performance of our campaigns based on their conversion rates.

## Bing Ads

Bing ads are set up very similarly to Google Ads. However, you need to ensure a conversion goal is set up in Microsoft Advertising prior to creating a tag in GTM.

1. Google Tag Manager

Tags for Bing ads function the same as Google ads. However, creating Tags to send events to Microsoft Advertising requires knowing the UET tag. You can get this after you've created a goal in the Microsoft ad platform.

2. Microsoft Advertising

In the Microsoft Advertising platform, create a new goal (or ensure the goal you want to measure already exists) by going to `Tools > Conversion tracking > Conversion goals > Create a conversion goal`. Similar to Google Analytics, specify the Event Category, Action, Label to match on.

## LinkedIn Ads

LinkedIn campaigns are significantly different from Bing and Google. For LinkedIn ads, you cannot match events when specifying conversions (i.e. match on Event Category/Action/Label) on their platform. Rather, in LinkedIn Campaign Manager, you create a conversion goal and they provide you a pixel (URL) that you attach to Tags in GTM. Therefore, you need to create Tags that fire on _exactly_ the interaction you want, and you do this by listening on Triggers that match the exact interaction.

1. Google Tag Manager

In GTM, we need to create Triggers that match exactly the Conversion Goals that we want. Triggers are the events that cause Tags to run. These Triggers would need to specify the same Category/Action/Label values as Conversion Goals in Microsoft Bing Advertisements and Goals in Google AdWords.

2. LinkedIn Campaign Manager

In LinkedIn Campaign Manager, add a Conversion. Here, you just specify the name of the Conversion, a window of time (30 days and 1 day) that conversions should log after clicking an ad, and the campaigns you want included for conversion tracking. At the end of the process, you will get an event specific pixel. Copy this.

3. Google Tag Manager (part 2)

In GTM, create a Tag of type `Custom Image` that mirrors the Conversion Goals in Microsoft Bing Ads and Google AdWords, using the Triggers you created in step 1. For each Tag, copy the pixel you got from creating the Conversion from LinkedIn Campaign Manager, and input the value in the Image URL field.
