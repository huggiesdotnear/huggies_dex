// CLEAN REUSABLE FUNCTIONS FOR INTERACTING WITH AND GETTING DATA FROM REF CONTRACT
// depends on nearClient
import { nearClient } from "../fastintear/createNearClient";
import { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import { ref_contractId_for_network } from "./ref_const";
import type { REF_GET_POOL_TYPE } from "./ref_types";
import {
  REF_GET_POOL_TYPE_Z_CONST,
  REF_GET_POOLS_TYPE_Z_CONST,
} from "./ref_types";
// ================================================
interface ref_args_params_interface {
  pool_id: number;
  from_index: number;
  limit: number;
}
// ================================================
// get_number_of_pools_function_const
// Fetch the total number of pools
export const get_number_of_pools_function_const = async (): Promise<number> => {
  const result = await nearClient().view({
    contractId: ref_contractId_for_network(),
    methodName: ref_exchange_methods_const.get_number_of_pools,
    args: {},
  });
  return result as number;
};
// ================================================
// get_pool_function_const
export const get_pool_function_const = async (
  pool_id: ref_args_params_interface["pool_id"],
): Promise<REF_GET_POOL_TYPE> => {
  const result = await nearClient().view({
    contractId: ref_contractId_for_network(),
    methodName: ref_exchange_methods_const.get_pool,
    args: { pool_id: pool_id },
  });

  return REF_GET_POOL_TYPE_Z_CONST.parse(result);
};
// ================================================
// get_pools_function_const
export const get_pools_function_const = async (
  from_index: ref_args_params_interface["from_index"],
  limit: ref_args_params_interface["limit"],
): Promise<REF_GET_POOL_TYPE[]> => {
  const result = await nearClient().view({
    contractId: ref_contractId_for_network(),
    methodName: ref_exchange_methods_const.get_pools,
    args: { from_index, limit },
  });

  return REF_GET_POOLS_TYPE_Z_CONST.parse(result);
};
// ================================================
// ================================================
// copyright 2025 by sleet.near
