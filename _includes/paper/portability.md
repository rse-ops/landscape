## Portability for RSE-ops vs DevOps

In DevOps workflows, portability is achieved by way of using entirely
isolated container environments. Although there still may be host or
kernel dependencies, it's fairly trivial on the cloud to select a
different architecture for this. Running on HPC, however, is much more
complex, as there is typically more of a seamless environment with the
host, or if not, the need to share libraries between the container and
host. Technologies such as MPI and infiniband, and more generally,
complex hardware and different kinds of performance optimization setups
mean that there is a trad-eoff between portability and performance
{% cite Younge2019-uk %}. Even if a container does run, it could be that there
are huge losses in performance.

The current "best practices" for this issue are generally to try
binding libraries from the host into the container, or to add needed
libraries from the host to the "LD_LIBRARY_PATH" {% cite Younge2019-uk %}. A
better future, however, could go in one of two directions. A more
hard-coded approach would be to define a standard set of metadata (e.g.,
labels) alongside the container, and have them checked with a hook
{% cite oci-hooks %} that would do a quick comparison of labels with what is
available on the host. More ideally, there could be some kind of
compatibility layer that is able to trace or discover libraries in the
container, compare to what is available on the host, and do some kind of
ABI compatibility solve to determine if the two are compatible. This
work is currently underway with the BUILD SI project at Lawrence
Livermore National Lab {% cite buildsi %}, and discussion of such a
compatibility layer has happened previously {% cite Younge2019-uk %}.
<br><br>
{% bibliography --cited %}