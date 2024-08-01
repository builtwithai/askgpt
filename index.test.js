const process = require('process');
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

describe('getModelResponse', () => {
  test('returns a response from the model API', async () => {
    const url = process.env.ENDPOINT;
    const apiKey = process.env.KEY;
    const prompts = ["what are the important things in life?", ": rank in order of difficulty.", ": pick top 3"];
    const model = "gpt-4o";
    const options = { "model": model }
    const response = await getModelResponse(url, apiKey, prompts, options);
    console.debug(response);
    expect(response).toBeDefined();
  }, 50000);
});


