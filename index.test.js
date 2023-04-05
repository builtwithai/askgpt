const process = require('process');
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

describe('getModelResponse', () => {
  test('returns a response from the model API', async () => {
    const url = process.env.ENDPOINT;
    const apikey = process.env.KEY;
    const prompt = 'Stock market analyst\'s analysis of ticker: MSFT Analysis:';
    const model = null;
    const temperature = 0.9;
    const stop = '\n';
    const response = await getModelResponse(url, apiKey, prompt, model, maxTokens, temperature);
    console.log(response);
    expect(response).toBeDefined();
  });
});


