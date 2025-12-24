// this file is to test that the variables are right i wrote for fun.
import { NETWORK_STORAGE_KEY } from './fastintear/createNearClient'
import { ref_contractId_for_network } from './ref/ref_const'
import { get_number_of_pools_function_const, get_pool_function_const } from './ref/ref_functions'
// ===================================
console.log("============================")
console.log("THIS IS TO TEST THE RIGHT STUFF IS BEING USED FOR NETWORK")
console.log(localStorage.getItem(NETWORK_STORAGE_KEY))
ref_contractId_for_network()
console.log(await get_number_of_pools_function_const())
console.log(await get_pool_function_const(5767))
console.log("============================")