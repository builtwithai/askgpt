
const { Configuration, OpenAIApi } = require("openai");


let getModelResponse = function (url, apiKey, prompts, response = '', model = "gpt-3.5-turbo", maxTokens = 100, temperature = 0.5, frequencyPenalty = 0, presencePenalty = 0, topP = 1, stop = null) {
  return new Promise(async (resolve, reject) => {

    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);
    const prompt = prompts.shift();

    const bodyData = {
      model: model,
      messages: [{ role: "user", content: `${response}${prompt}` }],
      max_tokens: maxTokens,
      temperature: temperature,
      frequency_penalty: frequencyPenalty,
      presence_penalty: presencePenalty,
      top_p: topP
    };

    try {
      //console.info(`Request: ${JSON.stringify(bodyData)}`);
      const resp = await openai.createChatCompletion(bodyData);
      if (resp.status === 200) {
        const output = resp.data.choices[0].message.content;
        //console.info(`Output: ${output}`);
        if (prompts.length > 0) {
          const respnext = await getModelResponse(url, apiKey, prompts, output, model, maxTokens, temperature, frequencyPenalty, presencePenalty, topP, stop);
          resolve(`${respnext}`);
        } else {
          resolve(output);
        }
      } else {
        reject(new Error(`Request failed with status ${resp.status}.`));
      }
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = getModelResponse;
