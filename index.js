const core = require('@actions/core');
const getModelResponse = require('./response');

async function run() {
  try {
    const url = process.env.ENDPOINT;
    const apiKey = process.env.KEY;
    if (!apiKey || apiKey.trim() === "") {
      throw new Error("env.KEY API key is missing or empty.");
    }
    const model = process.env.MODEL;
    if (!model || model.trim() === "") {
      throw new Error("env.MODEL model is missing or empty.");
    }
    const prompts = JSON.parse(core.getInput('prompt'));
    core.debug(JSON.stringify(prompts));
    const opt = core.getInput('options');
    //add model to options
    const options = { "model": model };
    core.debug(`Inputs: prompt=${prompts}, options=${options}`);
    const response = await getModelResponse(url, apiKey, prompts['prompt'], options);
    core.debug(JSON.stringify(response));
    core.setOutput('response', response);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();