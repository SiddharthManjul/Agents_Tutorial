import OpenAI from "openai";
import { Thread } from "openai/resources/beta/threads/threads";
import { Run } from "openai/resources/beta/threads/runs/runs";

export async function createRun(client: OpenAI, thread: Thread, assistantID: string): Promise<Run> {
    let run = await client.beta.threads.runs.create(thread.id, {
        assistant_id: assistantID,
    });

    // Wait for the run to complete and keep polling
    while (run.status === "in_progress" || run.status === "queued") {
        await new Promise(resolve => setTimeout(resolve, 1000));
        run = await client.beta.threads.runs.retrieve(thread.id, run.id);
    }

    return run;
}