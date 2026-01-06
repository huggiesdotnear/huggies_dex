<!--  -->
<!--  -->
<script lang="ts">
  // import type { REF_GET_POOL_TYPE } from "../../ts/ref/ref_types";
  // ===========================================
  let {
    pool_id,
    pool_kind,
    token_account_ids,
    amounts,
    total_fee,
    shares_total_supply,
  } = $props();
  // ==========================================
  // Function to format fee percentage
  function formatFee(fee: number): string {
    return (fee / 100).toFixed(2) + "%";
  }
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- COMPONENT_SWAP_POOL_INFO_CARD -->
<div>
  <p>POOL ID: {pool_id} :: KIND: {pool_kind}</p>
  <p>TOKENS:</p>
  <p>{token_account_ids?.[0]}</p>
  <p>{amounts?.[0]}</p>
  <p>{token_account_ids?.[1]}</p>
  <p>{amounts?.[1]}</p>
  <p>FEE: {formatFee(total_fee)} :: SHARES: {shares_total_supply}</p>
  <!-- <p>{amp}</p> -->
</div>

<!--  -->
<!-- =========================================== -->
<!--  -->

<style>
  div {
    background-color: white;
    /*border-radius: 8px;*/
    color: var(--drk_color_one);
    width: 500px;
    max-width: 90vw;
    text-align: left;
    padding: 5px;
    line-break: anywhere;
    font-size: 10px;
    box-sizing: border-box;
  }
</style>
