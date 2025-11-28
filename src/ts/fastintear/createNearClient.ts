// src/ts/fastintear/createNearClient.ts
// This file handles near client and network setup
//
import { createNearClient } from "fastintear";

// Multiple clients with different configurations
const near_mainnetClient = createNearClient({ networkId: "mainnet" });
const near_testnetClient = createNearClient({ networkId: "testnet" });

export const NETWORK_STORAGE_KEY = "network_id"; // used for network toggle
//
//
function getStoredNetworkId(): 'mainnet' | 'testnet' {
  const raw = localStorage.getItem(NETWORK_STORAGE_KEY);
  const value = (raw || 'mainnet').trim().toLowerCase();
  return value === 'testnet' ? 'testnet' : 'mainnet';
}

export function nearClient() {
  const networkId = getStoredNetworkId();
  const client =
    networkId === 'testnet' ? near_testnetClient : near_mainnetClient;

  console.log('[nearClient] networkId:', networkId);
  console.log('[nearClient] client:', networkId === 'testnet' ? 'near_testnetClient' : 'near_mainnetClient');

  return client;
}