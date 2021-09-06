## Scaling for RSE-ops vs. DevOps

High performance computing was designed for scaling, but it must be done
intentionally. By way of job managers {% cite slurm; @flux %}, Message Passing
Interface (MPI) programming {% cite mpi %}, and extreme parallelism
{% cite insidehpc-hpc %}, it's possible to scale a task on an HPC cluster.
Libraries like MPI are tested and can be used by HPC experts to run
parallel applications.

This is in contrast to some traditional DevOps tools that handle scaling
or scaled testing for the user, and typically have a strategy of
deploying many separate instances up or out instead of using a connected
fabric {% cite Reese_undated-rm %}. A prime example is the container
orchestration tool Kubernetes {% cite k8 %}, which centers are starting to
deploy alongside traditional resources, possibly allowing RSE-ops to
better overlap with DevOps. Emerging tools like the Flux Framework
{% cite flux %} are further closing the gap between traditional HPC managers and
container orchestration tools. The work remaining to be done is bridging
the gap between the developers of the tools and the user base. If it
isn't infinitely easy for a user to launch a job, then arguably the
frameworks and techniques are not successful. There is a huge
opportunity for development of RSE-ops tools that can better teach and
possibly automate this scaling. There is also opportunity for cloud or
DevOps practices to learn from traditional HPC and think about providing
similar options.
<br><br>
{% bibliography --cited %}