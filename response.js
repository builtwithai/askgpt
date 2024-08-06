const core = require('@actions/core');
const AskLLM = require('AskLLM');

const SYSTEM_PROMPT = `
Answer based on the given information only.
Respond in pretty markdown format and use relevant emojis to express yourself.
`;

async function getModelResponse(prompts, options = {}) {
  const url = process.env.ENDPOINT || "https://models.inference.ai.azure.com/chat/completions";
  const apiKey = process.env.KEY || core.getInput('token');
  const model = process.env.MODEL || "gpt-4o";
  options.model = model;
  
  const llm = new AskLLM(url, apiKey, options);
  let response = "";
  const messages = [];

  const system = process.env.SYSTEM || SYSTEM_PROMPT;
  messages.push({ role: "system", content: system });

  for (const prompt of prompts) {
    messages.push({ role: "user", content: `${prompt}` });
    if (response !== "") {
      messages.push({ role: "user", content: response });
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