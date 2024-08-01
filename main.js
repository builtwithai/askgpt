
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

async function main() {
    const url = process.env.ENDPOINT || null;
    const apiKey = process.env.KEY;
    const prompts = ["what are the important things in life?", "rank the below in order of difficulty.", ":summarize above list in bullet points.\n-"];
    const model = process.env.MODEL || "gpt-3.5-turbo";
    const options = {"model":model}
    const response = await getModelResponse(url, apiKey, prompts, options);
    console.log(response);
  } 
  
main();