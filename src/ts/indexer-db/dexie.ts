import Dexie from 'dexie';
import type { Table } from 'dexie';
import type { REF_POOL_INFO_TYPE } from '../ref/pool_type';
import { getStoredNetworkId } from '../network';
//
// We store REF_POOL_INFO_TYPE together with an explicit string id you supply externally.
export type POOL_RECORD_TYPE = REF_POOL_INFO_TYPE & { id: string };
//
class HuggiesDB extends Dexie {
  mainnet_pools!: Table<POOL_RECORD_TYPE, string>;
  testnet_pools!: Table<POOL_RECORD_TYPE, string>;

  constructor() {
    super('huggies-dex-db');

    // Primary key is the explicit string "id" you provide. No auto-increment.
    this.version(1).stores({
      // Add indexes for fields you commonly query (optional but recommended)
      mainnet_pools: 'id, pool_kind, *token_account_ids, *amounts, total_fee, shares_total_supply, amp',
      testnet_pools: 'id, pool_kind, *token_account_ids, *amounts, total_fee, shares_total_supply, amp',
    });
  }
}
//
const huggiesDB = new HuggiesDB();
//
//
export function dexie_db_for_network() {
  const networkId = getStoredNetworkId();
  const huggies_mainnet_pools_dexie_const = huggiesDB.mainnet_pools;
  const huggies_testnet_pools_dexie_const = huggiesDB.testnet_pools;
  const dexie_db = networkId === "testnet" ? huggies_testnet_pools_dexie_const : huggies_mainnet_pools_dexie_const;
  return dexie_db;
}