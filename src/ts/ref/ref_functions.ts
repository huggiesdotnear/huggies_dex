// CLEAN REUSABLE FUNCTIONS FOR INTERACTING WITH AND GETTING DATA FROM REF CONTRACT
// depends on nearClient
import { nearClient } from "../fastintear/createNearClient";
import { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import { ref_contractId_for_network } from "./ref_const";
import type { REF_GET_POOL_TYPE } from "./ref_types";
import { REF_GET_POOL_TYPE_Z_CONST, REF_GET_POOLS_TYPE_Z_CONST } from "./ref_types";
// ================================================
interface ref_args_params_interface {
  pool_id: number;
  from_index: number;
  limit: number;
}
// ================================================
// get_number_of_pools_function_const
// Fetch the total number of pools using FastIntear
export const get_number_of_pools_function_const = async (): Promise<number> => {
  try {
    const result = await nearClient().view({
      contractId: ref_contractId_for_network(),
      methodName: ref_exchange_methods_const.get_number_of_pools,
      args: {},
    });
    return result as number;
  } catch (error) {
    console.error("Error fetching number of pools:", error);
    throw error;
  }
};
// ================================================
// get_pool_function_const
export const get_pool_function_const = async (
  { pool_id }: Partial<Pick<ref_args_params_interface, 'pool_id'>>
): Promise<REF_GET_POOL_TYPE> => {
  try {
    const result = await nearClient().view({
      contractId: ref_contractId_for_network(),
      methodName: ref_exchange_methods_const.get_pool,
      args: { pool_id: pool_id },
    });
    // Convert the raw result to ensure proper typing
    const typedResult = REF_GET_POOL_TYPE_Z_CONST.parse(result);
    return typedResult;
  } catch (error) {
    console.error("Error fetching pool:", error);
    throw error;
  }
};
// ================================================
// get_pools_function_const
// Fetch pools in batches using FastIntear
export const get_pools_function_const = async (
  { from_index, limit }: Partial<Pick<ref_args_params_interface, 'from_index' | 'limit'>>
): Promise<REF_GET_POOL_TYPE[]> => {
  try {
    const result = await nearClient().view({
      contractId: ref_contractId_for_network(),
      methodName: ref_exchange_methods_const.get_pools,
      args: { from_index: from_index, limit: limit },
    });
    // Convert the raw result to ensure proper typing
    const typedResult = REF_GET_POOLS_TYPE_Z_CONST.parse(result);
    return typedResult;
  } catch (error) {
    console.error("Error fetching pools batch:", error);
    throw error;
  }
};
// ================================================
// ================================================
// copyright 2025 by sleet.near