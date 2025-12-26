import { ref_get_pool_function } from "../../ts/ref/ref_functions";
import { put_pool_function } from "../../ts/indexer-db/put-pools";
// ===============================================================
let pool_kind: string;
let token_account_ids: string[];
let amounts: string[];
let total_fee: number;
let shares_total_supply: string;
let amp: number;
//
export async function get_and_put_pool_info(pool_id: string) {
  const parsed_route_pool_id = Number(pool_id);
  const pool_info = await ref_get_pool_function(parsed_route_pool_id);
  pool_kind = pool_info.pool_kind;
  token_account_ids = pool_info.token_account_ids;
  amounts = pool_info.amounts;
  total_fee = pool_info.total_fee;
  shares_total_supply = pool_info.shares_total_supply;
  amp = pool_info.amp;

  put_pool_function(
    pool_id,
    pool_kind,
    token_account_ids,
    amounts,
    total_fee,
    shares_total_supply,
    amp,
  );
}
// ===============================================================
