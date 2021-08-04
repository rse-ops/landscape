# RSE-ops

## What is DevOps?

DevOps [^1] is a term that refers to best practices to bridge development and operations. It was coined in 2008 [10], and has grown out of a web services oriented model, and now can be used to refer to cloud technologies or security operations (DevSecOps). Best practices are generally defined around:

 - continuous integration: automated integration of code changes into a repository
 - continuous delivery: automated release of software in short cycles
 - monitoring and logging: tracking errors and system status in an automated way
 - communication and collaboration: interaction between team members and optimally working together
 - "infrastructure as code": provisioning resources through simple text files
 - using microservices: single function modules that can be assembled into a more complex service

for the purposes of speed and efficiency, reliability, scale, and collaboration. It is a culture because along with these best practices, it also alludes to a way of thinking and working. Where there were barriers before between development and operations teams, DevOps brought them down. You can grow a community around these ideas, which is a powerful thing.

## What is RSE-ops?

If DevOps is the intersection of  "Developer" and "Operations," then how does this concept map to high performance computing? The answer is RSE-ops, or the intersection of Research Software Engineering and Operations. Research Software Engineers (RSEs) are the individuals writing code for scientific software, and supporting resarchers to use codes on high performance computing systems.
RSE-ops, then, generally refers to best practices for development and operations of scientific software, which typically happens in a high performance computing environment.

> I have wondered if this is true -- aren't there lots of non-HPC RSE's?

A comparison can be made to Cloud Native Devops [^2], which is a similar term that has emerged around Cloud Native Computing. It refers to the application of DevOps practices to the cloud.

The role of Research Software Engineer, or RSE, has been emerging in the last decade, and due to the hybrid nature of working environments across cloud, and HPC, DevOps practices are logically being adopted. In the same way that Cloud Native has defined development approaches that focus on maximizing a particular set of resources for building, testing, and running software for the cloud, RSE-ops can do the same for HPC. For the purposes of this document, we will consider modern DevOps to to be Cloud Native, and use the two interchangeably. We will also drop the "Dev" from the parallel RSE DevOps role, as the term "Research Software Engineering" encompasses it. RSE-ops, then, appropriately refers to best practices for ensuring the same reliability, scale, collaboration, and software engineering for research codes. We may not always be running a scaled web service, but we might be running scaled jobs on a manager, profiling performance, or testing software in development.

## RSE-ops vs. Cloud Native Ops

A direct comparison between RSE-ops and Cloud Native ops can help us to understand what practices
are well established for RSE-ops, and which require further development. We can start our assessment by asking basic questions about the two, and then representing this in a table.

### What are the goals of each?

Arguably, the goals of DevOps are to provide applications and services, typically web-based. The goals of RSE-ops are to sometimes provide services for scientific applications, but more-so to provide infrastructure and means to run, develop, and distribute, scientific software. RSE-ops, then, is for research software and services, while DevOps is typically for commercial software and services. This does not mean, however, that RSEs are never involved with DevOps, nor that industry software engineers are never working on research software.

> TG: I am not sure about the "commercial" designation. I might just say "perstent services" as
> DevOps is used not just in commercial environments... it's used for lots of organizations and
> types of development.

### Who is involved?

You will typically find individuals practicing RSE-ops at academic institutions and national labs, or anywhere that high performance computing is the primary means of compute. While some companies might also use high performance computing, typically we likely find that larger companies maintain their own internal container orchestration system (e.g., Google uses Borg [^4], and smaller companies pay to use cloud services that offer a similar set of tooling. Whether we look at Google Cloud [^5], Microsoft Azure [^6] or Amazon Web Services [^1], all of these cloud environments have a primary focus on Cloud Native technologies.

> I like most of the things in cloud native but I think the term is kind of ill defined -- also
> with the definition of cloud native above this sentence is circular -- if cloud native is the
> application of devops to the cloud then aren't the clouds cloud native by definitoin? Also what
> about IaaS, PaaS, VMs, etc. -- lots of levels but maybe that's too much for this document.

While some of these clouds have attempted to re-brand HPC [^7],
the effort is misleading because cloud-deployed services that mimic a high performance computing environment are not one and the same. This point will be fleshed out in the next section that does a detailed comparison between HPC and cloud.

> I think this point needs some refinement b/c clouds are offering legit HPC. There are still
> differences but the gap is narrowing, and there are advantages to not doing traditional HPC...
> like better integration with services. Our apps like MuMMI increasingly have a bunch of services
> alongside a traditional simulation -- mainly b/c the way people develop apps is changing and apps
> kind of just *are* web based. We need to use that stuff -- no need to reinvent it. WEG is working
> on this with service deployment in OpenShift. Anyway gap is closing so I think it may be better
> to talk about covergence than about stark differences.

### What about accessibility?

Clusters are optimized for command line usage. While some centers have figured out options for interactive notebooks (e.g., OnDemand from the Ohio Supercomputing Center [^9] or JupyterHub [^33]),

> we have https://lc.llnl.gov/jupyter, which is JupyterHub / JuypterLab.

typically, opening up resources to a web interface would be too risky.

> It's not risk -- I think it's mainly a skill gap. Web technologies and web app development in
> general grew up in the commercial world, and the skills of your typical HPC cluster admin don't
> include securing web apps. That is changing -- many HPC centers are deploying
> OpenShift/Kubernetes/SPIN (see https://www.nersc.gov/systems/spin/ -- it'll be K8S-based soon)/
> something else alongside the HPC cluster to run web and storage services that their useres really
> do need. There are a lot of HPC centers that have these and they seem to be converging on k8s or
> k8s-like things. Anyway the web services are typically hooked up to the same auth mechanism that
> the center has -- not a fundamentally different risk from ssh (might even be better than publicly
> exposing ssh)

This means that the space of web applications that can be deployed along HPC clusters is limited, and RSE-ops has a hole in this area of development.

> See above -- this is a big area of development at HPC sites now, with on-prem k8s.

As a buffer to this, many centers take a hybrid approach, meaning they make cloud resources (from a vendor like AWS or Google Cloud or Azure) available separately to groups that have need for these interfaces.

> we have this too -- AWS on request with VPC's back into LC's networks.


Cloud native might have an accessibility advantange over RSE-ops in that the cloud is more likely to be accessible. Theoretically, both HPC clusters and cloud resources can be accessed anywhere with an internet connection, however large HPC centers are more likely to have more stringent access requirements (e.g., logging in with a token as opposed to OAuth2 in a browser), and are less likely to be accessible from the browser or even a mobile phone.

> it's true that the resources are typically not expected to be available this way but increasingly
> app teams provide web apps. MARBL even has Jupyter notebooks as their input deck format (in
> addition to standard lua decks)

### What about maintenance?

RSE-ops on HPC means that a number of systems are running all the time. They require a team to monitor, maintain, and take care of them. Cloud native development does not require the resource requester to think about maintenance of a system any longer than the resource is needed. The resources are truly "on demand." An instance, or small container cluster, might be requested when it's needed, and brought down and forgotten about when the work is done. This is a much easier interaction for the user, as no long term care or maintenance is required for the user.

> Your typical HPC app team, app user, postdoc, etc. doesn't think about maintenance of the HPC
> system and they only use the resources when they need them (via SLURM/Flux/LSF/etc.) I think the
> difference to highlight here is that the organization typically hosts HPC on-prem, so the org has
> to pay for people, ops, etc. Note also that the affordability of doing this depends on the scale
> of the HPC center. It makes more sense for small orgs (who don't use their machines all the time)
> to go cloud than large ones like us -- getting cycles (esp. classified cycles) in the cloud is
> very expensive (though we are talking about it). It is not clear there will ever be the right
> market for SRD computing (most of our classified workload). There are not currently SRD clouds
> (though there are TS clouds).

### What about staffing?

Using cloud resources means that a center does not need to pay for a team of administrators to manage the cluster. The center does not technically even need to have a research clusters. RSE-ops, if there is no access to resources in the cloud, requires a significant effort to staff the center, including linux administrators, and user support specialists. This has significant implications for cost, and likely a cost benefit analysis is needed.

> these have been done and last I saw cloud was 2x the cost of on-prem HPC (at large scale) -- b/c
> they charge quite a markup on compute, storage, everything. This was an interesting article:
> https://www.nextplatform.com/2021/06/25/the-many-other-high-costs-cloud-users-pay/. NERSC also
> did a study a while ago:
> https://www.nersc.gov/research-and-development/archive/magellan/#toc-anchor-2

Although operational costs might be reduced using a cloud resource, that cost can explode quickly depending on the kind and scale of cloud resource that is needed (e.g., GPUs). Cloud providers typically provide cost calculators to help with this, provide free-tiers and "spot instances" at a lower cost, high use discounts, and do not charge for services (e.g., instances) that are turned off.

> yep.

### What about scientific software?

Installation of scientific software on HPC is a non-trivial task. To maximize the efficiency of any piece of software and maximally utilize an underlying resource, it's typically ideal to install it natively on the system, as opposed to a containerized environment, which is arguably a foundation of modern DevOps [^3].

> Studies are showing that containerization overhead is really low -- so if you build the container
> *for the system* the container performs just as well. But you lose portability doing that. There
> are really interesting tradeoffs here. I want to have both portabilty and performacne.

This means that HPC systems must exist with complex software stacks alongside one other with possibly conflicting dependencies.

> usually kept separate and sort of sane with modules so that users can experiment.

It means that software must be built across a wide set of architectures.

> or at least optimized in a way that distros and container builders typcially do not do. This is
> changing with x86_64 levels (new x86_64_v2, x86_64_v3, x86_64_v4 levels are in LLVM and GCC and
> let you build more portable optimized binaries)

For these reasons and typically smaller teams of linux administrators, there is little bandwidth left for testing,  benchmarking, or otherwise working on research software. Due to limited permissions, users are not always empowered to install their own software.

> Our user install lots of software on their own in their home dirctories -- they build it or use
> things like conda/pip/etc. I would be specific that they can't install and run services like they
> can in the cloud and they really need to be able to do that.

In practice, this means that linux administrators cannot devote any time to attempting to bring more DevOps-like practices to their system, and users don't have any control to do so either.

> note that admins don't actually install the user-facing software on our machines -- user support
> teams do. LC has ops (part of SAG), sysadmins (SAG), user support folks (DEG and some folks in
> IMGS). Admins are doing low-level, OS-level stuff. User support is dealing with compilers,
> programming environment, MPI, etc.

A piece of software or new technology can only be embraced when it is asked for heavily by users, and this ask is finally heard by the linux administrators. Cloud native development gives users a lot more freedom.

> this is tricky b/c cloud native also has a steeper learning curve than what our folks are used
> to. You have to know how to administer a linux system -- or at least a container. So a lot more
> freedom but in many of our users' eyes a lot more complexity too. That's changing -- they're
> getting used to containers. But VMs, AWS stuff is still a maze to many of them.


### What about testing?

While most centers do some kind of kernel and application benchmarking [11], there is a huge divide between how the scientific user tests their own code or software and using it on the shared resource. The reproducibility crisis that grew in the early 2010s [12] did advocate for more use of version control [13,14] for research software collaboration and development, and the ease of integration of continuous integration (CI) services for automated testing and deployment [15,16,17] made it more common for researchers to test and deploy their scientific software, often to package managers (e.g., pip) or containers that could be pulled and used on a cluster. However, this test and deployment process was notably separate from the HPC resources. It simply was not possible to test codes on all of the possible semi-customized HPC environments on which they might be run. Understandably there would be security issues connecting an external service to a shared resources, however this does not fully excuse the lack of innovation in this area. It should be easier for a researcher to test and even deploy their codes on or beside the resource that they ultimately will be used.

> Yeah agree with this. Cloud resources/CI runners are really needed. Centers also have a hard time
> making arguments to justify cycles on test clusters (though we do have dedicated ones
> internally). Supporting teams who need to test on LC-relevant machines for projects that live on
> GitHub was an ISCP project of Greg's this year -- we built a cluster in the green zone to support
> it.  We should talk about this more -- this was an ISCP project that I proposed.


### What about scaling?

High performance computing was designed for scaling, but it must be done intentionally. By way of job managers, MPI programming, and
extreme parallelism [^8], it's relatively trivial to scale a task on an HPC cluster. However, the user has to know what they are doing.

> Don't these two sentences contradict each other?

A related issue is testing at scale. As tests need to be run frequently and across many different architectures, the incentive structure is arguably not there to maintain such a testing framework.

> we really need an HPC test harness. There are attempts at this for app testing (3 versions of a
> tool called ATS internally) and there ar things like Pavilion2
> (https://github.com/hpc/pavilion2), ReFrame (https://github.com/eth-cscs/reframe) and BuildTest
> (1 developer/user who you know) for facility testing but there isn't anything I can see here that
> is converged or standard. Someone needs to build a test tool for not just their own project.

This is in contrast to some Cloud Native tools that handle scaling or scaled testing for the user. This suggests that the greatest challenges are not related to the technologies, but educating the user base and RSEs how to properly use them. There is a huge opportunity for development of RSE-ops tools that can better automate this scaling.

> yes

### What about software distribution?

The end-goal of an HPC environment is to make software available to researchers. This is abstractly similar to the "end goal" of a cloud native environment, which is to make software available to users via services. For cloud native, I suspect this typically means interactive web interfaces or services that are accessed from other web or terminal clients via application programming interfaces (APIs). Since HPC environments are typically running jobs that rely on system software and some number of known aliases, the bulk majority of "software distribution" for HPC is probably command line interfaces. In this framework, the administrators must provide an easy way to manage a collection of software, and make it available to users.

> Again here it's not just admins. App teams maintain their own app deployments. The end result of
> that is that there are directories in the filesystem with apps and their dependencies -- and
> there are potentially modules as well so you can `module load` specific apps/versions. Most
> deployments right now are to shared filesystem directories (`/project` dirs at NERSC,
> `/usr/gapps` at LLNL, etc. and maintained by app teams (often very specific people on the app
> teams)

Users are somewhat empowered to install their own software, given that 1. they have the filesystem space to do so, and 2. installation does not require any escalated permissions on the system.
While this could mean a "bring your own environment" scenario via containers pulled from external registries, more likely it means relying on package managers and module systems.

> With better HPC container runtimes this could get fixed.

Ideally, every module and package would have a suite of tests to ensure its functionality, but in real world scenarios its likely that the software is tested elsewhere (e.g., a CI service associated with the source code) and distributed to the system for immediate usage.

> Depends on external software vs. internal. This stuff is very very true for external software --
> OSS may not be tested directly on our machines (though we have stuff like spack test now -- not
> everything has tests).

> Internal codes are tested a lot -- there are devlops teams and dedicated clusters for them. Codes
> also go through V&V process (verification and validation).

### What about dependency management?

Dependency management refers to a set of practices used to manage software versions. It is arguably a subtopic of software distribution. Every piece of scientific software requires a specific set of versioned dependencies, and these dependencies must co-exist alongside one another on a shared resource. This also means that architectures must be maintained for possibly older dependencies that require them. Tools have grown out of this need that allow for flexible management of dependencies and software, including easybuild [18], spack [19], and environment modules [20,21]. Development of these projects has also led to a powerful model of development -- bringing many people (administrators and users) together to collaborate on the software. It's not hard to read user surveys [22] and see that the open source model of development is live and well. People are using the software, excited about it, and working together to make it better. It also doesn't hurt that some of these projects have the backing of entire institutions.

> and programs like ASC and ECP (really it's these -- large LLNL funding is more recent with BUILD

These success stories give us a hint that working together on software, likely in an open source, collaboration fashion, is a good model for successful distribution and improvement of the software.

> the counterargument you'll get (which I kind of disagree with) is that package managers are
> fundamental -- everyone needs them -- and math libs and other utility libraries aren't and it
> would be hard to get as many contributors for them. Tools like MFEM have contributors though so I
> think it's more about how you run your project and your willingness to seek out, facilitate (via
> slack, chat, meetings, etc.), and contributors than it is about the type of software.

DevOps is different because you only install what you need, and when you need it.

> also true of a package manager w/binaries (build from source is slow and you need the build deps)

It's uncommon to require older versions of the same software to co-exist for a service. Is there any kind of mapping of this freedom to research software engineering? Yes, arguably containerization, primarily with container technologies suitable for an HPC environment [23,24], has allowed for encapsulation of an entire operating system and software stack that can be used portably. However, as was noted in the description of testing, development and deployment of these containers is unlikely to be on the resource itself.

> We ultimately want unprivileged podman builds to run on the actual clsuters in gitlab CI (or on
> the CLI).

There also, until recently [25] has not been an easy way for a cluster user or linux administrator to install, manage, and provide containers. External registries that might be used [26,27] must exist alongside a resource and then require an individual to explicitly pull a container binary. While this is better than not having containers available at all, it creates redundancy of filesystem space, and requires the individual to be a stickler about container versions pulled, good practices, and organization of said containers. This is not an easy thing to do, and thus it's hard to follow best practices [28]. Development of these technologies, however, hinted at the idea that with some innovation, it could be possible to empower users to better embrace more DevOps style practices of developing, testing, and deploying research software. It also hinted at a more modular strategy for dependency management. Interestingly, containers are used heavily by both cloud and HPC developers, but developing them and ensuring security in their execution adds additional challenges.

### What about permissions?

One of the biggest challenges of using an HPC system is likely permissions. Users are not permitted to write to anywhere other than a standard home or scratch space. While some users have project spaces that are shared by multiple users, they can be a pain to manage. This is in contrast to a cloud native environment where it's fairly easy to spin up a new instance and be root to do whatever you please. This is unlikely to change, and will be a factor that needs to be worked around.

> working through a registry or repo is nice even in these envs though

### What about community standards?

Cloud native development has flourished for many reasons, one of which is directly related to the community effort established around standards.

> IMO it's open source *and* standards -- most standards are de-facto but some actually have
> governance/revisions like OCI, MPI, C++. OSS ones arise b/c people actually reuse each others'
> stuff.

Specifically, the primary unit of operation,
for cloud native DevOps, the container, has had extensive collaborative work in a community and governance structure called the Open Container Initiative (OCI) [29]. The history behind
OCI reflects an organic, open source and community effort growing to meet the needs of a changing industry landscape. Specifically, Docker [30], by way of being the first prominent,
commerical container technology and having developed its own container registry, Docker Hub [31], was an early contributor to these standards. An early version of their RESTful API to interact with container manifests and layers to push or pull containers was adopted into the first distribution spec of OCI, along with an image, runtime, and digest specifications. A container registry or technology is considered OCI compliant if it meets the criteria of these standards. The OCI standards ensured that there was consistency between cloud providers, and that users could translate between them without issue. Representatives from the major industry leaders worked on the standards together, and eventually community members for traditionally non-OCI compliant containers like Singularity joined the effort. While having common standards is considered good practice in the RSE-ops space,
because the effort has been primarily industry driven, the needs of more academic or HPC container technologies are not well represented. Academic and high performance computing efforts are arguably siloed, meaning that there are many libraries developed over time that are rooted in a particular lab or institution, and (with a few exceptions)
groups do not work together. RSE-ops can only be successful if this issue is addressed, meaning that groups from national labs, academic institutions, and other communities
that rely on HPC figure out how to successfully work together, not just on software but on standards. A good first step would be joining the industry effort to work on OCI standards so that the needs of this different environment are represented in the community, and an equivalent step would be to better collaborate on software projects, training, and best practices.

> yep -- there is a question of how many of these orgs have developers/staff to contribute to
> standards -- many are just consumers and don't have people who can/have time to drive this stuff
> forward. Labs have people though, and contributing to these standards is a good thing for them to
> do.

### What about continuous integration?

Continuous integration is an established practice of continually testing and building before deployment.
It typically is focused around a version controlled codebase (e.g., GitHub or GitLab) and developers collaborate to review code, ensure that tests pass, and then merge into a main branch. The goals are generally to ensure that when a piece or software or service hits a production resource, there will be no bugs or errors. Artifacts can be built and deployed on such or a merge, or for an event such an a versioned release. The benefits of CI practices are obvious, allowing developers to more easily collaborate on a codebase, and interact with production artifacts on resources of interest. For cloud native DevOps this typically includes different container orchestration services, instances, or app deployments, and for RSE-ops this would likely mean a local server or HPC cluster. The version control system also typically provides an interface to make it easy to report and respond to bugs (typically called issues) along with making suggestions to improve code (called pull or merge requests) and tracking progress.
This kind of workflow fits well into any DevOps environment where change is a constant.

In the context of HPC, the diversity of resources that codes need to run on proves to be a much larger challenge for CI. The most popular, public CI services are not designed to interact with a batch system. It typically isn't sufficient to just test on a standard linux x64, Mac, and Windows architecture, but several architectures across different operating systems (primarily linux) that reflect the variety of the cluster nodes. The first challenge this presents is that most standard, web-based CI services (e.g., GitHub actions runners, standard GitLab runners, TravisCI, Jenkins, and CircleCI) don't provide a rich variety of architectures.

> or at least not control over the arch -- you might get a fancy node but you can't request it
> specifically and you do not have the control you need.  Also no GPUs.

For this reason, for research software we typically see the developers still develop using these systems, but then are not able to test on all the systems that might be needed.

> Should mention Jacamar here --
> https://ecp-ci.gitlab.io/docs/releasenotes/jacamar/jacamar_0.1.0.html. This came out of the ECP
> CI effort (which I partially instigated) to get secure CI *at HPC centers*. People have really
> started pushing GitLab for HPC sites since then, and we're working on sharing GitLab infra with
> LANL right now. We should talk about how we set up GitLab b/c we arguably could use it to test
> lots of different machines IF we had test resources managed differently. Right now there are
> still some roadblocks around service user accounts, banks (time allocations), and access to
> machines that need to get worked out. Also most HPC sites won't have every architecture (we don't
> even have everything -- just close to it) so building versions to distribute to everyone is hard.

When software testing isn't in the hands of the user, testing the software stack might fall in the hands of the system administrator or support staff of the HPC cluster.

> or nobody

System administrators might use regression testing, including testing file permissions and mounts,
communication between nodes and compatibility with the resource. For these regression tests, tools like Pavilion, NHC and Interstate are popular.

Another continuous integration strategy is to focus on regression testing via tools like ReFrame.
Tools of this type try to test HPC systems alongside software stacks directly on the resource, and typically separate from any web interface or alongside the code. (**TODO** add more about ReFrame and other tools, I don't know a lot about it/them). The biggest difference between these two spaces is likely how software is deployed.

> Big difference with ReFrame and Pavilion vs. (missing) app testing tools is that the former are
> designed to test the *machine*, not the software. They run benchmarks to ensure the hardware
> works, not the other way around. There is a lot of overlap and maybe potential here but an app
> testing tool is likely tied to the software repo in a way that ReFrame is not... it would be nice
> to see some convergence here.

On HPC the software is optimally installed natively, and in cloud native / DevOps it's more common to deploy containers

> I want to get away from the notion that containers are not "native" -- they can be built and
> optimized for the host arch.  Maybe some other word?

and then run via an orchestrator or cloud service. For HPC, it's up to workload managers to run the software. These resources are also typically protected, and not easily accessible from a web interface. The challenge is thus getting any kind of modern web-based interface linked up directly to a cluster to run tests. Work at the lab with GitLab, and specifically having a locally deployed Gitlab server with custom runners on various resources has been a way to unite these two worlds.

> ok this is mentioned -- cool -- Jacamar (see above) is the public project we want to share around
> this.

> worth noting here that there is no standard workflow language for CI. There are a bunch of
> similar ones (travis, actions, gitlab, Tekton pipelines) but not a standard around just this. So
> you kind of get the CI language assocaited with your service, which makes CI scripts less
> portable. WSC has a policy of keeping *most* of the CI logic in the app and making sure CI YAML
> is minimal so that they can easily migrate. Harder for us in Spack with things like our build
> farm b/c it requires a bunch of fancier features, so you kind of have to code for the particular
> service (gitlab for us). Would like to see this settle down and turn into a standard CI YAML
> language.

### What about continuous deployment?

Continous deployment is the step after continuous integration finishes, namely the deployment or archive of build artifacts for use in production. For cloud native
DevOps, this typically means pushing containers to a registry where they can be pulled to some production or testing environment.

For RSE-ops on HPC, it could be that the CI service (e.g., Jenkins or GitLab) has access to cluster resources to either deploy an artifact or use SSH to execute a command to do similar.

> could also be a push to an internal registry -- but this is new.

Could continuous deployment be better integrate with HPC? If the optimal distribution mechanism is containers, arguably HPC can take a similar approach to cloud native,
and push containers to registries to be pulled to HPC. There is one additional level of complexity with providing containers with different architectures to run
optimally on the system.

> build caches (binary packages) are another possible deployment medium -- probably good to have
> both build caches (for reuse) and containers (for reproducibility).

### What about monitoring?

Monitoring for both RSE-ops and DevOps can generally be referred to as looking at metrics and logs to assess performance of systems and software. It can even be extended to talking about performance testing, provenance and reproducibility of scientific workflows, and data organization. In both spaces, administrators of resources typically choose strategies to monitor their systems. In cloud native the monitoring services might be more easily integrated into different services, and in HPC some of these more traditionally DevOps tools like Kubernetes, Grafana, and Prometheus are starting to be used [32]. However, best practices
for monitoring have not been established, nor have best practices for running workflows and storing provenance.

> we have the sonar and SPOT efforts at LC around monitoring but agree they're still nascent and
> haven't gotten integrated iwth devops -- mostly facility monitoring.

### What about security?

**note that I don't have the expertise to really write about this**

Security is of utmost importance for HPC, and consequently the environment is much more restricted for the average user than if the same user was using the cloud. Specifically, instead of a single user having root, there are potentially thousands of users sharing the same systems, and thus the systems are structured to ensure scoped permissions. The user cannot write to anywhere in the system other than
a home or workspace, and the user largely does not have control over networking, or further customizing a system provided resource. These points are related to the [permissions](#what-about-permissions) section.

In cloud native development, a community has formed around best practices for security  called "DevSecOps." Although there is more freedom in the cloud, multi-tenant projects still require that different teams maintain unique namespaces, and that services are  deployed to avoid any kind of security breach or intellectual property violation. Thus, DevSecOps (akin to DevOps) aims to automate having security checks for
each step in the lifecycle of a cloud service. DevSecOps also is a community, and strives to increase general awareness about security best practices. This is a different approach than traditional security checks, which might have done an evaluation of a piece of software before deploying it to production (and  likely this is still the best practice for HPC).

> there are internal HPC DevSecps projects -- Dave Fox is running those and it's getting mroe
> important to people since SolarWinds.

For both these groups, containers present a unique challenge, as it seems almost impossible to keep track of every container that a user might bring to a cluster or cloud environment. At best there is security scanning in the registry (and the user of the container takes notice) and the container technology is designed in a way to not allow any escalation of the user to a root user (e.g., Singularity, or Podman), unlke cloud container runtimes (e.g., Docker).

| Description | DevOps      | RSE-ops |
|-------------|-------------|---------|
|Goals        | Commercial software and services | Research software development, use, and distribution |
|People       | Industry software engineers | Research software engineers |
|Accessibility | Freedom to access from browsers, and anywhere with an internet connection | More secured access from possibly a limited set of internet connections |
|Maintenance | Request, use, and throw away when done | Constantly running resources that require maintenance and monitoring |
|Staffing | No staffing required | Requires linux administrators and user support specialists |
| Scientific Software | Software and services can be modular, and optimized for the application or service. | Requires complex software stacks with conflicting dependencies and variable architectures to co-exist on a resource. |
| Scaling |  Scaling is typically automated. | Many options for scaling, and manual practices make it challenging for a cluster user or developer to know best practices.|

> people spend a lot of time scaling cloud services (large ones), too

| Software Distribution |  Complete freedom to use any software distribution or package manager. |Software is likely to come from external resources to be installed via a package manager or module system for the user. |
| Permissions | Complete freedom | Logically, only administrators can have elevated privileges to install software or otherwise interact with resources. |
| Accessibility | Browser and command line, even from mobile | Accessibility is primarily by way of the command line, with limited access to interactive notebooks. This is a huge potential area for development for rse-ops |
|Testing| Automated testing and deployment alongside and integrated with cloud resources | Automated testing typically separate from the HPC resources |
|Dependency Management | Easy to use bleeding edge software, and install only what you need when you need it | A hodge-podge of dependencies (versions and for different architectures) must co-exist on the resource |
|Community Standards | Significant time and effort to establish standards for containers | Traditionally not as involved in the same efforts |
|Continuous Integration | Well established practices and integration of version control with build, test, deploy | Limited interaction with traditional CI services, local deployment and custom runners is promising |
|Continuous Deployment | Comes down to pushing containers to registries for production systems | No best practice established, but can interact with resources in some situations to deploy|
|Monitoring| Monitoring is well integrated into services | Must "roll your own" monitoring, but DevOps services (e.g., Grafana, Prometheus) are used sometimes. |
| Security | DevSecOps is leading the way to make security an automated part of the development lifecycle | Security is unlikely to be automated, and a greater challenge with many users sharing the same space. |

> we're very interested in addign things like scanning via gitlab. woudl argue that companies have
> same issues if they aren't developing in the cloud -- intrnal devsecops aren't that great.

## HPC Technologies

There are a family of technologies that are a core part of high performance computing that are not present, or are represented in a different way, on the cloud.
**TODO** add more detail here.

> we should talk about how this is a blurry line -- ParallelCluster is very similar to a regular
> HPC environment.

## RSE-ops Best Practices

Given the challenges and gaps above, we can now make an attempt to define RSE-ops best practices. This can mean anything from a software development approach, to an actual piece of software, to a cultural norm. In the case that a best practice does not exist, this presents an opportunity to work on it.

> in many cases this is going to require buy-in from admins so the RSE side has to establish best
> practices for both the deployment of the infra (gitlab, etc.) and the software (using the infra)

### Scientific Software

Since HPC is optimized to build software natively, we require a package manager that can do so, and allow multiple different versions of software, or software requiring conflicting dependencies, to co-exist. [spack](https://github.com/spack/spack) is a package manager that was developed at Lawrence Livermore National Lab (LLNL) and is optimized for this use case.

> PM's are emerging as kind of de-facto standards now which is nice, but few others are really
> standards in the same collaborative way.

### Scaling

**TODO** add MPI / scaling and other technologies here. Possibly flux?

> IMO this is a huge category -- not sure we need to cover all of converged computing here but it's
> related to workflow so probably valuable to talk about Flux, etc. -- Flux might be a good base
> for RSE-ops tools.

### Software Distribution

 - [LMOD](https://lmod.readthedocs.io/en/latest/)
 - [spack](https://github.com/spack/spack)

> more at OS leve, also good ol' distributing source tarballs, and aren't HPC containers are in
> here somewhere?


### Permissions

There is no "fix" to give a user permissions, but rather software that can empower them to deploy software without asking for permission. Container technologies come to mind, along with package managers like pip/conda. These tools can be used by not just an administrator, but a cluster user to bring their own environment to the cluster.

 - [Singularity](https://sylabs.io/guides/3.7/user-guide/)
 - [Podman](https://podman.io)

> worth highlighting here: the assumption that devs will be able to have root is a cloud thing, and
> it's a reason we should be more involved from the start in open standards like OCI/Docker/etc.
> Unprivileged containers in the cloud are only recently becomign a thing (e.g., rootless docker)
> but they would've been a thing earlier if HPC people were contributing from the start. Same for
> CI systms - we need to build more low-level tools that enable things to run unprivileged builds
> to be standard push for broad uptake on major projects.

### Why can't RSE-ops follow DevOps?

The biggest factor that seems to separate RSE-ops with DevOps is HPC system complexity.

> this is changing for cloud too though -- clouds will be more heterogeneous (look at ARM and
> GPUs).

For working in the cloud, we operate on the basis of being able to make services and systems modular. Any piece of sofware can be installed when needed on a cloud resource, whereas the process is more complicated for HPC, primarily needing to be done by someone with adequeate permissions, and in a way that the software can exist alongside other software and be accessed in a particular way (loaded as a module, as a container, etc.). On the cloud  a piece of software can be run exactly with a container base that is needed, and there is little or no concern for dependency with other bases.

> need soemthing about host MPI and host GPU here -- the two major hardware dependencies HPC containers have.  This stuff is where the container needs to talk to the host.

There is also little concern with using updated systems or software -- unlike HPC that needs to always support legacy systems, deployment on the cloud is more "use and throw away" to easily support whatever system is desired.

> I think it is more that nobody cares what they run on b/c services are written in portable
> languages and don't require high node performance. Interpreted langauges can run on whatever and
> regular x86_64 containers are fine. I think this will alos change as Moore's law comes to an end and even clouds get more heterogeneous.

This allows developers to work on the bleeding edge and perhaps only be concerned with supported the latest top N systems that might  want to run the software (e.g., Mac, Linux, and Windows latest). Cloud DevOps also allows for scaling and deploying on demand resources with the only constraint being cost. For RSE-ops on HPC, the scaling is limited to the cluster,

> or the number of people using that cluster / time allocations.

and on-demand usually means waiting in a queue for your turn. This means that software development on HPC is a slow task, and typically the software is not developed alongside the system, but perhaps only used or tested there after the fact.

A major helper to this current landscape would be well-established tools to allow for ease of testing for an HPC user. Whether this means testing on a node allocated for testing on the cluster, or a separate build system that mimics the cluster environment, being able to trigger builds and tests alongside a code base with a CI pipeline would greatly improve the software development lifecycle on HPC. If such a system existed, and if it were easy for RSE software developers to develop, test, and deploy their own software, system administrators could better focus on improving or enhancing the systems instead of managing software for them. We could even imagine going a step further and having a more automated ability to use software for the average user. For example, if a workflow system is better integrated into the cluster, akin to how an RSE developer could push and trigger builds and tests, an HPC user could push a workflow to trigger running a test job, and upon succes, running it at scale. It would be amazing if we could eliminate the need to ssh in to a log in node, learn how to use a job manager, and otherwise interact with HPC. To the user, if the cluster could be exposed as a service with an easy interface to monitor jobs and job submission could be integrated with the user's workflow, the speed of development and analysis would greatly increase.

Obviously, the greatest challenges to making the above a reality come down to security. Exposing any cluster resource to be accessible via continuous integration or version control triggers requires connecting the resource to external services, which always is a risk.

> but this can be done effectively with modern auth -- a lot of internal HPC resources revolve
> around kerberos and other antequated systms that do not really integrate with anything. IMO
> modernizing this stuff to use things things token-based auth, limited life credentials, etc. is
> really important and it's stuff we're thinking about. These secureity projects are opportunities
> for collaboration in HPC too.

> another gap for internal stuff that is not really covered here is storage services -- there are
> way more options in the cloud, but HPC stroage is all shared filesystems. A *lot* of the security
> issues come down to that. If you did not have shared filesystems, you could just have root and we
> could isolate it. As it is, NFS3 and other legacy fileysstems used everywhere leave everyone's
> data vulnerable if a single node is rooted. So looking at other types of storage -- or
> selectively mounting filesystems via RMs more like EBS and other cloud storage is handled -- is
> IMO a really good way to avoid thse types of issues.

Moving data from some external storage to a cluster resource to be analzyed is another challenge. A tiny step of progress is the ability to link a traditional HPC single sign on (SSO) scheme (e.g., LDAP or Kerberos) to a version control service (e.g., GitLab or GitHub) to allow for role based access and permissions but I've never tried or had access to this in practice (so I'm not sure if it's a good direction).

> what data are we talking about here? Not sure what this part is referring to. There is a lot of
> work around moving data around HPC centers -- and LC actually cross-mounts filesystems across
> machines to facilitate this.

## Informing one another

One reason to think about how RSE-ops relates to cloud native or Dev-ops is finding areas of overlap, or opportunities to work together on tools or standards. As an example, container technologies
are hugely used in both spaces, and ideally we could define a set of metadata that can solve use cases in both. As was started with the [containers working group](https://supercontainers.github.io/containers-wg) here are several use cases that can be mapped to HPC or cloud with metadata that are needed for both.

> woo!

### Metadata for Containers

The sections here describe specific use cases for HPC, cloud, or both that warrant metadata, and the metadata that would be needed. We would want to define each set below, and then look for actual implementations or tools that might benefit from them, and then start discussions around that.

#### Use Case: Architecture / host-aware pulls
A user pulling a container should be able to get the best matching one. The container already exists,

> note that this probably requires us to ease the process of building multiple images too -- i.e., you want to distribute for many clusters, you need standards for what arches to build for -- what are the standards?

so we could imagine some hook before the pull looking at metadata on the host, and then sending it with a request for a specific container. In terms of metadata we would likely need:

- Image architecture (to match to host)

> or best available for host per archspec

- Hardware

> Ultimately this is related to software compatibility -- just may involve the kernel and drivers

- Memory / resource needs (perhaps we can be more specific here)

> We have to do this in spack build pipelines -- e.g. these are the builds that require "big"
> nodes:
> https://github.com/spack/spack/blob/develop/share/spack/gitlab/cloud_pipelines/stacks/e4s/spack.yaml#L347-L364

- Software-level compatibility information (e.g., target CUDA driver version, MPI variant & version)

> ABI info? If BUILD works? Or is this a case for analyzing directly instead of using metadata?
> Smeagledata?  Hmm.


This use case is different from using an HPC scheduler one because the pull is happening from a node where it is intended to be run. Although the scheduler could also be given a container URI to pull and then match it accordingly, the scheduler likely is given an unknown (already pulled) container, and needs to match it to a node.

> ALso theer is probably a solve involved somewhere -- we can query for things that can possible
> work ubt figuring out if we can ultimately build something on top of what is there will require a
> solver.

#### Use Case: Container Discoverability

A user might want to quickly find a container that most closely matches what they need. This likely would be some kind of database that indexes metadata about containers, and provides it in a searchable interface. In terms of metadata this use case would likely need:

- Software and libraries
- ABI compatibility with the host
- Image architecture

> nitpick: "ABI compatibility with the host" depends on the host so the container should just
> contain ABI info about the container, and then you'd search for the host's ABI

#### Use Case: Dynamic Builds
A user on a resource should be able to navigate to a web interface, select a set of software or features desired for a container, and then have it built for use. This use case is slightly different because we aren’t searching for existing containers, but building custom ones.  In terms of metadata, this use case would require:

- Operating systems
- Compatible package managers / software

> not fully understanding this one -- wouldn't you want the full dockerfile to be provided, then
> you just build it on demand? Or you could provide a spack.yaml here for something more
> portable/general. I think in many cases the user doesn't care about the OS or the underlying
> software (GPU etc.) but they would care about specifying what's in the environment. So you could
> use a spack.yaml and have the other constraints come from the target environment (e.g., build for
> a specific HPC center that has sanctioned base images -- we would need to build or install ABI
> compatible things in that image and that could be abstractd away from the user).

#### Use Case: Optimization
Several user groups are interested in being able to collect metrics about software and services. If containers could provide some of these metrics, it would help their use case.
In terms of metadata this use case would likely need:

- System and architecture details for where it was built
- System and architecture details for where it has been successfully tested/run

> shouldn't these come from the package manager? Seems like you could have different properties for
> all the packages in the container. YOu want to know how all of them are built and with what
> options.


#### Use Case: Scheduler
A scheduler that is handed an unknown container should be able to quickly sniff it and be able to best match it to a node. Akin to Kubernetes, we would want to be able to match labels of nodes with labels of containers to be run there. For this use case, we would also need:

- Image architecture
- Hardware
- Memory / resource needs

> I think hardware includes some ABI stuff too

> interesting idea here would be to integrate this with Flux's graph-based resource request
> descriptions -- i.e., also include these types of software resource requests with those and have
> the scheduler pick the best container versions for the ultimate harware configuration. Might be
> worth talking to Dong or Stephen about this one.

## Miscellaneous Ideas

If DevOps is a culture/community that emphasizes collaboration between "operations" and "development," would RSE-ops be the same idea but focusing on the collaboration between HPC system administrators, and research software engineers? And instead of automating services, we want to automate scientific workflows?

A lot of literature emphasizes that it isn't about the tools per se, but the practices. So if we do make associations with tools, we probably also want to abstract that away and say what practices the tool affords that warrant the tool to be considered a best practice.

Mindset seems important. If RSE-ops is a culture, then if any member of an organization doesn't have a mindset that is open and amenable to change and innovation, it's going to be hard to practice. This might be especially challenging in the HPC/RSE community where stability (and not changing) is already part of the culture.

A strategy to go about this might be to start with a current practice, and ask the questions:
 - "How do we automate this?"
 - "How do teams X and Y work together, what are the common goals and units of operation?"

A lot of RSE-ops seems to come down to automation, so it's a good question to start with.

Another good suggestion is to consider RSE-ops from the level of the system. Each of these components can be discussed in terms of who works on it, how that is collaborative, and how it could be more collaborative or automated.
 - booting
 - web servers and hosting static and dynamic sites
 - process management
 - ssh
 - file systems and volumes
 - system logging, monitoring, troubleshooting
 - protocols like SSL, TLS, TCP, UDP, SFTP, etc.
 - managing services (e.g., initd, systemd)
 - load balancing
 - breaking things and troubleshooting (this might be good for practice or learning to work together)

> this stack coudl span HPC and cloud -- convergence is something we should think about here...

Another idea is to create a map of "cloud services" and then try to map that to HPC. We ultimately want a layout
of the land for what consitutes the "infrastructure" of HPC and what is missing or could be improved.
We probably also want to map each of these nodes to documentation, and figure out if the documentation
is easy enough to find, clear for a user, and is presented in a consistent, well-branded way.

We can discuss what is automated, what is not, and how that can be improved. More specifically,
what are the production services and software offered by HPC, and can we trace their entire pipeline
from source code to production deployment? Is there room for improvement?

> there is a lot of discussion aroudn software stacks like this right now -- we should probably
> sync up on it. There are more reasons than just RSE-ops to have a common software stack for HPC
> at this level.  It also helps us push on vendors.

## Summary of Opportunities

The following areas of RSE-ops are not well developed, and we have opportunity to build or seek out tools to fill the space.

- **Application Development**: Development framework for interactive (browser based) applications for HPC. This relies on being able to ensure secure access in a browser.

> I think people are calling this "cloud services" or "web applications". If you say "app
> development in HPC people think simulation.

- **Automated Scaling**:  Being able to scale a job, task, or service without thinking about it.
- **On Demand Resources**: An HPC user should theoretically be able to request a custom resource, and "throw it away" when done. For HPC an administrative team would still need to monitor and maintain the resources, but to the user there could be a more interactive, customized experience. E.g., "I want an instance with this amount of memory, storage, and with this software installed. And I want to customize and request it in a web interface."

> confused about this one because this is what SLURM and Flux do. You can ask for these things, and
> you are given a temporary allocation. The allocation is then used by someone else when you are
> done. Allocation is bare metal, not instance-based, but this is what RMs do. The web interface
> part wuld be new but people are generally managing complex resource requests for ensembles. I
> think resource requests are more like configuration-as-code than they are like ewb forms -- at
> least for big apps and studies.

- **Continuous Integration**: Application developers on HPC rarely test their code from version control directly on systems where they are intended to be run. It should be possible to better connect where code lives to where it will ultimately be used to run tests and builds.

> this isn't true -- many times they *only* test it where it is intended to run, and running it
> elsewhere is the issue when the need arises. It should be easier to do multi-platform CI so that
> teams could envision supporting more platforms/HPC centers -- e.g. if there was a build/CI farm
> for HPC.

- **Dependency Management**: With spack, easybuild, and containers, we are doing fairly well. However, constant training and education about these projects is still a challenge.

> also they usability is not what it is for many language ecosystems -- we need reliable binary
> deployment, which requires much of the metadata you mention above for containers. Distributing
> binaries and distributing containers require very similar metadata in my mind -- they're related
> and we probably need both.

- **Community Standards**: Have one or more representatives join the OCI community.

> not just OCI -- other standards bodies as well -- also do we need some foundation of our own for
> this stack?

- **Continuous Integration**: Can there be a CI resource or service provided that can better mock HPC environments?

> this is cool.  also what is the standard CI service?  GitLab is as close as I've seen anyone get, but it is still partially proprietary and I wonder if tekton or something could help fill the gap. GitLab has an open issue to support tekton pipelines YAML.

> standardizing runner configuration/tagging is a thing we should talk about here. If different
> sites deploy gitlab and hae different tags for runners, then CI is not portable and you can't run
> the same tests or repo CI configuration at different sites. Need standard arch labels and such.
> Flux resource langauge is an interesting start for this but there need to be mini-languages like
> archspec for microarchitecture, smoething for GPU (hopefully also archspec), something for ABI
> specs. That gets complicated, but it is needed to build proper test matrices.

- **Continuous Deployment**: Why can't traditional tools to produce software be hooked up with the CI service?

> They can. Internal registries are needed, also OCI container launch needs to be scalable so that
> we can use regular old registries. I linked you an ISCP proposal about making Podman and OCI
> images scalable -- check that out in Slack.

- **Monitoring**: better integration of traditional workflow/job management tools with monitoring, and establishing best practices.


[1] https://aws.amazon.com/devops/what-is-devops/
[2] https://www.oreilly.com/library/view/cloud-native-devops/9781492040750/ch01.html
[3] https://www.oreilly.com/library/view/cloud-native-devops/9781492040750/ch01.html#containers-intro
[4] https://research.google/pubs/pub43438/
[5] https://cloud.google.com/devops
[6] https://azure.microsoft.com/en-us/services/devops/
[7] https://cloud.google.com/solutions/hpc
[8] https://insidehpc.com/2017/03/future-technologies-rise-hpc/
[9] https://www.osc.edu/resources/online_portals/ondemand
[10] https://dl.acm.org/doi/10.1109/MS.2016.68
[11] https://engineering.purdue.edu/paramnt/publications/SBA+08.pdf
[12] https://en.wikipedia.org/wiki/Replication_crisis
[13] https://github.com
[14] https://gitlab.com
[15] https://travis-ci.org
[16] https://circleci.com
[17] https://jenkins.io
[18] https://easybuild.io/
[19] https://spack.io/
[20] https://lmod.readthedocs.io/en/latest/
[21] https://modules.readthedocs.io/en/latest/
[22] https://spack.io/spack-user-survey-2020/
[23] https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0177459
[24] https://github.com/NERSC/shifter
[25] https://singularity-hpc.readthedocs.io
[26] https://joss.theoj.org/papers/10.21105/joss.00426
[27] https://github.com/opencontainers/distribution-spec
[28] https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008316
[29] https://opencontainers.org
[30] https://docker.io
[31] https://hub.docker.com/
[32] DOI:10.1109/SmartWorld-UIC-ATC-SCALCOM-IOP-SCI.2019.00087
[33] https://jupyter.org/hub
