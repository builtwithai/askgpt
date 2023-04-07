
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

async function main() {
    const url = process.env.ENDPOINT;
    const apiKey = process.env.KEY;
    const prompt = {"prompt": ["what are the important things in life?", "rank the below in order of difficulty.", "pick top 3 and write it as a mardown list."]};
    const temperature = 0.5;
    const maxTokens = 1000;
    const model = null;
    const frequencyPenalty = 0;
    const presencePenalty = 0;
    const topP = 1;
    const stop = ['\n', '###'];
    const response = await getModelResponse(url, apiKey, prompt, model, maxTokens, temperature, frequencyPenalty, presencePenalty, topP, stop);
    console.log(response);
    console.log(response.choices[0].text);
  } 
  
  main();