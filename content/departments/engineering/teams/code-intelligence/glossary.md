# Code navigation Glossary

### build system

A tool that is used to transform code into a format where it can be executed, usually by carrying out a series of build steps (~almost always organized as a [directed acylic graph](#directed-acylic-graph)), each of which invokes a more lower-level tool (such as a [compiler](#compiler)).

A build system understands the relations between different files, [modules][#module] and [packages][#package].

In the context of code navigation, for out-of-the-box support, an [indexer](#indexer) needs to invoke the build system in the right way. (TODO: Clarify this!)

Examples:

- Bazel, Buck, Pants, Meson: Support many languages.
- Maven, Gradle, Ant: Primarily used for Java, Kotlin and Scala.
- CMake: Primarily used for C and C++, but also used for other projects. Strictly speaking, CMake is a "meta build system"; it generates build instructions which are executed by another build system (such as Make or Ninja).


### Code navigation popover

A box that shows up when hovering over an [identifier](#identifier) for which we have [search-based](#search-based-code-intel) or [precise code navigation](#precise-code-intel). Depending on the context, it may have (as of 2022 Apr 08):

- The [doc comment](#doc-comment) for the [symbol](#symbol) corresponding to the identifier.
- Buttons for [code navigation](#code-navigation).
- A label describing if the code navigation is search-based or precise.

### code navigation

Umbrella term for functionality such as [Go to definition](#go-to-definition), [Find references](#find-references) and [Find implementations](#find-implementations), which helps someone reading code to quickly understand how pieces of code are defined, used and related to one another.

### compilation

Roughly speaking, compilation is the process of taking code in a text based form to a binary format that can be run on a computer.

Usually, compilation is split into a few layers conceptually.

- [parsing](#parsing)
- [name resolution](#name-resolution)
- [type checking](#type-checking)
- optimization
- code generation

Depending on the language, name resolution and type checking may be interleaved. Together, these two phases are called [semantic analysis](#semantic-analysis).

Optimization and code generation are not relevant from the point-of-view of code navigation.

### compilation unit

A set of one or more files that are compiled together to produce build artifacts, such as object code.

The size (number of files + size of each file) of a compilation unit is tied to the speed of [incremental compilation](#incremental-compilation), which in turn limits the speed of [incremental indexing](#incremental-indexing). In particular, if a compilation unit spans multiple files, it is not possible (in the general) to perform incremental indexing at the granularity of files.

Different languages have different terms for a compilation unit. For example:

- [package](#package) (multiple files): Go, Java, Kotlin, Scala.
- [module](#module) (multiple files): Swift.
- [module](#module) (single file): TypeScript, Python, Haskell, OCaml.
- crate (multiple files): Rust.

### compiler

A tool that performs [compilation](#compilation).

Examples:

- Clang, GCC and MSVC are compilers for C and C++. Clang also supports Objective-C.
- Javac is a compiler for Java.
- Dotty is a compiler for Scala.

Many languages have only one (major) compiler. In such a situation, the compiler is sometimes referred to as "the (Language) compiler" instead of by its actual name.

### dependency

A dependency is conceptually a pair consisting of a name and a version. Dependency names are usually human-readable (e.g. `log4j`, `react`), whereas dependency versions can vary based on context (e.g. semver strings like `1.2.0` , git revisions like `cd23f0b823da349ae9d834ba970cbba`).

Since the terms [module](#module) and [package](#package) carry different meanings in different languages, we prefer using the term dependency instead if possible in contexts pertaining to more than one language.

Dependencies are sometimes further divided into:

- Core dependencies (⚠️ non-standard terminology): These are the dependencies of the core app/library code.
- Test dependencies: These are the dependencies of the code used for testing the core app/library code.
- Development (dev) dependencies: These include things like formatters, linters, test runners etc., which aren't strictly required for the main code or the tests, but are useful in day-to-day development.

### directed acylic graph

A structure with nodes and directed edges (arrows between the nodes) such that the edges do not form any cycles. Commonly abbreviated as DAG.

TODO: Link to a graphic here.

In the context of code navigation , the most important bit to know about a DAG is that it provides a clear structure for processing nodes (this is called "topological ordering" or "dependency order"). Conversely, the presence of a cycle in a situation where a DAG is expected (e.g. cyclic dependencies across build steps) is likely to lead to a hang and/or a crash, or potentially even silently incorrect results.

### doc comment

Shorthand for documentation comment, sometimes called a "docstring."

A code comment that is intended to be surfaced by documentation tools, as a description of an entity like a function, a type etc. The [Code navigation popover](#code-intel-popover) surfaces a doc comment when possible.

In code, these are often written directly above or below an entity's definition, and typically colored in a more dull shade. Here is an example in TypeScript:

```typescript
/// toCelsius converts temperature from Farenheit to Celsius.
function toCelsius(temperature: number): number {
  return ((temperature - 32) * 5) / 9
}
```

### Find implementations

TODO

### Find references

TODO

### Go to definition

TODO

### grammar

A description of the syntax of a (programming) language, usually in a machine-readable form, which makes it possible to [parse][#parsing] code written in that language. After the code is parsed, it can be processed further (e.g. [syntax highlighting](#syntax-highlighting), identifying local variables etc.).

"Grammar" is used as shorthand for the file itself which contains the grammar.

Same as [syntax definition](#syntax-definition).

Examples:

- [tree-sitter grammar for Go](https://github.com/tree-sitter/tree-sitter-go/blob/master/grammar.js)
- [Sublime Text grammar for Ruby](https://github.com/sublimehq/Packages/blob/master/Ruby/Ruby.sublime-syntax)

### hover tooltip

Same as [Code navigation popover](#code-intel-popover), which is the preferred term.

### keyword

TODO

### identifier

A string representing the name for an entity in a programming language.

For example,

```typescript
function myFunction(myParameter: MyType) {}
function myOtherFunction(myParameter: MyType) {}
```

has 4 unique identifiers: `myFunction`, `myOtherFunction`, `myParameter` and `MyType`. `function` is not an identifier; it is a [keyword](#keyword).

Usually, identifiers consist of alphanumeric characters and underscores. However, many languages allow "raw identifiers", which ~essentially can include arbitrary strings. Languages using prefix notation also allow nearly any non-bracket character in an identifier.

In terms of a language [grammar](#grammar), identifiers are a specific kind of leaf node in the grammar. This means that identifiers are a _syntactic_ construct. In contrast, [symbol](#symbol)s are a _semantic_ construct.

### incremental compilation

TODO

### incremental indexing

TODO

### indexer

A tool that does [indexing](#indexing).

In the context of code navigation, this usually refers to a _precise_ indexer, i.e. something which emits [precise code navigation](#precise-code-intel) about a language. However, this is sometimes used as shorthand for "some tool that emits [LSIF Typed](#lsif-typed)".

### indexing

TODO

### Java Virtual Machine (JVM)

TODO

### language server

A language-specific tool that implements the [language server protocol](#language-server-protocol).

One language can have multiple language servers (e.g. different people can implement a language server for the same language).

### language server index format

A data format intended to support rich code navigation in development tools and web UIs. This format is emitted by [indexers][#indexer] and ingested by another development tool. Frequently abbreviated as LSIF.

[Official LSIF documentation](https://microsoft.github.io/language-server-protocol/specifications/lsif/0.6.0/specification/).

### language server protocol

A protocol used between an editor or IDE and a [language server](#language-server) that provides language features like auto complete, go to definition, find all references etc. Frequently abbreviated as LSP.

Originally popularized by VS Code (the protocol was defined by Microsoft), many editors and IDEs now support LSP natively or via plugins.

[Official LSP documentation](https://microsoft.github.io/language-server-protocol/).

### module

TODO

### name resolution

The process of deriving information about definitions and references.

### package

TODO

### package manager

TODO

### parsing

The process of converting code from unstructured plain text to a tree-like data structure (a [syntax tree](#syntax-tree)) that is more suited to further processing, such as syntax highlighting.

### precise code navigation

TODO

### reference

TODO

### reference panel

TODO

### Rockskip

An algorithm for fast indexing for repositories with deep history.

TODO: Link RFC

### SCIP

Recursive acronym for the [SCIP Code Intelligence Protocol](https://github.com/sourcegraph/scip).
Also accompanied by a CLI tool named `scip`.

Before the announcement, it was developed under the name "LSIF Typed."

### search-based code intel

TODO

### semantic analysis

TODO

### Squirrel

TODO: Link RFC

### symbol

A symbol is conceptually a pair consisting of an [identifier](#identifier) and scoping information, which describes the original entity the [identifier](#identifier) is referring to.

If [name resolution](#name-resolution) completes without errors, all identifiers should have corresponding symbols. Usually, this is a N:1 mapping. For example,

```typescript
function myFunction(myParameter: MyType) {}
function myOtherFunction(myParameter: MyType) {}
```

has 5 unique symbols (assuming `MyType` is a [type](#type) defined elsewhere):

- `myFunction`
- `myOtherFunction`
- `myParameter` in `myFunction`
- `myParameter` in `myOtherFunction` (which is logically separate from the identically named parameter in `myFunction` due to scoping rules)
- and `MyType`.

Recall from the [identifier](#identifier) description that this code snippet has 4 unique identifiers. The identifier `myParameter` corresponds to two different symbols in two different contexts.

In some languages like Nim, this mapping is N:M instead of N:1, because they support some form of identifier normalization. For example, in Nim, `my_var` is treated as equivalent to `MyVar`.

N.B. In the context of building/linking code, "symbol" is sometimes used as shorthand for "object code symbol" rather than "semantic symbol." For example, most compilers do not emit object code symbols for local variables (they are directly manipulated on the stack or in registers). However, an indexer will usually want to emit semantic symbols for locals to enable code navigation.

However, in the context of code navigation, we are ~almost never interested in talking about object code symbols.[^object-code-symbols] So it makes sense to use "symbol" instead of the longer "semantic symbol."

[^object-code-symbols]: This could potentially change, if say, we integrated code navigation with tools that aggregate/emit stack traces for native code.

### symbols sidebar

TODO

### syntax definition

Same as [grammar](#grammar).

### syntax highlighting

The process of converting some code and highlighting/coloring parts of the code based on the syntax.

Example: [JSON files are syntax highlighted by GitHub](https://github.com/sourcegraph/sourcegraph/blob/main/package.json); string keys have a different color than string values.

### syntax tree

An tree-like data structure generated from [parsing](#parsing), which is better suited for tasks like [syntax highlighting](#syntax-highlighting) compared to plain text. Does not strictly need to be a tree; can sometimes be a directed acylic graph (DAG), or a tree + some auxiliary tables.

Usually divided into two kinds:

- Abstract syntax tree (AST): A syntax tree representing the essential syntactic elements of code, which are useful for [semantic analysis](#semantic-analysis). Conventionally excludes information about whitespace and comments. This means that it is not always possible to reconstruct the original code from an AST, making it unsuitable for tools like code formatters and syntax highlighters.
- Concrete syntax tree (CST): A syntax tree that maintains full information about whitespace and comments, allowing one to reconstruct the original source code if needed. This means that a CST is generally not as well-suited for performing [semantic analysis](#semantic-analysis) as an AST, as it can require paying attention to semantically irrelevant details.
  Sometimes called a "Lossless syntax tree" or "Lossless AST."

AST is a much more popular term, and is sometimes colloquially used in place of CST.

### toolchain

A set of developer tools that ships together, which can be used to develop code in some programming language. Toolchains commonly include:

- a [compiler](#compiler) or a standalone [type checker](#type-checker)
- a [package manager](#package-manager)
- a [build system](#build-system)

Some example of toolchains:

- Xcode includes a toolchain for Swift, Objective-C, C and C++.
- The Rust toolchain includes the Rust compiler (rustc), and a package manager + build system (cargo).

Not all languages have proper toolchains; rather they have an assortment of different tools from which one can pick an choose. For example, in the TypeScript ecosystem, the compiler ships separately and is developed independently of package management tools like npm/Yarn/pnpm.

### type

TODO

### type inference

The process of inferring the [type](#type)s for parts of a program that are not explicitly annotated with types. Here is an example in TypeScript:

```typescript
function makePair(x: number): []number { return [x, x] }
const a = 10 // 'a' is inferred to have type 'number'
const b = makePair(a) // 'b' is inferred to have type '[]number'
```

This example might be misleading in its simplicity; you might think that there isn't anything more to type inference other than "propagating" the types from constant values (like `10`) and based on annotations (such as on `makePair`). However, in practice, type inference for most industrial languages is quite complicated, and is not implementable in a language-agnostic way.

Techniques such as GitHub's "stack graphs" that are largely language-agnostic can only approximate type inference. This is why our strategy for [precise code navigation](#precise-code-intel) relies on leveraging language-specific [compiler](#compiler)s/[type checker](#type-checker)s, which include a complete implementation of type inference.

### type checker

A subsystem in a [compiler](#compiler) that performs [type checking](#type-checking) (in the broader sense of the term, including [type inference](#type-inference)), according to some [type system](#type-system).

Sometimes, the term "typer" is used instead of "type checker".

Sometimes spelled with a hyphen ("type-checker") or without a space ("typechecker").

### type checking

The process of checking if the [type](#type)s in a program are mutually consistent. For example, something like this would be a type error:

```typescript
const x: string = 'A'
const y: number = x // type error: cannot assign a string ('x') to a number ('y')
```

For the lack of a better term, "type checking" is frequently used as shorthand for the combination of "pure" type checking (i.e. no inference) and [type inference](#type-inference).

### type system

A set of rules defining the possible [type](#type)s for a language, as well as how to check type annotations and infer types for unannotated expressions.[^algorithmic-type-system]

Most commonly, these rules are not defined formally, but in terms of some implementation (e.g. "the type system implemented by MyPy (a typechecker for Python)"). This means that a language with multiple typechecker implementations may have multiple incompatible type systems. For example, [MyPy and PyType] are two different typecheckers for Python which [implement two different type systems](https://dl.acm.org/doi/10.1145/3426422.3426981).

[^algorithmic-type-system]: Strictly speaking, not all type systems work like this. This description covers a practical subset of _algorithmic_ type systems.
