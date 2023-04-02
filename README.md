# AnyGPT

<p align="center">
  <a href="https://github.com/devops-testbed/anygpt/actions"><img alt="javscript-action status" src="https://github.com/devops-testbed/anygpt/workflows/units-test/badge.svg"></a>
</p>


## Code in Main

Install the dependencies

```bash
npm install
```

Run the tests :heavy_check_mark:

```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)
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

Checkin to the v1 release branch

```bash
git checkout -b v1
git commit -a -m "v1 release"
```

```bash
git push origin v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Usage

You can now consume the action by referencing the v1 branch

```yaml
    - uses: devops-testbed/anygpt@v1
      id: generate-response
      env:
        ENDPOINT: ${{ secrets.ENDPOINT }}
        KEY: ${{ secrets.KEY }}
        VERSION: ${{ secrets.VERSION }}
      with:
        endpoint: ${{ secrets.ENDPOINT }}
        apikey: ${{ secrets.KEY }}
        apiversion: ${{ env.VERSION }}
        prompt: 'create a github action haiku'
    - run: echo ${{ steps.generate-response.outputs.response }}
```

anygpt
This action completes a prompt using the model API.

Inputs
endpoint
Required The endpoint URL for the model API.

api_key
Required The API key for the model API

prompt
Required The prompt to complete.


See the [actions tab](https://github.com/devops-testbed/anygpt/actions) for runs of this action! :rocket:
