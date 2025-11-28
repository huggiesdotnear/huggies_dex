// src/ts/fastintear/createNearClient.ts
// This file handles near client and network setup
//
import { createNearClient } from "fastintear";

// Multiple clients with different configurations
const near_mainnetClient = createNearClient({ networkId: "mainnet" });
const near_testnetClient = createNearClient({ networkId: "testnet" });

export const NETWORK_STORAGE_KEY = "network_id"; // used for network toggle
// Function to get the current client based on localStorage
export function nearClient() {
  const networkId = localStorage.getItem(NETWORK_STORAGE_KEY) || "mainnet";
  return networkId === "testnet" ? near_testnetClient : near_mainnetClient;
}