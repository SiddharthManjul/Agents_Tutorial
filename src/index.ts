import OpenAI from "openai";
import { createAssistant } from "./openai/createAssistant.js";

async function main() {
    const client = new OpenAI()
    
    const assistant = await createAssistant(client);
}

main();