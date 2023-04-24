# App Team Strategy

## Quicklinks

- [App FAQ](../../../departments/engineering/teams/app/app-faq.md)
- [Product marketing brief](https://docs.google.com/document/d/1bdpImO3e4kwC65HYU2woDE5tXwNgrjWVEGzcXs1YSoM/edit)
- [Key metrics and definitions](../../../departments/engineering/teams/app/analytics.md)
- [Looker dashboard](https://sourcegraph.looker.com/dashboards/440)
- [Pricing and packaging](https://docs.google.com/document/d/1KBFzC3HX_eOwq-K1lAE-LND5y6X9xpFY2WzDh84QRmA/edit#heading=h.trqab8y0kufp)
- [Github board](https://github.com/orgs/sourcegraph/projects/306/views/1)

## Vision (WIP)

By the end of this _quarter_ (FY23Q2), the Sourcegraph app will become _the Cody app_.

By the end of this _year_, Cody (app + extension) supercharges IDEs like VS Code and becomes the most obvious way for devs to get fast, reliable precise code intelligence at scale, across all their code (both local and remote), with Cody AI workflows to boot.

In the next _five years_, Cody will replace your IDE entirely.

For more on this vision, see [vision: Sourcegraph app becomes the Cody app](https://docs.google.com/document/d/1M8XKHR2sfJcwIm9ss8tjzproI4Tk68fLcqpGyotBZao/edit#heading=h.euplf3k940l2).

## Strategy & plans

### FY23Q2

The Sourcegraph app becomes _the Cody app_. The app becomes the companion to the Cody editor extension; this is the first taste of the app becoming a backend for the IDE. In order to make the app the backend for the IDE, we must lay the groundwork described in the following PRFAQs:

- [PRFAQ App: Package/bundle as a proper desktop app](https://docs.google.com/document/d/1T7D7g_z59hz3khzAszeqcnLFPnOcmeLJQiFP_mnc_i8/edit#)
- [PRFAQ App: Connect Cody and polish setup experience](https://docs.google.com/document/d/1XxHRPGn38X6Tne0cKCbbBZXGjQ3Pnjo78foahmrE41o/edit#heading=h.ifs8884gwpyg)

### FY23Q3

The Cody app becomes the backend for the IDE. The app speaks a new SCIP-based protocol to the editor, replacing LSP. The app has solved the problem of connecting the IDE to something that understands both personal code and company code, whether it lives locally or on a Sourcegraph cloud instance. The app supports Cody-specific workflows within the app UI.

### FY23Q4

The Cody app becomes an _obvious_ level-up for the editor with improved code intelligence: it will run the same indexers locally to incrementally index code as it's being written. The app's Cody workflows are so integral to how devs do their work that they start to wonder . . . Why do I need my IDE at all?
