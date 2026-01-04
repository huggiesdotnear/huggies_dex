// APP CONSTS/FUNCTIONS
import { getStoredNetworkId } from "./fastintear/createNearClient";
// ===========================================
export function DEFAULT_POOL_ID() {
  const networkId = getStoredNetworkId();
  const POOL_ID: string = networkId === "testnet" ? "2459" : "5767";
  return POOL_ID as string;
}
export function DEFAULT_TOKEN_ID() {
  const networkId = getStoredNetworkId();
  const POOL_ID: string = networkId === "testnet" ? "shit-237.factory.v10.meme-cooking.testnet" : "shit-1170.meme-cooking.near";
  return POOL_ID as string;
}
// used for loading last pool on swap page
export function LAST_POOL_ID_STORAGE_KEY() {
  const networkId = getStoredNetworkId();
  const POOL_ID_STORAGE_KEY: string =
    networkId === "testnet" ? "last_testnet_pool" : "last_mainnet_pool";
  return POOL_ID_STORAGE_KEY as string;
}
// user balance
export const USER_REF_BALANCE_STORAGE_KEY: string = "ref_inner_balance";
