// CLEAN REUSABLE FUNCTIONS
import { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import { nearClient } from "../fastintear/createNearClient";
import { ref_contractId_for_network } from "./ref_const";
import type { REF_POOL_INFO_TYPE } from "./pool_type";
import { POOLS_INFO_SCHEMA } from "./pool_type";
// ================================================
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
//
// Fetch pools in batches using FastIntear
export const get_pools_function_const = async (
  fromIndex: number,
  limit: number,
): Promise<REF_POOL_INFO_TYPE[]> => {
  try {
    const result = await nearClient().view({
      contractId: ref_contractId_for_network(),
      methodName: ref_exchange_methods_const.get_pools,
      args: { from_index: fromIndex, limit: limit },
    });
    // Convert the raw result to ensure proper typing
    const typedResult = POOLS_INFO_SCHEMA.parse(result);
    return typedResult;
  } catch (error) {
    console.error("Error fetching pools batch:", error);
    throw error;
  }
};
