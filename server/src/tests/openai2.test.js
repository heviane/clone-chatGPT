const { OpenAI } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const openai = new OpenAI({apiKey: process.env.OPEN_AI_KEY})

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "hello world em python" }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
  } catch (error) {
    console.error(error);
  }
}

main();

// ==================== Run / Tests
// cd server
// node src/tests/openai.test.js  // BadRequestError: 400 'messages' is a required property
// node src/tests/openai.test.js  // OK
    // response:
    // {
    //   index: 0,
    //   message: { role: 'assistant', content: 'print("Hello World!")' },
    //   logprobs: null,
    //   finish_reason: 'stop'
    // }

/* ==================== ERROR in frontend:

    Uncaught runtime errors:
    ERROR
    Request failed with status code 404
    AxiosError: Request failed with status code 404
        at settle (http://localhost:3000/static/js/bundle.js:43467:12)
        at XMLHttpRequest.onloadend (http://localhost:3000/static/js/bundle.js:42149:66)
*/
