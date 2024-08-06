const getModelResponse = require('./response');

describe('getModelResponse', () => {
  test('returns a response from the model API', async () => {
    const prompts = ["what are the important things in life?", ": rank in order of difficulty.", ": pick top 3"];
    const response = await getModelResponse(prompts);
    console.debug(response);
    expect(response).toBeDefined();
  }, 50000);
});