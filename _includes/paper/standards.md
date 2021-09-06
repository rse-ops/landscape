## Community standards for RSE-ops vs. DevOps

Cloud services provided by several different vendors have flourished for
many reasons, one of which is directly related to the community effort
established around open source and standards.

Specifically, the primary unit of operation, for DevOps, the container,
has had extensive collaborative work in a community and governance
structure called the Open Container Initiative (OCI) {% cite oci %}. The history
behind OCI reflects an organic, open source and community effort growing
to meet the needs of a changing industry landscape. Specifically, Docker
{% cite docker %}, by way of being the first prominent, commercial container
technology and having developed its own container registry, Docker Hub
{% cite docker-hub %}, was an early contributor to these standards. An early
version of their RESTful API to interact with container manifests and
layers to push or pull containers was adopted into the first
distribution spec of OCI, along with an image, runtime, and digest
specifications. A container registry or technology is considered OCI
compliant if it meets the criteria of these standards. The OCI standards
ensured that there was consistency between cloud providers, and that
users could translate between them without issue. Representatives from
the major industry leaders worked on the standards together, and
eventually community members for traditionally non-OCI compliant
containers like Singularity joined the effort.

While having common standards is considered good practice in the RSE-ops
space, because the effort has been primarily industry driven, the needs
of more academic or HPC container technologies are not well represented.
Academic and high performance computing efforts are arguably siloed,
meaning that there are many libraries developed over time that are
rooted in a particular lab or institution, and (with a few exceptions)
groups do not work together. RSE-ops can only be successful if this
issue is addressed, meaning that groups from national labs, academic
institutions, and other communities that rely on HPC figure out how to
successfully work together, not just on software but on standards. A
good first step would be joining the industry effort to work on OCI
standards so that the needs of this different environment are
represented in the community, and an equivalent step would be to better
collaborate on software projects, training, and best practices. While
collaboration does not always lead to the best outcome
{% cite Wikipedia_contributors2021-wi %}, arguably it is inherit in software
development {% cite Whitehead2010-zg %} and we have a lot to gain to work harder
at doing it well.

This might be more challenging than it seems at face value, because not
every organization has spare developers or staff to devote to this
responsibility. Discussing and maintaining standards can also be
tireless, hard work.
<br><br>
{% bibliography --cited %}