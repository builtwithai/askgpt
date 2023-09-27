
const AskLLM = require('AskLLM');

async function getModelResponse(url, apiKey, model, prompts, options) {
  const llm = new AskLLM(url, apiKey, options);
  let response = "";
  const messages = [];

  for (const prompt of prompts) {
    messages.push({ role: "user", content: `${prompt}` });
    if (response !== "") {
      messages.push({ role: "system", content: response });
    }
    try {
      const completion = await llm.getCompletion(messages, options);
      response = completion;
    } catch (error) {
      console.error(error);
    }
  }
  return response;
}

module.exports = getModelResponse;
