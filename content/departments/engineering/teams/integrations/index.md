# Integrations team

> NOTE: As of 2022-10-31, this team merged into the new [Code Exploration team](../code-exploration/index.md). The content on this page is in the progress of being migrated.

The integrations team owns the our code host and third-party integrations (including our IDE and browser extensions).

Our mission is to bring the value of Sourcegraph to all developers, everywhere they work with code, and to bring the value of other developer tools into Sourcegraph.

## Vision

The power of Sourcegraph is available everywhere that developers read or write code.

- Build new paths to get value from Sourcegraph on other websites and IDEs.
- All of Sourcegraph's most powerful features are easily available on most any code host while using any browser thanks to native integrations and browser extensions.

## Responsibilities and focus

- Code host integrations
  - Add native support for Sourcegraph in code hosts (for example: GitLab native integration) when possible, so all users of a Sourcegraph instance can get features like code intelligence on their code host without individual setup.
- Browser extensions
  - Develop and maintain browser extensions that surface code intelligence and other Sourcegraph features on code hosts (for example: Github).
- IDE and other third-party code view integrations
  - Develop and maintain IDE integrations that bring Sourcegraph functionality right to your IDE
  - Explore and develop features for other popular code-view websites like https://pkg.go.dev/ and messaging platforms like Slack

## Contact

- #integrations channel or @integrations on Slack
- [team/integrations](https://github.com/sourcegraph/sourcegraph/labels/team%2Fintegrations) label and @sourcegraph/integrations team on GitHub.

## Additional resources

- [Processes](processes.md)
- [Goals](../../../../strategy-goals/strategy/integrations/index.md)
- Products
  - [Browser Extensions](browser-extensions/index.md)
  - [Sourcegraph Extensions](https://docs.sourcegraph.com/extensions)
  - [IDE Extensions](ide-extensions/index.md)
- [Support rotation](integrations-support-rotation.md)
- [Triad Roles and Responsibilities](triad-roles-and-responsibilites.md)
- [Team history](team-history.md)
- [Onboarding](onboarding.md)

## Tech stack

We use a modern, flexible tech stack. Here are some of the technologies we use to deliver on our goals:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/) + [Bootstrap](https://getbootstrap.com/)
- [GraphQL](https://graphql.org/)
- [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API)
- [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
