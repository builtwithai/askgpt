
const axios = require('axios');

let getModelResponse = function (url, apiKey, prompt, model=null, maxTokens = 2000, temperature = 0.5, frequencyPenalty = 0, presencePenalty = 0, topP = 1, stop = null) {
  console.log('url: ', url);
  return new Promise(async (resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json'
    };

    const bodyData = {
      prompt,
      max_tokens: maxTokens,
      temperature,
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
      const response = await axios.post(url, bodyData, { headers });

      if (response.status === 200) {
        resolve(response.data);
      } else {
        reject(new Error(`Error: ${response.status} ${response.statusText}`));
      }
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = getModelResponse;
