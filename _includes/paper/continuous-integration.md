## Continuous Integration for RSE-ops vs. DevOps

Continuous integration is an established practice of continually testing
and building before deployment. It typically is focused around a version
controlled code-base (e.g., GitHub or GitLab {% cite github; @gitlab %}) and
developers collaborate to review code, ensure that tests pass, and then
merge into a main branch. The goals are generally to ensure that when a
piece or software or service hits a production resource, there will be
no bugs or errors. Artifacts can be built and deployed on an event such
as a merge, or for a versioned release. The benefits of CI practices are
obvious, allowing developers to more easily collaborate on a code-base,
and interact with production artifacts on resources of interest. For
DevOps this typically includes different container orchestration
services, instances, or app deployments, and for RSE-ops this would
likely mean a local server or HPC cluster. The version control system
also typically provides an interface to make it easy to report and
respond to bugs (typically called issues) along with making suggestions
to improve code (called pull or merge requests) and tracking progress.
This kind of workflow fits well into any DevOps environment where change
is a constant.

In the context of HPC, the diversity of resources that codes need to run
on proves to be a much larger challenge for CI. The most popular, public
CI services are not designed to interact with a batch system. It
typically isn't sufficient to just test on a standard Linux x64, Mac,
and Windows architecture, but several architectures across different
operating systems (primarily Linux) that reflect the variety of the
cluster nodes. The first challenge this presents is that most standard,
web-based CI services (e.g., GitHub actions runners, standard GitLab
runners, TravisCI, Jenkins, and CircleCI) don't provide a rich variety
of architectures or graphical processing units (GPU), or when they do,
they don't provide much control of when you get them.

For this reason, for research software we typically see the developers
still develop using these systems, but then are not able to test on all
the systems that might be needed. The challenge is thus getting any kind
of modern web-based interface linked up directly to a cluster to run
tests. Work at national labs using GitLab
{% cite Mendoza_undated-lz; @noauthor_undated-fv %}, and specifically having a
locally deployed Gitlab server with custom runners on various resources
{% cite noauthor_undated-jd %} has been a way to unite these two worlds.
Managing such an integration requires thinking about how to manage
resources, user accounts, time allocations, and machine access. Another
challenge is that there is is no standard workflow language for CI, and
perhaps there should be.
<br><br>
{% bibliography --cited %}