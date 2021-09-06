# Why can't RSE-ops follow DevOps?

The biggest factor that originally seemed to separate RSE-ops with
DevOps was HPC system complexity, and inability to change quickly.
However, clouds now are also increasing in complexity, not just in
services offered, but machines (and general details) relevant to each
service. A second factor is availability of resources. On HPC,
"on-demand" usually means waiting in a queue for your turn. This means
that software development on HPC is a slow task, and typically the
software is not developed alongside the system, but perhaps only used or
tested there after the fact.

For working in the cloud, we operate on the basis of being able to make
services and systems modular. Any piece of software can be installed
when needed on a cloud resource, whereas the process is more complicated
for HPC, primarily needing to be done by someone with adequate
permissions, and in a way that the software can exist alongside other
software and be accessed in a particular way (loaded as a module, as a
container, etc.). On the cloud a piece of software can be run exactly
with a container base that is needed, and there is little or no concern
for dependency with other bases. The two biggest hardware dependencies
that containers have, arguably host MPI and GPU, are also hugely
important factors when figuring out compatibility.

There is also little concern with using updated systems or software --
unlike HPC that needs to always support legacy systems, deployment on
the cloud is more "use and throw away" to easily support whatever
system is desired. As long as services are written in portable languages
and don't require high performance with respect to node configuration,
they can be run anywhere, and people are agnostic to the details.

This allows developers to work on the bleeding edge and perhaps only be
concerned with supported the latest top systems that might want to run
the software (e.g., Mac, Linux, and Windows latest). Cloud DevOps also
allows for scaling and deploying on demand resources with the only
constraint being cost. For RSE-ops on HPC, the scaling is limited to the
cluster, along with the number of people using it.

A major helper to this current landscape would be well-established tools
to allow for ease of testing for an HPC user. Whether this means testing
on a node allocated for testing on the cluster, or a separate build
system that mimics the cluster environment, being able to trigger builds
and tests alongside a code base with a CI pipeline would greatly improve
the software development life-cycle on HPC. If such a system existed,
and if it were easy for RSE software developers to develop, test, and
deploy their own software, system administrators could better focus on
improving or enhancing the systems instead of managing software for
them. We could even imagine going a step further and having a more
automated ability to use software for the average user. For example, if
a workflow system is better integrated into the cluster, akin to how an
RSE developer could push and trigger builds and tests, an HPC user could
push a workflow to trigger running a test job, and upon success, if
desired or needed, running it at scale. It would be amazing if we could
eliminate the need to ssh in to a log in node, learn how to use a job
manager, and otherwise interact with HPC. To the user, if the cluster
could be exposed as a service with an easy interface to monitor jobs and
job submission could be integrated with the user's workflow, the speed
of development and analysis would greatly increase.

Obviously, the greatest challenges to making the above a reality come
down to security and centers being able to support more modern
authentication systems. Exposing any cluster resource to be accessible
via continuous integration or version control triggers requires
connecting the resource to external services, which always is a risk,
but there are well developed authentication frameworks for that.

Moving data from some external storage to a cluster resource to be
analyzed is another challenge. A tiny step of progress is the ability to
link a traditional HPC single sign on (SSO) scheme (e.g., LDAP or
Kerberos) to a version control service (e.g., GitLab or GitHub) to allow
for role based access, but it's not clear how often this is done or if
it's a good direction.
<br><br>
{% bibliography --cited %}