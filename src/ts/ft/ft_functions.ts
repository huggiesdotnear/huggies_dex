import { nearClient } from "../fastintear/createNearClient";
import { ft_methods_const } from "@sleet-js/ft-methods-const";
// ================================================
interface ft_args_params_interface {
  token_contractId: string
  msg: string;
  amount: string;
  receiver_id: string;
}
// ================================================
// ft_transfer_call_function
export async function ft_transfer_call_function(
  token_contractId: ft_args_params_interface["token_contractId"],
  msg: ft_args_params_interface["msg"],
  amount: ft_args_params_interface["amount"],
  receiver_id: ft_args_params_interface["receiver_id"],
) {
  const result = await nearClient().sendTx({
    receiverId: token_contractId,
    actions: [
      nearClient().actions.functionCall({
        methodName: ft_methods_const.ft_transfer_call,
        args: { msg: msg, amount: amount, receiver_id: receiver_id },
        gas: "30000000000000", // 30 TGas
        deposit: "1",
      }),
    ],
  });
  console.log(result);
  return result;
}
// ================================================
// ================================================
// copyright 2025 by sleet.near