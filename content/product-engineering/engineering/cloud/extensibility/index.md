# Extensibility team

The extensibility team owns our code host and third-party integrations (including our browser extension) and our [Sourcegraph extensions](https://docs.sourcegraph.com/extensions). Our mission is to bring the value of Sourcegraph to everywhere you work with code and to bring the value of other developer tools into Sourcegraph.

## Members

<section>
  <div class="row" style="display:flex;">
    <div class="col" style="flex: 1;">
      <div>
        <div>
          <a href="../../../../company/team/index.md#sara-lee" target="_blank" rel="noopener">
            <img src="https://storage.googleapis.com/sourcegraph-assets/handbook/extensibility/sara.png" alt="Picture of Sara Lee" style="background: transparent; width:128px;"/>
          </a>
        </div>
        <div style="text-align: center;">Sara Lee</div>
        <div style="text-align: center; font-size: 12px;">Product Designer</div>
      </div>
    </div>
    <div class="col" style="flex: 1;">
      <div>
        <div>
          <a href="../../../../company/team/index.md#murat-sutunc" target="_blank" rel="noopener">
            <img src="https://storage.googleapis.com/sourcegraph-assets/handbook/extensibility/murat.png" alt="Picture of Murat Sutunc" style="background: transparent; width:128px;"/>
          </a>
        </div>
        <div style="text-align: center;">Murat Sutunc</div>
        <div style="text-align: center; font-size: 12px;">Engineering Manager</div>
      </div>
    </div>
    <div class="col" style="flex: 1;">
      <div>
        <div>
          <a href="../../../../company/team/index.md#beatrix-woo" target="_blank" rel="noopener">
            <img src="https://storage.googleapis.com/sourcegraph-assets/handbook/extensibility/beatrix.png" alt="Picture of Beatrix Woo" style="background: transparent; width:128px;"/>
          </a>
        </div>
        <div style="text-align: center;">Beatrix Woo</div>
        <div style="text-align: center; font-size: 12px;">Software Engineer</div>
      </div>
    </div>
    <div class="col" style="flex: 1;">
      <div>
        <div>
          <a href="../../../../company/team/index.md#erzhan-torokulov" target="_blank" rel="noopener">
            <img src="https://storage.googleapis.com/sourcegraph-assets/handbook/extensibility/erzhan.png" alt="Picture of Erzhan Torokulov" style="background: transparent; width:128px;"/>
          </a>
        </div>
        <div style="text-align: center;">Erzhan Torokulov</div>
        <div style="text-align: center; font-size: 12px;">Software Engineer</div>
      </div>
    </div>
    <div class="col" style="flex: 1;">
      <div>
        <div>
          <a href="../../../../company/team/index.md#tharuntej-kandala" target="_blank" rel="noopener">
            <img src="https://storage.googleapis.com/sourcegraph-assets/handbook/extensibility/tj.png" alt="Picture of TJ Kandala" style="background: transparent; width:128px;"/>
          </a>
        </div>
        <div style="text-align: center;">TJ Kandala</div>
        <div style="text-align: center; font-size: 12px;">Software Engineer</div>
      </div>
    </div>
    <div class="col" style="flex: 1;">
      <div>
        <div>
          <img src="https://storage.googleapis.com/sourcegraph-assets/handbook/extensibility/join-us-vermillion.png" alt="Picture with CTA: Join Us" style="background: transparent; width:128px;"/>
        </div>
        <div style="text-align: center;">P.S.</div>
        <div style="text-align: center; font-size: 12px;">Software Engineer</div>
        <div style="text-align: center; font-size: 12px;">(starting 01/10)</div>
      </div>
    </div>
  </div>
</section>

## Important Links

- [Processes](processes.md)
- [Goals](../../../../company/strategy/cloud/extensibility/index.md)
- Products
  - [Browser Extensions](browser-extensions/index.md)
  - [Sourcegraph Extensions](https://docs.sourcegraph.com/extensions)
  - [IDE Extensions](ide-extensions/index.md)

## Vision

Sourcegraph powers your first stop for any information about your code, for any tool or website you use.

1. Build a healthy ecosystem of Sourcegraph extensions, built by developers everywhere, who want to bring the power of existing developer tools they love into our platform.
1. Build new paths to get value from Sourcegraph on other websites and IDEs.
1. All of Sourcegraph's most powerful features are easily available on most any code host while using any browser thanks to native integrations and browser extensions.

## Responsibilities

_The extensibility team has many ownership areas, but not all of them are under active development at the same time. We nonetheless list them all here as a source of truth for deciding if an issue, feedback, or comment is relevant to the extensibility team. You can find our current priorities in our [goals page](../../../../company/strategy/cloud/extensibility/index.md)._

1. Sourcegraph extensions
   - Providing a Sourcegraph extension API that enables developers to bring data from their favorite developer tools into their Sourcegraph workflow.
   - Build and maintain useful Sourcegraph extensions.([Sourcegraph-maintained extensions](https://docs.sourcegraph.com/dev/background-information/sourcegraph_extensions); [video demos](https://www.youtube.com/watch?v=en9kmvPqpIU&list=PL6zLuuRVa1_gYlZ0H4O0MbJ0Pi7ugH63s)).
   - Documentation and tutorials that enable third-party developers to create actively useful extensions.
   - Building and maintaining the extensions registry, discovery paths, and extensions developer toolsets, to create an ecosystem around Sourcegraph extensions.
1. [Code host integrations](https://docs.sourcegraph.com/integration)
   - Add native support for Sourcegraph in code hosts (for example: [GitLab native integration](https://docs.sourcegraph.com/integration/gitlab#gitlab-ui-native-integration)) when possible, so all users of a Sourcegraph instance can get features like code intelligence on their code host without individual setup.
1. [Browser extensions](browser-extensions/index.md)
   - Develop and maintain [browser extensions](https://docs.sourcegraph.com/integration/browser_extension) that surface code intelligence and other Sourcegraph features on code hosts (for example: Github).
1. IDE and other third-party code view integrations
   - Develop and maintain IDE integrations that bring Sourcegraph functionality right to your IDE
   - Explore and develop features for other popular code-view websites like https://pkg.go.dev/ and messaging platforms like Slack

## Contact

- #extensibility channel or @extensibility on Slack
- [team/extensibility](https://github.com/sourcegraph/sourcegraph/labels/team%2Fextensibility) label and @sourcegraph/extensibility team on GitHub.

## Tech stack

We use a modern, flexible tech stack. Here are some of the technologies we use to deliver on our goals:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/) + [Bootstrap](https://getbootstrap.com/)
- [GraphQL](https://graphql.org/)
- [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API)
- [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

## Extensibility history

In March 2016, [Sourcegraph released its first browser extension](https://about.sourcegraph.com/blog/browse-review-code-on-github-like-in-an-ide-with-the-sourcegraph-chrome-extension/) so that you can take the value of Sourcegraph to your code host for code reviews.

In October 2018, [Sourcegraph released the extensions API](https://about.sourcegraph.com/blog/sourcegraph-2-12-release-notes/) so that others could build on top of Sourcegraph, and so that Sourcegraph could integrate with your other tools.

In June 2019, [Sourcegraph created a BitBucket native integration](https://github.com/sourcegraph/bitbucket-server-plugin/commit/e450abf50c128fa5ee18439ff93e0631e4868de7) so you don't need to install the browser extension to get the value of Sourcegraph on your BitBucket code host.

In November 2019, [Sourcegraph partnered with GitLab to create a native integration](https://about.gitlab.com/blog/2019/11/12/sourcegraph-code-intelligence-integration-for-gitlab/).

In December 2020, [Sourcegraph released a Safari Extension](https://apps.apple.com/us/app/sourcegraph-for-safari/id1543262193) to support Safari users with our browser extension, in addition to Chrome and Firefox.

In early 2021, the Extensibility team was formed as an offshoot of the "web team" (which became the 2021 Developer Insights org) because the product direction, support and maintenance, validation, and future promises of Sourcegraph's browser extensions, native code host integrations, and Sourcegraph extensions required and deserved the resources of its own team.
