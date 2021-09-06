# A Harder Challenge is Changing Culture

If DevOps is a culture and community that emphasizes collaboration
between "operations" and "development," would RSE-ops be the same
idea but focusing on the collaboration between HPC system
administrators, and research software engineers? And instead of
automating services, would we want to automate scientific workflows,
only with small services when they are needed? Some might argue that it
isn't about the tools per-say, but the practices and culture around
them. So it simply is not enough to just create a new tool or state a
practice without asking how it fits into current culture. From the other
side of the coin, having an open mind is also important. If any member
of an organization doesn't have a mindset that is open and amenable to
change and innovation, it's going to be hard to practice. This might be
especially challenging in the HPC/RSE community where stability and
consistency (arguably the opposite of change) is already part of the
culture. A strategy to go about inspiring change might be to start with
a current practice, and ask the questions:

-   "How do we automate this?"

-   "How do teams X and Y work together, what are the common goals and
    units of operation?"

A lot of RSE-ops seems to come down to automation, which is why it's a
good question to start with. Another good suggestion is to consider
RSE-ops from the level of the system. Each of these components can be
discussed in terms of who works on it, how that is collaborative, and
how it could be more collaborative or automated.

-   booting

-   web servers and hosting static and dynamic sites

-   process management

-   ssh

-   file systems and volumes

-   system logging, monitoring, troubleshooting

-   protocols like SSL, TLS, TCP, UDP, SFTP, etc.

-   managing services (e.g., initd, systemd)

-   load balancing

-   breaking things and troubleshooting (this might be good for practice
    or learning to work together)

Another interesting question is how could this stack span HPC and cloud?
How can we find some convergence? If we can create a map of cloud
services, we could then try to map that to HPC. We ultimately want a
layout of the land for what constitutes the "infrastructure" of HPC
and what is missing or could be improved. Each node in this map would
then be linked to documentation in a consistent, well-branded way.
<br><br>
{% bibliography --cited %}