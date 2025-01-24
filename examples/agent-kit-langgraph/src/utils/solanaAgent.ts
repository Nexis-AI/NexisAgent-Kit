import { NexisAgentKit, createSolanaTools } from "nexis-agent-kit";

export const agentKit = new NexisAgentKit(
  process.env.NEXIS_PRIVATE_KEY!,
  process.env.RPC_URL!,
  { OPENAI_API_KEY: process.env.OPENAI_API_KEY! },
);

export const solanaTools = createSolanaTools(agentKit);
