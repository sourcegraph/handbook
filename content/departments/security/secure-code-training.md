# Secure coding training

This document contains required and optional reading materials for software engineers at Sourcegraph.

## Secure coding guidelines

We have [internal secure coding guidelines](https://sourcegraph.sourcegraph.com/notebooks/Tm90ZWJvb2s6Njc=) published. Here you will find examples of how to prevent certain vulnerabilities. It is mandatory for a software engineer to have read the guidelines.

After having read the guidelines, please complete the Continue item 'Secure Coding - Assessment'.

## Optional resources

### Backend specific resources

Snyk has published free security lessons. These lessons help you get familiar with certain vulnerabilities and bug-classes.

- Snyk security lessons:
  - https://learn.snyk.io/lessons/?categories=kubernetes
    - Container does not drop all default capabilities
    - Container is running in privileged mode
  - https://learn.snyk.io/lessons/?categories=golang
    - Open redirect
    - Cross-site scripting
    - SQL injection
    - Directory traversal

The Open Web Application Security Project has published a book about security practices for Go. It includes source code samples and is available as markdown or PDF: OWASP Go-SCP.

### Frontend specific resources

#### React

Recommended reading materials for React: - Snyk - Top 10 React security best practices: https://snyk.io/blog/10-react-security-best-practices/

#### JavaScript

Recommended Javascript lesson about preventing DOM based cross-site scripting and ReDoS: - https://learn.snyk.io/lessons/?categories=javascript - DOM XSS - ReDoS
