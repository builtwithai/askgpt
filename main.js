const getModelResponse = require('./response');

async function main() {
  const prompts = ["what are the important things in life?", "rank the below in order of difficulty.", ":summarize above list in bullet points.\n-"];
  const response = await getModelResponse(prompts);
  console.log(response);
}

main();