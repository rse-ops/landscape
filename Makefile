.PHONY: all build run
PROJECT_ROOT = $(shell pwd)

all: build
	docker run -it -v ${PROJECT_ROOT}:/code latex2md

build:
	docker build -t latex2md .
	
run:
	bundle exec jekyll serve
