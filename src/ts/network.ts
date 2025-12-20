// this file exports the local storage key and get network function
import * as near from "fastintear";
import { NETWORK_STORAGE_KEY } from "./localStorage";
//
//
export function getStoredNetworkId(): "mainnet" | "testnet" {
  const raw = localStorage.getItem(NETWORK_STORAGE_KEY);
  const value = (raw || "mainnet").trim().toLowerCase();
  // also global near needs to be configured. easiest to make sure right everytime we need
  near.config({ networkId: value})
  return value === "testnet" ? "testnet" : "mainnet";
}