import { dexie_db_for_network } from "./dexie";
import type { POOL_RECORD_TYPE } from "./dexie";
// ============================================
// ============================================
export function get_all_saved_pools_function(): Promise<POOL_RECORD_TYPE[]> {
  const pools = dexie_db_for_network().toArray();
  return pools;
}
