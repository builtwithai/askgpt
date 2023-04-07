
const axios = require('axios');

let getModelResponse = function (url, apiKey, prompts, response = '', model = null, maxTokens = 2000, temperature = 0.5, frequencyPenalty = 0, presencePenalty = 0, topP = 1, stop = null) {
  return new Promise(async (resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json'
    };

    const prompt = prompts.shift();
    const bodyData = {
      prompt: `${response}${prompt}`,
      max_tokens: maxTokens,
      temperature: temperature,
      frequency_penalty: frequencyPenalty,
      presence_penalty: presencePenalty,
      top_p: topP
    };

    if (url.includes('azure.com')) {
      headers['api-key'] = apiKey;
      bodyData.stop = stop;
    } else if (url.includes('openai.com')) {
      headers['Authorization'] = `Bearer ${apiKey}`;
      bodyData.model = model;
    } else {
      reject(new Error('Invalid URL.'));
    }

    const body = JSON.stringify(bodyData);

    try {
      const resp = await axios.post(url, bodyData, { headers });

      if (resp.status === 200) {
        const output = resp.data.choices[0].text.trim();
        console.info(`Output: ${output}`);
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
