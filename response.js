
const AskLLM = require('AskLLM');

async function getModelResponse(url, apiKey, model, prompts, options) {
  const llm = new AskLLM(url, apiKey, options);
  let response = "";

  for (const prompt of prompts) {
    const messages = [{ role: "user", content: `${response}${prompt}` }];
    const completion = await llm.getCompletion(messages, options);
    response += prompt + completion;
  }

  return response;
}

module.exports = getModelResponse;
