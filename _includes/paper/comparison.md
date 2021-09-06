# Comparison of RSE-ops vs. DevOps

The easiest way to start to map out the space of RSE-ops is to address a
series of questions about people, goals, and practices, and make a
direct comparison to DevOps. On a high level, RSE-ops has a stronger
association with HPC, while DevOps has a stronger association with the
cloud, but the lines are blurry. While early efforts of some of these
clouds attempted to re-brand HPC {% cite google-hpc %}, progress has been made
to the point that the gap between cloud and HPC is narrowing, and HPC
centers are able to take advantage of cloud technologies, and vice
versa. There are still subtle differences, and ideally there could be
convergence to empower researchers to use software across different
platforms. For this reason, we think that making comparisons between the
two can be helpful to understand what practices are well established for
RSE-ops, and which require further development. Since there is a
stronger association of HPC with RSE-ops, in the discussion below we
will often be comparing HPC with cloud, however this does not say that
there is always a strong dividing line between the two. We will proceed
in the following sections to ask questions of each, speculate on best
practices, and then summarize our findings in a table.

## What are the goals of each?

Arguably, the goals of DevOps are to provide applications and services,
typically web-based. The goals of RSE-ops are to sometimes provide
services for scientific applications, but more-so to provide
infrastructure and means to run, develop, and distribute, scientific
software. RSE-ops, then, is for research software and services, while
DevOps is typically for more widely available, persistent services and
corresponding software. This does not mean, however, that RSEs are never
involved with DevOps, nor that industry Software Engineers are never
working on research software.

## Who is involved?

You will typically find individuals practicing RSE-ops at academic
institutions, national labs, and some private industry, or anywhere that
high performance computing is the primary means of compute. While some
companies might also use high performance computing, typically we likely
find that larger companies maintain their own internal container
orchestration system (e.g., Google uses Borg {% cite borg %}, and smaller
companies pay to use cloud services that offer a similar set of tooling.
Likely this decision results from some cost-benefit analysis
{% cite Prabhakaran2018-sn %} that determines that one is more cost effective
than the other. Whether we look at Google Cloud {% cite google-devops %},
Microsoft Azure {% cite microsoft-devops %} or Amazon Web Services {% cite aws %}, all
of these cloud environments have a primary focus on distributed, scaled,
and \"server-less\" technologies. We might call this [cloud
computing](https://en.wikipedia.org/wiki/Cloud_native_computing).

When we look closely at individuals involved, it tends to be the case
that institutions with HPC have a combination of Linux Administrators,
Support Staff, Research Software Engineers, and Researchers. The
Research Software Engineers in particular play an interesting role
because they can sit on the administrative side (with Linux
Administrators and Support Staff), on the user side (with Researchers)
or somewhere in between. For this reason, they are essential staff for
communication, or ensuring that the needs of the researchers are known
by those that run the resources. For tech companies, it's likely the
case that a DevOps team or team of Support Reliability Engineers (SREs)
is tasked with managing software and services for the company. The SREs
are primarily concerned with how things should be done, and developing
monitoring and other support tools, while a DevOps teams is primarily
concerned with doing it {% cite google-sre %}. The line gets blurry with respect
to titles, because a company can have some flexibility with respect to
naming these roles. However, it's common to see titles like Software
Engineer, DevOps Engineer, SRE, or even Cloud Architect.
<br><br>
{% bibliography --cited %}