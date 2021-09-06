#!/bin/bash

cd src
for include in $(cat ../includes.txt); do
    printf "Parsing $include\n"
    pandoc -s $include.tex -o ../_includes/paper/$include.md # --bibliography rseops.bib 
done

# Also render the updated PDF
pandoc -s main.tex -o "rse-ops.pdf" --pdf-engine=xelatex  --bibliography rseops.bib --citeproc

# Fix permissions
cd ..
chmod 0777 _includes/*
echo "Files generated:"
ls _includes/paper
