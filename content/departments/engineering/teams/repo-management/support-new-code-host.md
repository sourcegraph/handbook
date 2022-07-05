# Adding support for a new code host

Sourcegraph currently supports a number of different [code hosts](https://docs.sourcegraph.com/admin/external_service).

Not all code hosts are supported "natively". Native support means a code host type is listed as an option in our UI and it is seamless to add. In some cases it is possible to work around this if the code host is based on `git`, in which case it can be added via our [other git repository hosts](https://docs.sourcegraph.com/admin/external_service/other) mechanism.

The following are the list of changes required to natively support another code host type.

## Steps required for all new code host types

We'll use [Pagure](https://pagure.io/) as an example. Here's the [commit](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/commit/2ad7025525622f0d80da66234b51b11526da68f6) that introduced the majority of the changes required.

1. Add a [feature flag](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@078c426697c5bc6fedcba5b7851f3a2c194101f6/-/blob/schema/site.schema.json?L128) to guard it until the implementation is complete
1. [Implement](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/internal/repos/pagure.go?L22) the [Source](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5/-/blob/internal/repos/sources.go?L74) interface. To do this you'll most likely need to create a [client](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/internal/extsvc/pagure/client.go?L29:6) for the code host
1. Add code host [configuration schema](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%4039265b5+case+*schema.PagureConnection&patternType=literal)
1. Add a new [kind](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/internal/extsvc/types.go?L73) and [type](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/internal/extsvc/types.go?L91)
1. It also needs to be added to our [GraphQL schema](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/cmd/frontend/graphqlbackend/schema.graphql?L2248)
1. Update to ensure all the cases where we check for [types](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%4039265b5+case+TypePagure&patternType=literal) and [kinds](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%4039265b5+case+KindPagure&patternType=literal) are covered
1. The same needs to be done for places where we need [unmarshal config](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%4039265b5+schema.PagureConnection+-f:test%5C.go%24&patternType=literal)
1. Update our [UI code](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/client/web/src/components/externalServices/externalServices.tsx?L1218) so that the new code host type is displayed

A rough estimate for the above changes is two weeks of development work for 1 onboarded developer.

## Additional steps required if the code host it not git based

If the code host does not use git then we need to create a custom [VCSSyncer](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@078c426697c5bc6fedcba5b7851f3a2c194101f6/-/blob/cmd/gitserver/server/vcs_syncer.go?L12) implementation that can import the repository from its original format into a git repository.

We'll use [Perforce](https://www.perforce.com/) as an example.

1. [Implement](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@e474119750b4e0700eaf2750933100c019bf2695/-/blob/cmd/gitserver/server/vcs_syncer_perforce.go?L17) the [VCSSyncer interface](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@078c426697c5bc6fedcba5b7851f3a2c194101f6/-/blob/cmd/gitserver/server/vcs_syncer.go?L12)
1. You may need to update the [gitserver](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/cmd/gitserver/Dockerfile?L6) and [server](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/cmd/server/Dockerfile?L2) `Dockerfile` so that any required CLI tools are available at runtime

A rough estimate for the above effort is two weeks of development work for 1 onboarded developer, assuming third party tooling already supports incremental imports from the source repo type.

## Extra steps if permissions syncing is required

In order to support permissions syncing, we need a way of mapping permissions from the code host with users in the Sourcegraph instance. The decision on how to perform the mapping varies, but the most common option is to map users based on verified e-mail addresses.

1. [Implement](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/enterprise/internal/authz/perforce/perforce.go?L27) the [AuthProvider](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/internal/authz/iface.go?L87) interface
1. Provide the [authorization](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/schema/perforce.schema.json?L67-78) section in config

Bear in mind that some code hosts support permissions that are more granular than a repo. For example, Perforce support per path permissions. In this case, [sub-repo permissions](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@39265b5cf53167a86bd993a0f0081b49c18aab81/-/blob/internal/authz/iface.go?L67) need to be imported.

We currently only support per path filtering in sub-repo permissions.

The implementation can vary a lot depending on the specifics of each code host, but again, a rough estimate is about two weeks of work.

## Considerations

- Converting to `git` from another source can take a long time
- Incremental importing is necessary so that changes can be pulled more frequently
- Concepts like branches sometimes don't map directly to the way they are supported in `git`
