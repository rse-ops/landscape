::: center
  Description              DevOps                                                                                         RSE-ops
  ------------------------ ---------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------
  Goals                    Commercial software and services                                                               Research software development, use, and distribution
  People                   Industry software engineers                                                                    Research software engineers
  Accessibility            Freedom to access from browsers, and anywhere with an internet connection                      More secured access from possibly a limited set of internet connections
  Maintenance              Request, use, and throw away when done                                                         Constantly running resources that require maintenance and monitoring
  Staffing                 No staffing required                                                                           Requires Linux administrators and user support specialists
  Scientific Software      Software and services can be modular, and optimized for the application or service.            Requires complex software stacks with conflicting dependencies and variable architectures to co-exist on a resource.
  Scaling                  Scaling is typically automated.                                                                Many options for scaling, and manual practices make it challenging for a cluster user or developer to know best practices.
  Software Distribution    Complete freedom to use any software distribution or package manager.                          Software is likely to come from external resources to be installed via a package manager or module system for the user.
  Permissions              Complete freedom                                                                               Logically, only administrators can have elevated privileges to install software or otherwise interact with resources.
  Accessibility            Browser and command line, even from mobile                                                     Accessibility is primarily by way of the command line, with limited access to interactive notebooks. This is a huge potential area for development for rse-ops
  Testing                  Automated testing and deployment alongside and integrated with cloud resources                 Automated testing typically separate from the HPC resources
  Dependency Management    Easy to use bleeding edge software, and install only what you need when you need it            A hodge-podge of dependencies (versions and for different architectures) must co-exist on the resource
  Community Standards      Significant time and effort to establish standards for containers                              Traditionally not as involved in the same efforts
  Continuous Integration   Well established practices and integration of version control with build, test, deploy         Limited interaction with traditional CI services, local deployment and custom runners is promising
  Continuous Deployment    Comes down to pushing containers to registries for production systems                          No best practice established, but can interact with resources in some situations to deploy
  Monitoring               Monitoring is well integrated into services                                                    Must "roll your own" monitoring, but DevOps services (e.g., Grafana, Prometheus) are used sometimes.
  Security                 DevSecOps is leading the way to make security an automated part of the development lifecycle   Security is unlikely to be automated, and a greater challenge with many users sharing the same space.
:::
<br><br>
{% bibliography --cited %}