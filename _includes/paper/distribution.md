## Software Distribution for RSE-ops vs. DevOps

The end-goal of an HPC environment is to make software available to
researchers. This is abstractly similar to the "end goal" of a cloud
environment, which is to make software available to users via services.
For the cloud, this typically means interactive web interfaces or
services that are accessed from other web or terminal clients via
application programming interfaces (APIs). Since HPC environments are
typically running jobs that rely on system software and some number of
known aliases, the bulk majority of "software distribution" for HPC is
probably command line interfaces. In this framework, the administrators
must provide an easy way to manage a collection of software, and make it
available to users, and app developers that maintain their own
deployments have to develop within that. At best, you can create modular
structure and exposure of different software via file-system
organization (e.g., putting apps in '/project') and using environment
modules {% cite LMOD; @environment-modules; @shpc %} (e.g., 'module load' only
what you need).

Users are somewhat empowered to install their own software, given that
1. they have the file-system space to do so, and 2. installation does
not require any escalated permissions on the system. While this could
mean a "bring your own environment" scenario via containers pulled
from external registries, more likely it means relying on package
managers and module systems. Another solution to this problem could be
from better HPC container run-times.

Ideally, every module and package would have a suite of tests to ensure
its functionality, but in real world scenarios its likely that the
software is tested elsewhere (e.g., a CI service associated with the
source code) and distributed to the system for immediate usage.
<br><br>
{% bibliography --cited %}