import Dexie from 'dexie';
import type { Table } from 'dexie';
import type { REF_POOL_INFO_TYPE } from '../ref/pool_type';
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
      mainnet_pools: 'id,pool_kind',
      testnet_pools: 'id,pool_kind',
    });
  }
}
//
export const huggiesDB = new HuggiesDB();

// Exported handles similar to your previous "use" API
export const huggies_mainnet_pools_indb_const = huggiesDB.mainnet_pools;
export const huggies_testnet_pools_indb_const = huggiesDB.testnet_pools;