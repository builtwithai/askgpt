const core = require('@actions/core');
const github = require('@actions/github');
const getModelResponse = require('./response');

async function run() {
  try {
    const apikey = core.getInput('apikey');
    const endpoint = core.getInput('endpoint');
    const prompt = core.getInput('prompt');
    const temperature = inputs.temperature;
    const stop = inputs.stop;
    const apiversion = inputs.apiversion;
    const response = await getModelResponse(endpoint, apikey, prompt, temperature, apiversion, stop);
    core.setOutput('response', response.data.choices[0].text);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();