const process = require('process');
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

describe('getModelResponse', () => {
  test('returns a response from the model API', async () => {
    const url = process.env.ENDPOINT;
    const apiKey = process.env.KEY;
    const prompt = 'Stock market analyst\'s analysis of ticker: MSFT Analysis:';
    const model = null;
    const temperature = 0.9;
    const maxTokens = 500;
    const stop = '\n';
    const response = await getModelResponse(url, apiKey, prompt, model, maxTokens, temperature);
    console.debug(response);
    expect(response).toBeDefined();
  }, 20000);
});


