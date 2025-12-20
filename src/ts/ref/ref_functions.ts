// CLEAN REUSABLE FUNCTIONS
import { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import { nearClient } from "../fastintear/createNearClient";
import { ref_contractId_for_network } from "./ref_const";
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
    console.error('Error fetching number of pools:', error);
    throw error;
  }
};