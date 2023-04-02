
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

async function main() {
    const endpoint = process.env.ENDPOINT;
    const apikey = process.env.KEY;
    const apiversion = process.env.VERSION;
    const prompt = 'write a advantages of buying MSFT';
    const temperature = 0.9;
    const stop = ['\n', '###'];
    const response = await getModelResponse(endpoint, apikey, prompt, temperature, apiversion, stop);
    console.log(response.data.choices[0].text);
  } 
  
  main();