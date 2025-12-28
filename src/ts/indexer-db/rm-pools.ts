import { dexie_db_for_network } from "./dexie";
// ============================================
// ============================================
export function rm_saved_pool_function(id: string) {
  dexie_db_for_network().delete(id);
}
