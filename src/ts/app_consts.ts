// APP CONSTS/FUNCTIONS
import { getStoredNetworkId } from "./fastintear/createNearClient";
// ===========================================
export function DEFAULT_POOL_ID() {
  const networkId = getStoredNetworkId();
  const POOL_ID: string = networkId === "testnet" ? "2459" : "5767";
  return POOL_ID as string;
}
// used for loading last pool on swap page
export function LAST_POOL_ID_STORAGE_KEY() {
  const networkId = getStoredNetworkId();
  const POOL_ID_STORAGE_KEY: string =
    networkId === "testnet" ? "last_testnet_pool" : "last_mainnet_pool";
  return POOL_ID_STORAGE_KEY as string;
}
