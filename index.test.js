const process = require('process');
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

describe('getModelResponse', () => {
  test('returns a response from the model API', async () => {
    const url = process.env.ENDPOINT;
    const apiKey = process.env.KEY;
    const prompt = {"prompt": ["what are the important things in life?", "rank the below in order of difficulty.", "pick top 3 and write it as a mardown list."]};
    const model = null;
    const temperature = 0.9;
    const maxTokens = 100;
    const stop = '\n';
    const response = await getModelResponse(url, apiKey, prompt, model, maxTokens, temperature);
    console.debug(response);
    expect(response).toBeDefined();
  }, 50000);
});


