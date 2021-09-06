.PHONY: all build

all: build
	docker run -it -v $PWD:/code  latex2md

build:
	docker build -t latex2md .
	
run:
	bundle exec jekyll serve
