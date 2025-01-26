import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";
import { Chain, sepolia } from "viem/chains";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  [sepolia.id]: {
    UniswapV2Router: {
      address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      abi: [] // Import actual ABI from @uniswap/v2-periphery
    }
  }
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
