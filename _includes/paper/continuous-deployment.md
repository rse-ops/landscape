## Continuous Deployment for RSE-ops vs. DevOps

Continuous deployment is the step after continuous integration finishes,
namely the deployment or archive of build artifacts for use in
production. For DevOps, this typically means pushing containers to a
registry where they can be pulled to some production or testing
environment.

On HPC the software is optimally installed on bare metal instead of
relying on containers or some kind of container orchestrator. For HPC
it's also up to workload managers {% cite slurm; @flux %} to run the software.
These resources are also typically protected, and not easily accessible
from a web interface.

For RSE-ops on HPC, a similar approach using containers could be
adopted, however due to the private nature of software it could be that
registries and services are internal. A self-deployed CI service (e.g.,
Jenkins or GitLab {% cite jenkins; @gitlab %}) that has access to cluster
resources could either deploy an artifact or use SSH to execute a
command to do similar. A container could be pushed to an open source or
internal registry. One important question that results from this is how
to control access and security. If a user builds a container in CI, how
is it assessed or scanned to be safe to deploy? There is also one
additional level of complexity with providing containers with different
architectures to run optimally on the system. Finally, build caches
(meaning binary packages) would be an equally good solution, or in fact
a supplement. Build caches are ideal for reuse, and containers for
reproducibility.
<br><br>
{% bibliography --cited %}