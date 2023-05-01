
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

async function main() {
    const url = process.env.ENDPOINT;
    const apiKey = process.env.KEY;
    const prompts = ["what are the important things in life?", "rank the below in order of difficulty.", ":summarize above list in bullet points.\n-"];
    const temperature = 0.5;
    const maxTokens = 100;
    const model = "gpt-3.5-turbo";
    const frequencyPenalty = 0;
    const presencePenalty = 0;
    const topP = 1;
    const stop = ['\n', '###'];
    const response = await getModelResponse(url, apiKey, prompts, null, model, maxTokens, temperature, frequencyPenalty, presencePenalty, topP, stop);
    console.log(response);
  } 
  
  main();