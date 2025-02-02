import OpenAI from "openai";
import { createAssistant } from "./openai/createAssistant.js";
import { createThread } from "./openai/createThread.js";
import { createRun } from "./openai/createRun.js";
import { performRun } from "./openai/performRun.js";

async function main() {
    const client = new OpenAI()
    const message = "Hello, AI Agent!";
    
    const assistant = await createAssistant(client);
    const thread = await createThread(client, message);
    const run = await createRun(client, thread, assistant.id);
    const result = await performRun(run, thread, client);

    console.log(result);
    
}

main();