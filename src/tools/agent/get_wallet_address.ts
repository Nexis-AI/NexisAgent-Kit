import { NexisAgentKit } from "../../agent";

/**
 * Get the agents wallet address
 * @param agent - NexisAgentKit instance
 * @returns string
 */
export function get_wallet_address(agent: NexisAgentKit) {
  return agent.wallet_address.toBase58();
}
