import OpenAIAPI from "openai";
import dotenv from 'dotenv'; // npm install dotenv
dotenv.config();

const openai = new OpenAIAPI({apiKey: process.env.OPEN_AI_KEY})

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]);
  } catch (error) {
    console.error(error);
  }
}

main();

/* ------------------------ ERROS
    - OpenAIError: The OPENAI_API_KEY environment variable is missing or empty; 
    either provide it, or instantiate the OpenAI client with an apiKey option, 
    like new OpenAI({ apiKey: 'My API Key' }).

      *** Corrigido importando "dotenv".
*/