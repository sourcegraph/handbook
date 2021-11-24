# Sourcegraph Learn Style Guide

The Developer Education team maintains a platform of content and code at [learn.sourcegraph.com](https://learn.sourcegraph.com).

_This document is a living and collaborative document and will be iterated upon and expanded._

## Educational resources

Sourcegraph Learn tutorials and other resources have the following characteristics:

- Purpose
  - Explains _why_ someone would find value in reading a given tutorial
  - Communicates technical knowledge that is useful and relevant to developers
  - Educates the broadest audience possible
    - Any assumptions on the reader's technical level is communicated at the top to set expectations
  - Well-scoped
    - Provides enough detail of information for a given topic
    - Not overwhelming to read
    - Complex topics should be broken down into accessible pieces
  - Encourages readers to put knowledge into practice
  - Provides guidance for further learning
  - Community-centric
    - Supports open source
    - Supports developer collaboration
    - Supports growing the technical community
- Technical details
  - Correct, accurate, with no copy errors
  - Up to date with the latest version, or tied to a specific version
  - Explains code thoroughly
    - Readers should not be asked to run commands or code that they do not fully understand
    - Links to further reading if not everything can be covered in one document
  - Use compelling, realistic examples
    - If possible, use concrete examples from open source projects
  - Avoid using placeholder names that are meaningless, like `foo` and `bar`
  - Code and writing is logically structured and helps the reader all the way through
- Original and well researched
  - Resources are original and not syndicated from elsewhere
    - They can be syndicated elsewhere where Learn has the canonical link
  - When referring to a source, it is quoted and linked to
  - Plagiarized text is unacceptable
  - All resources are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
    - Any future syndication must maintain the license
    - The license enables language translations
    - Others may build off of our resources
    - Creative Commons is in the spirit of open source
- Tone
  - Authentic developer voice that is welcoming and inclusive
  - Conversational but not informal
  - Tends towards objectivity
  - Avoids making value judgements (for example, "This tool is great!")
  - Can make substantiated recommendations
- Language
  - Clear language
    - No idiomatic expressions
    - No puns
    - Avoid jokes
    - Accessible to many readers
    - Aim towards machine translatability
  - Grammatically correct
  - No errors in copy
  - Punctuation that helps with readability

See also Sourcegraph [Style and mechanics](../../communication/content_guidelines/style_and_mechanics.md).

## Resource types

Sourcegraph Learn is building a library of several different resource types. Different topics demand different genres. Below, find the current educational resource types that are on the Learn platform.

<<<<<<< HEAD
| Resource type | Description | Example |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Procedural tutorial | A how-to or similar procedural article which takes a reader through an entire technical process from start to finish. Readers should be able to copy and paste code snippets. These resources will front-load any assumptions made in a prerequisites section and will provide context along the way. | [How To Add Private Code Repositories to Sourcegraph](https://learn.sourcegraph.com/how-to-add-private-code-repositories-to-sourcegraph) |
| Conceptual guide | A high-level technical guide that introduces concepts to readers without providing procedural examples. | _Coming soon_ |
| Educational repo | An educational repository of a demo or sample app may tie into procedural tutorials or other educational resources but will live on GitHub with Sourcegraph’s other open source projects. The repo will leverage branches to make use of several states of the project. | [LifeCounter](https://github.com/sourcegraph-community/LifeCounter) |
| Troubleshooting tutorial | Troubleshooting tutorials provide technical guidance, supporting a developer who is running into problems. These tutorials will include error messages and provide information for how to resolve the error. | [How to troubleshoot Python ZeroDivisionError](https://learn.sourcegraph.com/how-to-troubleshoot-python-zerodivisionerror) |
| Cheat sheet | Cheat sheets are less contextualized than other tutorials, supporting developers in recalling syntax with code examples that work. These guides will assume familiarity with the technology and are for more experienced developers who need to remember how to do something in a given programming language, etc. | [How To Search Code with Sourcegraph — A Cheat Sheet](https://learn.sourcegraph.com/sourcegraph-cheat-sheet) |
| Quickstart video | A short-form video on a self-contained procedural topic demonstrated through video and audio with closed captioning and transcript. | [Three Ways to Search with Sourcegraph (Video)](https://learn.sourcegraph.com/three-ways-to-search-video) |

## Written resources structure

Our written resources should follow a consistent approach to structure. There should be introductory and concluding lines in each section to ensure that the reader knows what to expect and knows whether or not they have achieved relevant goals.

Generally, procedural tutorials should follow the following format:

- **Title**, H1 heading: Often following a _How to_ title format, though there are exceptions
- **Introductory paragraphs**, no heading: Should explain in 1-3 paragraphs why the reader may find this tutorial valuable, and what to expect to have completed by the end of the tutorial
- **Steps**, H2 headings: Often following a _Step 1 — Do something_ format, this is the body of the tutorial and where most of the procedure that the reader is following is documented
- **Secondary steps**, H3 headings: Nested headings should only be used when needed, and may refer to the same step on a different operating system, or closely related and more granular steps of a procedural process
- **Concluding section**, H2 heading: Can be _Next steps_ or *Further resources* — here is an opportunity to reiterate what the reader has accomplished and provide them with additional links to learn more

An example of a procedural tutorial is available at [How to add private code repositories to Sourcegraph cloud](https://learn.sourcegraph.com/how-to-add-private-code-repositories-to-sourcegraph).

## Code snippets in written resources

The Learn platform necessitates many code examples throughout learning resources. While we may need to make some assumptions of readers' knowledge at times, it is important to explain code relevant to the tasks within a given tutorial as much as possible. We do not want to encourage readers to run code that they do not understand well.

We prefer code that we expect readers to execute to be written in blocks so that it is readable.

Code should be introduced before the block, and summarized after. Ideally, executed code will have a corresponding output.

For example, if we were to explain the "Hello, World!" program in Python, we may do so in a way similar to the following.

---

We will be creating a small "Hello, World!" program in Python. Here, we will be using the `print()` function to output a string that we pass onto our screen. We'll be passing the string `'Hello, World!'`, which we can tell is a string by the single quotes on either side of it. If you prefer, in Python you can use double quotes (`"`) instead.

Type the following in your Python interpreter:

```python
print('Hello, World!')
```

Once you press `ENTER` to run the program, you'll receive the following output:

```
Hello, World!
```

At this point, the program was executed and you received the output expected from the `print()` statement. You can continue to practice by passing other strings to the function.

---

In the sample above, the `print()` function is briefly explained as well as the concept of the string data type. It presents the full code snippet that the writer expects the reader to run, and also provides the expected output so that the reader can ensure that they executed the code correctly. Finally, there is a concluding sentence that explains what has happened and what the reader may like to do next given their new knowledge of this command.

## Code style

_Coming soon_.
