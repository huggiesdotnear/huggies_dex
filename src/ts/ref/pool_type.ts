import * as z from "zod";
// ==============================
export interface REF_POOL_INFO_TYPE {
  pool_kind: string;
  token_account_ids: string[];
  amounts: string[];
  total_fee: number;
  shares_total_supply: string;
  amp: number;
}
// ==============================
export const POOL_INFO_SCHEMA = z.object({
  pool_kind: z.string(),
  token_account_ids: z.array(z.string()),
  amounts: z.array(z.string()),
  total_fee: z.number(),
  shares_total_supply: z.string(),
  amp: z.number(),
});
export const POOLS_INFO_SCHEMA = z.array(POOL_INFO_SCHEMA);