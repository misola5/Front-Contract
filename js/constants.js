export const CONTRACT_ADDRESSES = {
    simpleDex: "0xE77eB30A2745E075bbb83a54F6B7799CceC55c03",
    tokenA: "0xF203047B80e86B79CfeA045fB598440754f314Bc",
    tokenB: "0x1d20C33b53565eDf63acDcFaC4d8FB85fc72d4CB",
  };
  
  export const ABI = {
    simpleDex: [
      // Copia aquí el ABI completo del contrato SimpleDEX
    ],
    erc20: [
      // Copia aquí el ABI estándar del token ERC20
      // Puede obtenerse de la especificación o de OpenZeppelin
      {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{ "name": "", "type": "uint8" }],
        "type": "function",
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{ "name": "", "type": "string" }],
        "type": "function",
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{ "name": "", "type": "string" }],
        "type": "function",
      },
      {
        "constant": false,
        "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }],
        "name": "approve",
        "outputs": [{ "name": "", "type": "bool" }],
        "type": "function",
      },
      {
        "constant": true,
        "inputs": [],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "type": "function",
      },
    ],
  };
  