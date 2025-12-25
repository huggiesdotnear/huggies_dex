// this file is to test that the variables are right i wrote for fun.
import { nearClient, NETWORK_STORAGE_KEY } from "./fastintear/createNearClient";
import { ref_contractId_for_network } from "./ref/ref_const";
import {
  ref_get_number_of_pools_function,
  ref_get_pool_function,
} from "./ref/ref_functions";
// ===================================
console.log("============================");
console.log("THIS IS TO TEST THE RIGHT STUFF IS BEING USED FOR NETWORK");
console.log(localStorage.getItem(NETWORK_STORAGE_KEY));
ref_contractId_for_network();
console.log(await ref_get_number_of_pools_function());
// console.log(await ref_get_pool_function(5767))
// ==============================
console.log("============================");
async function exampleUsage_of_get_pool() {
  try {
    const pool = await ref_get_pool_function(5767);

    if (!pool) {
      console.log("Pool not found or error occurred.");
      return;
    }

    console.log("Pool data:", pool);
  } catch (error) {
    console.error("Unexpected error in exampleUsage:", error);
  }
}
console.log(exampleUsage_of_get_pool());
console.log("============================");
console.log("============================");
// ==============================
// Get all transaction history
const txHistory = nearClient().localTxHistory();
console.log(txHistory); // Contains all transaction statuses
console.log("============================");
console.log("============================");
