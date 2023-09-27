const core = require('@actions/core');
const getModelResponse = require('./response');

async function run() {
  try {
    const url = process.env.ENDPOINT;
    const apiKey = process.env.KEY;
    if (!apiKey || apiKey.trim() === "") {
      throw new Error("env.KEY API key is missing or empty.");
    }
    const prompts = JSON.parse(core.getInput('prompt'));
    core.debug(JSON.stringify(prompts));
    const model = core.getInput('model');
    const options = core.getInput('options');
    core.debug(`Inputs: prompt=${prompts}, model=${model}, options=${options}`);
    const response = await getModelResponse(url, apiKey, model, prompts['prompt'], options);
    core.debug(JSON.stringify(response));
    core.setOutput('response', response);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();