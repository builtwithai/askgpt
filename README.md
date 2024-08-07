# AskGPT

[![unit-tests](https://github.com/builtwithai/askgpt/actions/workflows/test.yml/badge.svg)](https://github.com/builtwithai/askgpt/actions/workflows/test.yml)



## Code in Main

Install the dependencies

```bash
npm install
```

Run the tests :heavy_check_mark:

```bash
$ npm test

 PASS  ./index.test.js
...
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

## Package for distribution

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos.  Packaging the action will create a packaged action in the dist folder.

Run prepare

```bash
npm run prepare
```

Since the packaged index.js is run from the dist folder.

```bash
git add dist
```

## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

Tag it

```bash
❯ git tag -fa v1 -m "Update v1 tag"
❯ git push origin v1 --force
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Usage

You can now consume the action by referencing the v1 branch

```yaml
    - uses: builtwithai/askgpt@main
      id: generate-response
      env:
        KEY: ${{ secrets.KEY }}
        ENDPOINT: ${{ secrets.ENDPOINT }}
      with:
        prompt: '{"prompt": ["what are the important things in life", "rank in order of difficulty.", "pick top 3"]}'
    - run: echo ${{ steps.generate-response.outputs.response }}
```

anygpt
This action provides a completion for a given prompt using the model API.

Required Inputs

KEY
Required The API key for the model API

ENDPOINT
Required The URL for the model API EndPoint

MODEL
Model Name

prompt
Required The prompt to complete.


See the [actions tab](https://github.com/builtwithai/askgpt/actions) for runs of this action! :rocket:
