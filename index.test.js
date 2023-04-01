const process = require('process');
const getModelResponse = require('./response');
const dotnev = require('dotenv');
dotnev.config();

describe('getModelResponse', () => {
  test('returns a response from the model API', async () => {
    const endpoint = process.env.ENDPOINT;
    const apikey = process.env.KEY;
    const apiversion = process.env.VERSION;
    const prompt = 'Haiku on github actions';
    const temperature = 0.9;
    const stop = ['\n', '###'];
    const response = await getModelResponse(endpoint, apikey, prompt, temperature, apiversion, stop);
    //log response to console
    console.log(response);
    expect(response).toBeDefined();
  });
});


