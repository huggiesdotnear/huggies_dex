// src/ts/fastintear/createNearClient.ts
// This file handles near client and network setup
// 
import { createNearClient } from "fastintear";



// Multiple clients with different configurations
export const near_mainnetClient = createNearClient({ networkId: "mainnet" });
export const near_testnetClient = createNearClient({ networkId: "testnet" });
// will change this variable with the network toggle buuton
export let nearClient = near_mainnetClient; // default mainnet unless i setup fuction to change elsewehere