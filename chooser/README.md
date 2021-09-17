# Chooser Interface

This data folder includes everything needed for the chooser interface, which
is based off of the [recommend-o-matic](https://github.com/stanford-rc/recommend-o-matic) 
and provides a web interface that makes it easy to display
a list of options (typically tools) alongside filters, with the ultimate goal being to help
a user make a choice. 

## 1. How do I prepare tools and questions?

To make it easy to collaborate on sets of questions and resources, we encourage
a workflow that has collaborative editing done in Google Sheets, and then
export of those sheets to a tab separated file. Each sheet can then be downloaded as a tab
separated file (tsv). We currently have the following sheets and data files:

 - [ContainersQuestions.tsv](../data/containers.json) generated from [this sheet](https://docs.google.com/spreadsheets/d/1YN8qdlMWwpPMHxReSzdRyVT14IaXzrt0yR3rbD9Xc0M/edit?usp=sharing)
 - [ContainersTools.tsv](../data/containers.json) generated from [this sheet](https://docs.google.com/spreadsheets/d/1YN8qdlMWwpPMHxReSzdRyVT14IaXzrt0yR3rbD9Xc0M/edit?usp=sharing)

**more will be added as they are developed**

We then generate json data for each pair of files for the interface.

### Questions

Each question, has a unique id (unique_id), question text (question), and set of options (options) 
separated by commas. The included column is a flag to indicate if a question should be included or not. Blank indicates there is no information, in which case no filtering is done on that field.

### Tools

This sheet includes a listing of resources matched (via unique_id) to the questions. For each question, every option should be included that is supported by the resource. 

## 1. How do I generate data for the interface?

A script is provided [chooser.py](chooser.py) that will validate the data, and then generate a JSON file for the interface.
From the root of the repository:

```bash
$ python chooser/chooser.py --help
usage: chooser.py [-h] {validate,generate} ...

Chooser

optional arguments:
  -h, --help           show this help message and exit

actions:
  actions for Chooser

  {validate,generate}  actions
    validate           validate tab separated files only
    generate           validate and generate json for the chooser.
```

### Validate and Generate

Here is how we would provide the questions and resources to the script, all located under
[chooser](chooser):

```bash
$ cd chooser
$ python chooser.py generate --questions ContainersQuestions.tsv --tools ContainersTools.tsv --outfile ../pages/data/containers.json
Validation all tests pass.
Writing questions and answers to ../pages/data/containers.json
```

There is also a [generate.sh](generate.sh) script for running bulk commands on all future data.
If any field or mapping in either file is not valid, you'll get a message printed to the screen:

```
Answer "yesno" for containers_podman:question_hpc_usage is not valid, options are
 yes
no
not sure
```
And you can fix the file (it's recommended to fix also in your Google Sheet, if you
are using Google sheets) and run the script again.

#### Force

If the file already exists, you'll be notified:

```bash
$ python chooser.py generate --questions ContainersQuestions.tsv --tools ContainersTools.tsv --outfile ../pages/data/containers.json
Validation all tests pass.
../pages/data/containers.json exists, and --force is not set. Will not overwrite.
```

If you want to force over-write, you can either delete the file or provide `--force`

```bash
$ python chooser.py generate --questions ContainersQuestions.tsv --tools ContainersTools.tsv --outfile ../pages/data/containers.json --json
Validation all tests pass.
Writing questions and answers to ../pages/data/containers.json
```

### Validate Only

If you want to validate only, you can do that too:

```bash
$ python chooser.py validate --questions ContainersQuestions.tsv --tools ContainersTools.tsv
Validation all tests pass.
```

## 3. What do we validate?

To ensure that the data is correct for the interface, we check the following:

### validate_exists

Before we read in any data files, we must ensure that they are defined, and exist,
period. This is fairly straight forward.

### validate_not_empty

This validation step ensures that both data files that are read in are not empty.
In other words, we cannot generate an interface without a list of questions and resources.
In addition, a question column cannot be empty.

### validate_row_length

For each of the resources and questions tab separated files, a row of different
length indicates that there is possibly missing data. This step ensures that all rows
have the same length before moving on, that way we don't hit other indexing errors
further along in processing.

### validate_columns

We want to make sure that the data for the interface includes the fields
that will be expected, and required. We also want to make sure that if a question
is defined in the resources data, but not defined in the questions data, we
alert the creator that he or she is referencing a question that does not exist.

### validate_question_answers

Since each resource provides answers to questions defined in our questions data,
we not only need to validate that the questions are valid, but also that the answer
provided is known. For example, if my answer to a question is "I want to use web services"
but valid options for the question doesn't include this string, we want to alert the user that
there is either a typo, or that the new answer should be added as a valid answer.

## 4. How do I create and deploy the interface?

After a new set of data files is added for a particular resource, you should:

1. Generate the data file to be under [pages/data](pages/data)
2. Generate a new chooser file named by the category slug under [pages/choosers](pages/choosers). Use an existing one for a template. The data file references is in the `pages/data` folder.
3. Change `chooser: false` to `chooser: true` under [_data/rse-ops.yaml](_data/rse-ops.yaml)

Then you can preview the site to make sure things look as expected!
The base template for the chooser is [_layouts/chooser.html](_layouts/chooser.html).
