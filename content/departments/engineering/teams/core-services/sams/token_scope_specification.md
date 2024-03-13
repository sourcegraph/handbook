# SAMS Token Scope Specification

This document formally defines:

1. Components of a token scope, i.e. how do token scopes look?
1. Token scope matching strategy, i.e. how authorization works?

## Basic format

A scope is always consists of three parts: **service**, **permission hierarchy**, and **action**, and are separated by double colons `::`, e.g. `sams::user.roles::read`, `ssc::subscriptions::read`:

1. The total length of a scope cannot exceed 255 characters.
1. **Service**: the slug of the service name, up to 30 characters.
   - It can only contain `[a-z_]` characters, e.g. `sams`, `ssc`, `dotcom`, `cody_gateway`.
1. **Permission hierarchy**: the hierarchy of the permissions under the given service, up to 215 characters.
   - It can only contain `[a-z_.]` characters, e.g. `user`, `user.metadata`, `user.roles`.
   - There is no conceptual limit for the number of hierarchy levels (other than the scope length limit).
   - Every hierarchy grants access to all sub-permissions (aka. prefix matching), e.g.:
     - `user` grants `user.roles`, `user.metadata`, etc.
     - `user.metadata` grants `user.metadata.cody`, `user.metadata.dotcom`, etc.
     - If an access token is granted with `<service>::user.profile::write`, the client is able to write to ALL aspects of the user profile. If a service wants to only allow access to a specific section, the service will need to create more specialized scopes. e.g. granting both `<service>:user.profile.avatar_url::write` and `<service>::user.profile.display_name::write`.
   - The hierarchy design also helps us to avoid unnecessarily updating all services when a new sub-permission is introduced.
   - It is by design that “access-to-everything” of a service is explicitly disallowed, therefore no notion provided for it.
1. **Action**: the allowed action for the given permission of the given service, up to 10 characters.
   - It is a predefined/hardcoded list of values, it has no point being dynamic (strings) for being conservative:
     - `read`: allowed to read resources from the service
     - `write`: allowed to create or make updates to the resources of the service
     - `delete`: allowed to delete resources on the service
   - Every `(permission, action)` must be granted explicitly, there is no action hierarchy, e.g. having write permission doesn’t automatically grant read permission.

## Scope alias

This is initially intended for making OIDC scopes be compatible with our design (`profile` -> `sams::user.profile::read`), but could also be a useful extension in the future, e.g. in the event of scope renaming efforts.

## References

- [SAMS token scope specification draft](https://docs.google.com/document/d/1ixjjEE9AhSt-ea_1J2yoRENwCEVZArRRqFxUVkjjYW8/edit)
