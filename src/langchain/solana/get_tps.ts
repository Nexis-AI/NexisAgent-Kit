import { Tool } from "langchain/tools";
import { NexisAgentKit } from "../../agent";

export class SolanaTPSCalculatorTool extends Tool {
  name = "solana_get_tps";
  description = "Get the current TPS of the Solana network";

  constructor(private solanaKit: NexisAgentKit) {
    super();
  }

  async _call(_input: string): Promise<string> {
    try {
      const tps = await this.solanaKit.getTPS();
      return `Solana (mainnet-beta) current transactions per second: ${tps}`;
    } catch (error: any) {
      return `Error fetching TPS: ${error.message}`;
    }
  }
}
