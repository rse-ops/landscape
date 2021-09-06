A definition of Research Software Engineering Operations (RSE-ops) can
best be derived by first explaining the philosophy behind DevOps {% cite aws %}
is a term that refers to best practices to bridge development and
operations. It was coined in 2008 {% cite devops-paper %}, and has grown out of
a web services oriented model. The term has expanded to refer to other
subsets of expertise in this area such as cloud security operations,
which is called "DevSecOps," adding the "Sec" for "Security." In
DevOps, best practices are generally defined around:

1.  continuous integration: automated integration of code changes into a
    repository

2.  continuous delivery: automated release of software in short cycles

3.  monitoring and logging: tracking errors and system status in an
    automated way

4.  communication and collaboration: interaction between team members
    and optimally working together

5.  "infrastructure as code": provisioning resources through simple
    text files

6.  using micro-services: single function modules that can be assembled
    into a more complex service

The above best practices are done for the purposes of speed and
efficiency, reliability, scale, and collaboration. It has been shown
that teams that adopt these practices can see improvements in
productivity, efficiency, and quality across the board
{% cite devops-changed-things %}. It is a culture because along with these best
practices, it also alludes to a way of thinking and working. Where there
were barriers before between development and operations teams, DevOps
brought them down. You can grow a community around these ideas, which is
a powerful thing.

### DevOps as the Driver of the Cloud

And surely the statistics are alarmingly good, as teams that practice
DevOps outperform their peers in number and speed of deployments,
recovery from downtime events, and employee ability to work on new
things over tenuous maintenance {% cite devops-stats-2016 %}. Recognizing these
gains and providing structure for collaboration, training, and projects
was arguably just one of the goals of the Cloud Native Computing
Foundation (CNCF), which was founded in 2015
{% cite Wikipedia_contributors2021-jt %}. Specifically, the primary stated
reason for foundation of CNCF was to foster community and support around
container technologies, which often are the core unit of automation and
DevOps practices {% cite Nishanil_undated-fk %}). A new term, "cloud-native"
was coined with this title, which is heavily reliant on DevOps. DevOps
practices are considered the fundamental base of taking on a
cloud-native approach, and another term, "Cloud Native DevOps"
{% cite cloud-native-devops-oreilly %} was even coined to specifically refer to
the application of DevOps practices to the cloud. Since the two are so
inexplicably intertwined, for the remainder of this paper, we will refer
to them interchangeably {% cite Choice2020-lt %}.
<br><br>
{% bibliography --cited %}