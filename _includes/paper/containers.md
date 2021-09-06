# Informing one another: metadata for containers

One reason to think about how RSE-ops relates to DevOps is finding areas
of overlap, or opportunities to work together on tools or standards. As
an example or proof of concept, we can look more closely at container
technologies, which are used in both spaces. There are currently no
tools, standards, or best practices for definition and use of container
metadata, and there are several use cases where it is badly needed.
Ideally we could define a set of metadata that can solve use cases in
both, and then tools and best practices around that. As was started with
the [containers working
group](https://supercontainers.github.io/containers-wg) here are several
use cases that can be mapped to HPC or cloud with metadata that are
needed for both. This kind of exercise can be extended to talk about
more areas than just container technologies.

## Use Case: Architecture and Host-aware Pulls

A user pulling a container from a registry to a host, regardless if we
are on HPC or a cloud resource, should be able to get the best matching
one. The container already exists, so we could imagine some hook before
the pull looking at metadata on the host, and then sending it with a
request for a specific container. This idea is similar to one discussed
in [@Younge2019-uk]. In terms of metadata we would likely need:

-   Image architecture (to match to host) or best available for host per
    archspec

-   Hardware (and namely software compatibility with it)

-   Memory / resource needs (perhaps we can be more specific here) (an
    [example](https://github.com/spack/spack/blob/develop/share/spack/gitlab/cloud_pipelines/stacks/e4s/spack.yaml#L347-L364)
    that requires \"big\" nodes)

-   Software-level compatibility information (e.g., target CUDA driver
    version, MPI variant and version)

-   ABI info

For the above, it could be that there is a simple metadata matching
algorithm, or something as complex as an actual solve. For this to work,
the process of building images for different architectures needs to be
made easier. A cluster would need to be able to create a listing of
architectures present, and then issue those as requests to a build
service or registry.

This use case is different from using an HPC scheduler one because the
pull is happening from a node where it is intended to be run. Although
the scheduler could also be given a container unique resource identifier
to pull and then match it accordingly, the scheduler likely is given an
unknown (already pulled) container, and needs to match it to a node.

## Use Case: Container Discoverability

A user might want to quickly find a container that most closely matches
what they need. This likely would be some kind of database that indexes
metadata about containers, and provides it in a searchable interface. In
terms of metadata this use case would likely need:

-   Software and libraries

-   Domain-specific labels

-   ABI compatibility about the container (to assess compatibility with
    the host)

-   Image architecture

## Use Case: Dynamic Builds

A user on a resource should be able to navigate to a web interface,
select a set of software or features desired for a container, and then
have it built for use. This use case is slightly different because we
are not searching for existing containers, but building custom ones. In
terms of metadata, this use case would require:

-   Operating systems

-   Compatible package managers / software

## Optimization

Several user groups are interested in being able to collect metrics
about software and services. If containers could provide some of these
metrics, it would help their use case. In terms of metadata this use
case would likely need:

-   System and architecture details for where it was built

-   System and architecture details for where it has been successfully
    tested/run

For a limited scope of containers, such as those designed completely
from a package manager, some of this metadata could be included
automatically. However, most containers \"in the wild\" won't have been
developed from a single package manager, and there should still be a way
to discover these metrics.

## Use Case: Scheduler

A scheduler that is handed an unknown container should be able to
quickly sniff it and be able to best match it to a node. Akin to
Kubernetes, we would want to be able to match labels of nodes with
labels of containers to be run there. For this use case, we would also
need:

-   Image architecture

-   Hardware (e.g., ABI)

-   Memory / resource needs
