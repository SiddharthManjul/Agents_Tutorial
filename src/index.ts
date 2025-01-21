import OpenAI from "openai";
import { createAssistant } from "./openai/createAssistant.js";
import { createThread } from "./openai/createThread.js";

async function main() {
    const client = new OpenAI()
    const message = "Hello, AI Agent!";
    
    const assistant = await createAssistant(client);
    const thread = await createThread(client, message);
}

main();