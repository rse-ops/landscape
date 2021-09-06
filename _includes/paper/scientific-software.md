## Scientific Software for RSE-ops vs. DevOps

Installation of scientific software on HPC is a non-trivial task. To
maximize the efficiency of any piece of software and maximally utilize
an underlying resource, it's typically ideal to install it natively on
the system, as opposed to a containerized environment, which is arguably
a foundation of modern DevOps {% cite containers-intro %}. However, studies are
increasingly showing that containerization overhead is in fact low
{% cite Torrez2019-ho %}, and so the main distinguishing difference between
using containers ("DevOps") and native install (traditional HPC) is
ultimately the portability of the software, and that HPC software must
be built across a wide set of architectures. RSE-ops is an interesting
combination of these two realities, as containers are widely used on HPC
{% cite singularity; @charlie; @podman %} but the environments must also support
having complex software stacks alongside one another without conflicting
dependencies. This means that modules are common
{% cite LMOD; @environment-modules %}, and even modules paired with containers
{% cite shpc %} and users are encouraged to "BYOE" or "bring your own
environment" through containerization and local install in the case
that the software can be installed in user space. Otherwise, the
software must be requested to be installed by the administrators of the
cluster.

Thus, the strategy for deployment of scientific software usually comes
under the decision of the Linux administrators that manage the cluster.
A piece of software or new technology can only be embraced when it is
asked for heavily by users, and this ask is finally heard by the Linux
administrators. While some large centers have separate teams for system
admins and user support staff, smaller institutions tend to have a small
group of people serving both roles. In practice, these over-burdened
staff cannot devote extra time to learning new technologies and bringing
more DevOps-like practices to their systems. Users of the systems,
although they can control external services, don't have control to do so
either. This arguably is why DevOps practices have been slower to become
part of high performance computing culture. Given the complexity of
using software on HPC and the many different strategies for enabling
users to run it, some trade-off between portability and performance is
required. Due to limited permissions, users are not always empowered to
install and run services like they can in the cloud. Using cloud
resources for development (and embracing DevOps) gives users a lot more
freedom because they typically do not need to ask for permission.
Arguably, there is a learning curve to this knowledge, but also
arguably, there is a learning curve for most new things that have the
potential to improve a daily workflow.

### Best Practices for Scientific Software

We argue that it should not be entirely the burden of Linux
administrators to learn and adopt new practices, but rather they should
have the support of Research Software Engineers (RSEs). If Linux
administrators have little bandwidth left for testing, bench-marking, or
otherwise working on research software, RSEs can step in to both
understand the workings of the underlying system, but also the needs of
the researchers or user-base. This is a a compelling example that
demonstrates the need for Research Software Engineers (RSEs), who can
not only better bridge the gap between the administrators and users of a
system, but also can focus on defining best practices in systems,
behavior, and software for using it. Adding this layer of best practices
for automated builds, testing, organization, and deployment of
scientific software on HPC is what we would define as RSE-ops.

Given the current ecosystem where RSEops best practices are not known,
we can make suggestions that best handle this dual need for modularity
or containers and native installations. For installing scientific
software, the package managers {% cite spack %}(https://github.com/spack/spack)
and software build and installation framework
{% cite easybuild %}(https://docs.easybuild.io/en/latest/Introduction.html) or
module managers LMOD and environment modules
{% cite LMOD; @environment-modules %} are most commonly used to install and
manage scientific software. Container technologies are also used to
allow researchers to use containerization
{% cite charlie; @podman; @singularity; @shifter %}. Many of these tools allow
flexibility to transition between tools, such as spack producing files
to build containers, and containers installing software from spack
{% cite autamus %}. Package managers are a strong collaborative framework
because they provide a structured way for people to work together on
software together.
<br><br>
{% bibliography --cited %}