#!/usr/bin/env python

# Update citations will replace citations in the form [@name] with {% cite name %},
# and add the citations to the end of the page. We do this for jekyll scholar

import os
import re
import sys


def main(input_file):
    if not os.path.exists(input_file):
        sys.exit("%s does not exist." % input_file)
    with open(input_file, "r") as fd:
        content = fd.read()
    # Replace references
    for ref in re.findall("\[(.*?)\]", content):
        original = "[" + ref + "]"
        replacewith = "{% cite " + ref.lstrip("@") + " %}"
        content = content.replace(original, replacewith)

    # Replace escaped quotes
    content = content.replace('\\"', '"')

    content = content + "<br><br>\n{% bibliography --cited %}"
    with open(input_file, "w") as fd:
        fd.write(content)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("Please provide an input markdown file to parse!")
    input_file = sys.argv[1]
    main(input_file)
