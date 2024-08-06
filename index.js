const core = require('@actions/core');
const getModelResponse = require('./response');

async function run() {
  try {

    const prompts = JSON.parse(core.getInput('prompt'));
    core.debug(JSON.stringify(prompts));
    const options = JSON.parse(core.getInput('options'));
    core.debug(`Inputs: prompt=${prompts}, options=${options}`);
    const response = await getModelResponse(prompts['prompt'], options);
    core.debug(JSON.stringify(response));
    core.setOutput('response', response);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();