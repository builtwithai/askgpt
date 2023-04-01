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
      stop: stop
    },{
      headers: {
        'api-key': apikey,
      },
      params: { "api-version": apiversion }
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
