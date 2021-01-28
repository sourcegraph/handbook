# Design and interaction guidelines

Sourcegraph’s search experience is the application’s primary interaction. As such, the design is tailored to the search use case by prioritizing code over other elements.

With the addition of campaigns, repository groups, and code insights, the product is quickly evolving. As such, its design must evolve to meet the experience requirements of these new features. 

This document will describe the current design and interaction models and describe the principles we will utilize to inform our design and interaction choices moving forward.

## Two design styles
Sourcegraph utilizes two design and interaction styles which are tailored to the content they display:

Search - An IDE like, full screen, high density, low contrast ui (for elements other than code) which centers on the display of code
Web application - a more traditional web application style with larger margins and padding, increased contrast and standard web page design experience requirements

## Code pages design

In Sourcegraph’s search, file, diff and other views, code is the most important element. To collectively refer to these pages we use the phrase 'code pages'. The design of these pages should focus on code as the most important element. Contrast is balanced so that code stands out above all else. Panels clearly segment content and tools from the code. Pages are full width, and margins and padding are slim to increase the density of information which helps us display as much code on the screen as possible. 

The interaction model of the search experience is also unique. Clicking text on the page will almost always result in running a query or viewing a file. In a normal web application, we would clearly highlight these interactive elements so that the user understands where the actions are. If we were to do so on search pages, these elements would quickly outweigh and overwhelm the code. 

### Examples:

* [Search results](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:.*/go+auth&patternType=literal)
* [File views](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/package.json)

<img src='./margins-example.png' />

_Small margins and reduced padding help to minimize scanning and scrolling. This allows developers to see code faster… and fit more of it on the screen._


### Code page icons

In code pages, we generally display icons without labels. This is a common pattern in IDEs and other complicated UIs with many functions. This helps us maintain a high amount of information density while exposing many features within a single click. 

<img src='./icons-example.png' />

_Extensions and file menus compared with the VS Code’s git and windowing functions._

## Web application page design

We increasingly need to render standard webpages that present larger bodies of text to the user, accept user input, or allow management of elements. These pages require page widths and margins that promote text readability, a clear distinction between links and body copy, and padding and margins that allow elements to state their importance and guide users through the content. 


### Example:

[Repository groups](https://sourcegraph.com/refactor-python2-to-3)
[Settings](https://sourcegraph.com/users/rrhyne/settings)
[Extensions](https://sourcegraph.com/extensions)
[Campaigns](https://k8s.sgdev.org/campaigns?visible=10)

<img src='./signup-example.png' />

_Clearly recognizable links help orient users to common signup actions._

<img src='./large-margin-example.png' />

_The large margins around the Kubernetes logo convey to the user: “This page is focused on Kubernetes”._

### Web application icons

In the web application sections, icons should generally be accompanied by a label. See this article on [Icon Usability](https://www.nngroup.com/articles/icon-usability/) from the Nielson Norman group for more information. Note that this stance is contradictory to the requirements for icons in search application pages.


## Web application content rendered in code pages

Drawing the line between what is a code page and what is a web application page can be difficult. For example, repository pages are clearly part of the IDE like code viewing experience in that they are full-screen and contain a tree view panel leading to the code they contain. However, these pages initially present content such as tags, branches, and commits that would benefit from web application styles such as reduced content width and more obvious separation between links and copy. 

In these cases, we can utilize web application styles inside the search context to give links greater importance through color and provide additional margin and padding to aid readability. 

### Todo:

* Displaying state in buttons
  * Default to the current state for the icon so that the user understands what is happening now
  * The button text should describe the action that will occur on click
* Developer friendly as a first principle
  * Keyboard navigation is a priority
* Accessibility 
  * People of all abilities should have first-class access to code and coding. We cannot fulfill that mission if our application is not accessible
  * Contrast
  * Colorblindness
  * Keyboard navigation
  * Screen readers
* General design guidelines
  * Minimum sizes of features
  * Margins between elements should be a minimum .5rem (8px) 
  * Icon minimum size should be 20px 
* Search principles
  * Additive
  * Replacement
  * Iterative
* Dates
  * Natural language patterns
  * Dates should use natural language for one month from the current date. This is partly to avoid confusion caused by variances in the display of month/day in various locals: Is 12/11/2020 the 12th of November or the 11th of December.
  * Examples
    * 3 days ago
    * 1 week ago
    * 13 days ago
    * 2 weeks ago
    * 20 days ago 
    * 3 weeks ago
    * March 3, 2020
  * Display 
  * Effect of locale
* Tables
  * Header alignment
* Copy
  * [Follow the Sourcegraph style guide](https://about.sourcegraph.com/handbook/communication/style_guide)
