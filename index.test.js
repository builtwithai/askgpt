const process = require('process');
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

describe('getModelResponse', () => {
  test('returns a response from the model API', async () => {
    const url = process.env.ENDPOINT;
    const apiKey = process.env.KEY;
    const prompts = {"prompt": ["what are the important things in life?", ": rank in order of difficulty.", ": pick top 3"]};
    const model = null;
    const temperature = 0.5;
    const maxTokens = 10;
    const stop = '\n';
    const response = await getModelResponse(url, apiKey, prompts["prompt"],null, model, maxTokens, temperature);
    console.debug(response);
    expect(response).toBeDefined();
  }, 50000);
});


