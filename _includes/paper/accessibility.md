## Accessibility for RSE-ops vs. DevOps

When we talk about accessibility in this space, we usually are referring
to how a user gets access to software and services. RSE-ops that is
focused around HPC usually means providing access to a research cluster,
or typically hundreds to thousands of nodes that are connected on a
network. These clusters are optimized for command line usage, meaning
that users log in via a terminal, and type commands in the prompt to run
and monitor jobs, use software, or otherwise interact with the cluster.
While some centers have figured out options for interactive notebooks
that are accessible via a web interface (e.g., OnDemand from the Ohio
Supercomputing Center {% cite ondemand %} or JupyterHub {% cite juypterhub %} for
several national labs and academic institutions), typically, opening up
resources to a web interface is not a well developed area. Some might
argue it's an issue of not wanting to take risk of "opening up"
clusters to a web interface, but realistically it could be called a
skill gap. Web technologies were greatly developed and adopted in the
more commercial world, and already overworked system admins don't have
the bandwidth to learn this new skill to develop apps and what is
required to secure them. As a buffer to this missing service, many
centers take a hybrid approach, meaning they make cloud resources (from
a vendor like Amazon Web Services (AWS) or Google Cloud or Azure)
available separately to groups that have need for these interfaces. This
is often called a hybrid cloud {% cite hybrid-cloud %}. However, as many centers
embrace container clusters like Kubernetes and OpenShift, there will
soon be this kind of cluster alongside an HPC cluster to run web and
storage services asked for by users. The early work to bring interfaces
to high performance computing {% cite web-interfaces %} will continue, and
following this development will be exciting in the coming years.

DevOps, or providing software and services in the cloud, might have an
accessibility advantage over RSE-ops in that the cloud is more likely to
be accessible. Theoretically, both HPC clusters and cloud resources can
be accessed anywhere with an internet connection, however large HPC
centers are more likely to have more stringent access requirements
(e.g., logging in with a token as opposed to OAuth2 in a browser), and
are less likely to be accessible from the browser or even a mobile
phone. As a buffer against this, many app teams go out of their way to
provide web of container applications for distribution of their work.
<br><br>
{% bibliography --cited %}