## User interface patterns

This section will detail user interface patterns not defined in the Wildcard Design System.

### Getting started pages

Getting started pages are presented to viewers of major Sourcegraph feature pages when they have not seen the page or when there is no content for the section. For un-authenticated users, the page serves as an overview and prompts the user login or sign up. For authenticated users, the page serves the same purpose and also provides helpful links to start using the feature.

The following rules should be applied when selecting the page to display to users:

- If the user has not seen the feature, the feature should display the getting started page
- If the user has not seen the feature but there is content available in this section, a modified getting started page should be displayed
- If the user has seen the feature and there is content in the section, the page should display the index of feature content
- If the user has seen the feature and there is no content in the section, the getting started page will display
- If the feature is not available in the instance, it will display for all users at all times
- The feature home page and the getting started view should have the same URL. For example, both the batch changes list and the batch changes getting started page are available at `/batch-changes`. Clicking the tabs at the top switches between the standard home page and the getting started page without modifying the URL.
