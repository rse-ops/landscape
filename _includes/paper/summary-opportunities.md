# Summary of Opportunities

The following areas of RSE-ops are not well developed, and we have
opportunity to build or seek out tools to fill the space.

-   **Web Applications**: Development framework for interactive (browser
    based) applications for HPC. This relies on being able to ensure
    secure access in a browser.

-   **Automated Scaling**: Being able to scale a job, task, or service
    without thinking about it.

-   **On Demand Resources**: An HPC user should theoretically be able to
    request a custom resource, and \"throw it away\" when done. For HPC
    an administrative team would still need to monitor and maintain the
    resources, but to the user there could be a more interactive,
    customized experience. E.g., \"I want an instance with this amount
    of memory, storage, and with this software installed. And I want to
    customize and request it in a web interface.\" While traditional
    batch systems can support this kind of request, what they aren't
    designed for is on-demand computing. Batch systems expect jobs that
    take a long time, and they aren't responsive.

-   **Continuous Integration**: Application developers on HPC should
    have easy access to run tests on clusters, which can be difficult to
    do. Some national labs have workflows that integrate HPC with CI
    (e.g., GitLab) and other academic institutions are nowhere near this
    kind of integration.

-   **Dependency Management**: With spack, easybuild, and containers, we
    are doing fairly well. However, constant training and education
    about these projects is still a challenge. Along with dependency
    management we also need rich metadata that is paired with
    distributed binaries and containers.

-   **Community Standards**: Have one or more representatives join the
    OCI community, along with other standards bodies that work on ideas
    relevant to our communities.

-   **Continuous Integration**: Can there be a CI resource or service
    provided that can better mock HPC environments? Can there be a
    standard CI service?

-   **Continuous Deployment**: Why can't traditional tools to produce
    software be hooked up with the CI service?

-   **Monitoring**: better integration of traditional workflow/job
    management tools with monitoring, and establishing best practices.
