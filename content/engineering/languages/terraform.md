# Terraform style guide

- General Terraform [styleguide](https://www.terraform.io/docs/configuration/style.html)

## Formatting

- Format all code using `terraform fmt`
- Remove duplicate empty new lines
  > Terraform > `0.12`, the `fmt` command lost the ability (as it was too aggressive) to remove multiple empty new-lines, etc.

## General

- Use **lowercase**
- Use [snake_case](https://en.wikipedia.org/wiki/Snake_case) for all resources and names
- Pin Terraform version
- Pin all providers to a major version

## Resources

- Avoid duplicating the resource type in its name
  > good: `resource "google_storage_bucket" "foo"`
  > bad: `resource "google_storage_bucket" "foo_bucket"`

## Variables and Outputs

- Remove any unused variables
- Include a `type`
- Include a `description` if the intent of the variable is not obvious from its name
- Names should reflect the attribute or argument they reference in its suffix
  > good: `foo_bar_name` good: `foo_bar_id` bad: `foo_bar`
- Use plural form in names of variables that expect a collection of items
  > multiple: `foo_bars` single: `foo_bar`

## Basic Project Layout

```
├── main.tf       # Main terraform configurations
├── foo.tf        # Terraform resources for `foo`
├── output.tf     # Output definitions
├── provider.tf   # Providers and Terraform configuration
└── variables.tf  # Variables definitions
```

### `providers.tf`

Contains all `providers` and `terraform` blocks.

### `main.tf`

Contains Terraform `resources`, `data` and `locals` resources. On larger projects, keep generic `resource`, `data` and `locals` definitions in this file and split the rest to other files.

### `output.tf`

Contains all `output` definitions.

### `variables.tf`

Contains all `variable` definitions.
