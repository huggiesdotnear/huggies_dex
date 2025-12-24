import { dexie_db_for_network } from "./dexie";
// ============================================
// ============================================
interface dexie_args_params_interface {
  id: string;
  pool_kind: string;
  token_account_ids: string[];
  amounts: string[];
  total_fee: number;
  shares_total_supply: string;
  amp: number;
}
// ============================================
// put_pool_function
export function put_pool_function(
  id: dexie_args_params_interface["id"],
  pool_kind: dexie_args_params_interface["pool_kind"],
  token_account_ids: dexie_args_params_interface["token_account_ids"],
  amounts: dexie_args_params_interface["amounts"],
  total_fee: dexie_args_params_interface["total_fee"],
  shares_total_supply: dexie_args_params_interface["shares_total_supply"],
  amp: dexie_args_params_interface["amp"],
) {
  dexie_db_for_network().put({
    id: id,
    pool_kind: pool_kind,
    token_account_ids: token_account_ids,
    amounts: amounts,
    total_fee: total_fee,
    shares_total_supply: shares_total_supply,
    amp: amp,
  });
}
// ============================================
// ============================================
