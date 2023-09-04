import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

let creator;
try {
  // Hardcoded public key
  creator = new PublicKey("absF5t1MP7dXFhbgUgaTi7ffJM2WhBg1cmrY5s7h3By");
} catch (error) {
  console.error("Error initializing creator PublicKey:", error);
}
export { creator };

export const network = process.env.VUE_APP_NETWORK;

let networkConnection;
try {
  networkConnection = process.env.VUE_APP_CUSTOM_RPC
    ? new Connection(process.env.VUE_APP_CUSTOM_RPC)
    : new Connection(clusterApiUrl(network));
} catch (error) {
  console.error("Error initializing network connection:", error);
}
export { networkConnection };

let SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID;
try {
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
    "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
  );
} catch (error) {
  // eslint-disable-next-line
  console.error("Error initializing SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID PublicKey:", error);
}
export { SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID };

let TOKEN_PROGRAM_ID;
try {
  TOKEN_PROGRAM_ID = new PublicKey(
    "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
  );
} catch (error) {
  console.error("Error initializing TOKEN_PROGRAM_ID PublicKey:", error);
}
export { TOKEN_PROGRAM_ID };
