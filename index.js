const core = require('@actions/core');
const github = require('@actions/github');
const getModelResponse = require('./response');

async function run() {
  try {
    const url = process.env.ENDPOINT;
    const apiKey = process.env.KEY;
    if (!apiKey || apiKey.trim() === "") {
      throw new Error("env.KEY API key is missing or empty.");
    }
    const prompts = JSON.parse(core.getInput('prompt'));
    core.info(JSON.stringify(prompts));
    const model = core.getInput('model');
    const maxTokens = parseInt(core.getInput('max_tokens'), 10);;
    const frequencyPenalty = parseInt(core.getInput('frequency_penalty'), 10);
    const presencePenalty = parseInt(core.getInput('presence_penalty'),10);
    const topP = parseInt(core.getInput('top_p'),10);
    const temperature = parseFloat(core.getInput('temperature'));
    const stop = core.getInput('stop');
    core.info(`Inputs: prompt=${prompts}, model=${model}, maxTokens=${maxTokens}, frequencyPenalty=${frequencyPenalty}, presencePenalty=${presencePenalty}, topP=${topP}, temperature=${temperature}, stop=${stop}`);
    const response = await getModelResponse(url, apiKey, prompts['prompt'],null, model, maxTokens, temperature, frequencyPenalty, presencePenalty, topP, stop);
    core.debug(JSON.stringify(response));
    core.setOutput('response', response);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
