const core = require('@actions/core');
const github = require('@actions/github');
const getModelResponse = require('./response').default;

async function run() {
  try {
    const apiKey = core.getInput('apikey');
    const url = core.getInput('endpoint');
    const prompt = core.getInput('prompt');
    const model = core.getInput('model');
    const maxTokens = core.getInput('maxTokens');
    const frequencyPenalty = core.getInput('frequencyPenalty');
    const presencePenalty = core.getInput('presencePenalty');
    const topP = core.getInput('topP');
    const temperature = core.getInput('temperature');
    const stop = core.getInput('stop');
    const response = await getModelResponse(url, apiKey, prompt, model, maxTokens, temperature, frequencyPenalty, presencePenalty, topP, stop);
    core.setOutput('response', response.data.choices[0].text);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();