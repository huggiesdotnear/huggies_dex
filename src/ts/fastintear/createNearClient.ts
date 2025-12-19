// src/ts/fastintear/createNearClient.ts
// This file handles near client setup
//
import { createNearClient } from "fastintear";
import { getStoredNetworkId } from "../network";
//
// Multiple clients with different configurations
const near_mainnetClient = createNearClient({ networkId: "mainnet" });
const near_testnetClient = createNearClient({ networkId: "testnet" });
//
export function nearClient() {
  const networkId = getStoredNetworkId();
  const client =
    networkId === "testnet" ? near_testnetClient : near_mainnetClient;

  console.log("[nearClient] networkId:", networkId);
  console.log(
    "[nearClient] client:",
    networkId === "testnet" ? "near_testnetClient" : "near_mainnetClient",
  );

  return client;
}
