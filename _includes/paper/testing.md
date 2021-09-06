## Testing for RSE-ops vs. DevOps

There are arguably two kinds of testing - testing of systems, and
testing of scientific software.

### Testing Scientific Software

There is a huge divide between testing scientific software and using it
on the shared resource. The reproducibility crisis that grew in the
early 2010s {% cite replication-crisis %} did advocate for more use of version
control {% cite github; @gitlab %} for research software collaboration and
development, and the ease of integration of continuous integration (CI)
external services for automated testing and deployment
{% cite travis; @circle; @jenkins %} made it more common for researchers to test
and deploy their scientific software. It became more common practice to
create releases alongside code, distribute them via packages managers,
and even to provide containers that could be pulled and used on a
cluster. However, this test and deployment process was notably separate
from the HPC resources -- it simply was not possible to test codes on
all of the possible semi-customized HPC environments on which they might
be run.

Understandably there would be security issues connecting an external
service to a shared resources, however this does not fully excuse the
lack of innovation in this area. It should be easier for a researcher to
test and even deploy their codes on or beside the resource that they
ultimately will be used. While some centers do have testing clusters,
it's not always easy to justify cycles on them to be used just for
testing. When software testing isn't in the hands of the user, testing
the software stack might fall in the hands of the system administrator
or support staff of the HPC cluster, or even worse, nobody at all.

Ideally, best practices for testing will embrace the current approaches
that developers are already using to test and deploy software, namely
using services like GitHub or GitLab and then creating releases,
contributing install recipes to package managers, and deploying
containers for quick usability. Arguably, what HPC centers might be able
to bring to testing is scale. As tests need to be run frequently and
across many different architectures, the incentive structure is arguably
not there to maintain such a testing framework. Testing tools such as
{% cite Pavilion2 %}(https://github.com/hpc/pavilion2) and
{% cite ReFrame %}(https://github.com/eth-cscs/reframe) are intended for facility
testing, but there is no convergence on any kind of standard. Perhaps
there should be, and this is something that should be discussed by the
HPC community. The need seems to be there, as academic centers and
national labs are slowly adopting their own strategies for quickly being
able to run tests from version control on a cluster resource,
`\cite{}`{=latex}, and likely these technologies will need to be shared
with other institutions followed by convergence on a shared best
practice.

### Testing of Resources

Most centers do some kind of kernel and application bench-marking
{% cite measuring-hpc %}, along with testing of resources. For example, system
administrators might use regression testing, including testing file
permissions and mounts, communication between nodes and compatibility
with the resource. For these regression tests, tools like Pavilion,
{% cite NHC %}(https://github.com/mej/nhc) and Interstate are popular.

Another continuous integration strategy is to focus on regression
testing via tools like ReFrame. Tools of this type try to test HPC
systems alongside software stacks directly on the resource, and
typically separate from any web interface or alongside the code. ReFrame
and Pavilion are designed to test the machine, and not the software.
Ideally we would have a standard application testing tool. Likely better
ability to do testing will come from improved integration of Continuous
Integration (CI) services, discussed later in this paper.
<br><br>
{% bibliography --cited %}