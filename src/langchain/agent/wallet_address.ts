import { Tool } from "langchain/tools";
import { NexisAgentKit } from "../../agent";

export class SolanaGetWalletAddressTool extends Tool {
  name = "solana_get_wallet_address";
  description = `Get the wallet address of the agent`;

  constructor(private solanaKit: NexisAgentKit) {
    super();
  }

  async _call(_input: string): Promise<string> {
    return this.solanaKit.wallet_address.toString();
  }
}
