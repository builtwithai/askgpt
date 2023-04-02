let getModelResponse = function (endpoint, apikey, prompt, temperature, apiversion, stop) {
  return new Promise((resolve, reject) => {

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      basePath: endpoint,
      apiKey: apikey
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion({
      prompt: prompt + stop[0],
      temperature: temperature,
      n: 1,
      stream: false,
      stop: stop,
      max_tokens: 4096
    }, {
      headers: {
        'api-key': apikey,
      },
      params: {
        "api-version": "2022-12-01",
        "max_tokens": 2024
      }
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = getModelResponse;
