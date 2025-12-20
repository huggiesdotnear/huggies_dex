// keys for local storage
import { getStoredNetworkId } from "./network";
// ===========================================
// used for network toggle
export const NETWORK_STORAGE_KEY = "network_id";
//
// export const LAST_POOL_ID_STORAGE_KEY
// used for loading last pool on swap page
export function LAST_POOL_ID_STORAGE_KEY() {
  const networkId = getStoredNetworkId();
  const POOL_ID_STORAGE_KEY = networkId === "testnet" ? "last_testnet_pool" : "last_mainnet_pool";
  return POOL_ID_STORAGE_KEY;
};
//
// 