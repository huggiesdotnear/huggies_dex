// this file is to test that the variables are right i wrote for fun.
import { NETWORK_STORAGE_KEY } from './fastintear/createNearClient'
import { ref_contractId_for_network } from './ref/ref_const'
import { ref_get_number_of_pools_function, ref_get_pool_function } from './ref/ref_functions'
// ===================================
console.log("============================")
console.log("THIS IS TO TEST THE RIGHT STUFF IS BEING USED FOR NETWORK")
console.log(localStorage.getItem(NETWORK_STORAGE_KEY))
ref_contractId_for_network()
console.log(await ref_get_number_of_pools_function())
console.log(await ref_get_pool_function(5767))
console.log("============================")