FROM pandoc/latex

# docker build -t latex2md .
# docker run -it -v $PWD:/code latex2md

LABEL maintainer "@vsoch"
ENV DEBIAN_FRONTEND noninteractive

RUN apk update && apk add python3
ADD . /code
RUN chmod u+x /code/entrypoint.sh
WORKDIR /code

ENTRYPOINT ["/bin/sh", "/code/entrypoint.sh"]
