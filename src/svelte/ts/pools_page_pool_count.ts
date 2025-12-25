// APP CONSTS/FUNCTIONS
import Cookies from 'js-cookie'
import { getStoredNetworkId } from "../../ts/fastintear/createNearClient";
import { ref_get_number_of_pools_function } from "../../ts/ref/ref_functions";
// ===========================================
function NUMBER_OF_POOLS_STORAGE_KEY() {
  const networkId = getStoredNetworkId();
  const POOL_ID_STORAGE_KEY: string = networkId === "testnet" ? "testnet_number_of_pools" : "mainnet_number_of_pools";
  return POOL_ID_STORAGE_KEY as string;
};
//
//
export async function APP_GET_NUMBER_OF_POOLS(): Promise<string> {
  const cachedValue = Cookies.get(NUMBER_OF_POOLS_STORAGE_KEY());
  if (cachedValue) {
    return cachedValue;
  }
  try {
    const number_of_pools = await ref_get_number_of_pools_function();
    const valueAsString = String(number_of_pools);
    Cookies.set(NUMBER_OF_POOLS_STORAGE_KEY(), valueAsString, { expires: 1 });
    return valueAsString;
  } catch (error) {
    console.error("Error fetching number of pools:", error);
    throw error;
  }
}