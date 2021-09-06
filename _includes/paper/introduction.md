Successful development, deployment, and maintenance of research software
is central to scientific discovery. In the last decade, the role of
Research Software Engineer (RSE) {% cite rse-history %} has risen to awareness,
and fostered a community of combined researchers and software developers
that focus almost exclusively on this task.

While some RSEs work on research software separate from its application,
others are embedded in labs and responsible for data processing,
analysis, and otherwise running tasks at scale to produce research
outputs. These RSEs, whether they be staff at national labs, academic
institutions, or private research institutes, historically have used
some form of high performance computing (HPC) to achieve this scale
{% cite Wikipedia_contributors2021-kg; @xsede-history-of-hpc %}.

This traditional practice has slowly been changing with the availability
of cloud computing {% cite Scality2020-of %}. As the technological gap between
HPC and cloud computing is closing {% cite Guidi2020-ht %}, and the cloud can
equally meet the needs of research groups {% cite noauthor_2020-mn %}, Research
Software Engineers are presented with the task of working in both
spaces. As they discover best practices and tools, there arises the need
to write all of this knowledge down. Synthesizing what we know not only
identifies what we know, but also what we don't know and where there are
gaps that require attention or work. Arguably, a mature community should
have awareness of:

-   What are functional categories of need for the community?

-   What are best practices?

-   What tools are out there and recommended for each use case?

Further, there is separation between the developers of research
software, and those that deploy it as a workflow or service. This
problem isn't new, and in fact we can look to cloud computing for
inspiration. Although cloud computing goes back to the 1960s
{% cite Foote2017-fi %} and the term wasn't coined until 1996 {% cite Scality2020-of %},
what we are specifically interested in is DevOps -- a movement that
sought to bring together development of software and services ("Dev")
with their deployment (operations, or "Ops") starting around 2007
{% cite Atlassian_undated-ka %}. Interesting, Research Software Engineering is
going through the same challenges, and would benefit from the same kind
of movement.

This white-paper introduces the concept of RSE-ops, or the intersection
between Research Software Engineering and operations, which for research
can mean running workflows or services. We present a first effort at
defining relevant functional categories for the community, best
practices, and the current landscape of potential areas of growth. We
hope this structure can provide a basis for inspiring community and
initiative around collaborative and meaningful work.
<br><br>
{% bibliography --cited %}