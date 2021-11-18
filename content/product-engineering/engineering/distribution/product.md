# Sourcegraph Distribution product & personas

## The Distribution of Sourcegraph _is a product in itself_

The distribution of Sourcegraph is, to a large extent, a [constraint satisfaction problem](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem):

- Non-opinionated site admins demand we guide them.
- Opinionated site admins demand we support their extensive, unique, complex configurations.
- Engineers at Sourcegraph demand we support quick, rapid, iteration.

The third constraint can often feel at odds with the first two, and this is by design: we must find ways to support quick and rapid iteration while also supporting the expansive set of requirements from customers. This is no trivial task.

These constraints are the reason that the distribution of Sourcegraph is a product in itself: we're not merely choosing the technology that one person wants, or even the technology that _we want_, but rather we have an extremely wide array of users (advanced and novice site admins, Sourcegraph engineers, etc.) with vastly different requirements and goals and we must identify the best way to support them all mutually.

## Personas

There are several site admins we aim to support:

1. Non-opinionated, inexperienced site admins who just quickly want to get a taste of Sourcegraph.
1. Opinionated, experienced site admins who demand we support their custom configuration and infrastructure requirements
1. Non-opinionated, inexperienced site admins who go with our recommendations and require guidance/hand-holding. We're on the hook for anything that goes wrong.
1. Non-opinionated site admins who have heavy Kubernetes infrastructure restrictions imposed on them
1. Site admins who want a massive-scale deployment but cannot, or refuse to, use Kubernetes
1. Site admins who want small-scale deployments but have higher expectations around stability and performance guarantees than most site admins on cluster deployments.

Additionally we aim to support engineers in Sourcegraph:

1. The Sourcegraph engineer trying to make some larger architecture change
2. The Sourcegraph engineer trying to add or heavily scale a service
3. The Sourcegraph engineer trying to perform some deeply complex data migration

## Continue reading

Return to the [Distribution team page](index.md) to continue reading.
