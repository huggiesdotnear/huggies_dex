<script lang="ts">
  import {
    // ft_balance_of_function,
    ft_transfer_call_function,
  } from "../../ts/ft/ft_functions";
  import { ref_contractId_for_network } from "../../ts/ref/ref_const";
  // import { get_nearClient_accountId } from "../../ts/fastintear/accountId";
  import { DEFAULT_TOKEN_ID } from "../../ts/app_consts";
  // ================================================================
  let token_id = DEFAULT_TOKEN_ID();
  let amount: string;
  let receiver_id = ref_contractId_for_network();
  let msg = "HUGGIES UI RHEA DEPOSIT"
  
  async function deposit() {
    await ft_transfer_call_function(token_id, msg, amount, receiver_id);
  }
</script>

<!--  -->
<!--  -->

<!-- COMPONENT_TRADER_FT_TRANSFER_DEPOSIT -->
<from>
  <h4>DEPOSIT</h4>
  <p>TOKEN ID:</p>
  <input type="text" bind:value={token_id}/>
  <p>AMOUNT:</p>
  <input type="number" bind:value={amount}/>
  <button type="submit" on:click={deposit}>DEPOSIT</button>
</from>

<!--  -->
<!--  -->

<style>
  from {
    text-align: left;
    width: 500px;
    max-width: 90vw;
    background: white;
    color: #474747;
    padding: 20px;
  }
  input {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      width: 500px;
      max-width: 90vw;
      padding: 2px;
      margin: 0px;
  }
</style>
