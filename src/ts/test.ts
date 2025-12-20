// this file is to test that the variables are right i wrote for fun.
import { NETWORK_STORAGE_KEY } from './localStorage'
import { ref_contractId_for_network } from './ref/ref_const'
// ===================================
console.log("============================")
console.log("THIS IS TO TEST THE RIGHT STUFF IS BEING USED FOR NETWORK")
console.log(localStorage.getItem(NETWORK_STORAGE_KEY))
ref_contractId_for_network()
console.log("============================")