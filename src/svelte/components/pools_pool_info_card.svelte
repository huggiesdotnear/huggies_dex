<script lang="ts">
  import { ROUTES } from "../../ts/routes";
  import type { POOL_RECORD_TYPE } from "../../ts/indexer-db/dexie";

  export let pool: POOL_RECORD_TYPE;

  // Function to format fee percentage
  function formatFee(fee: number): string {
    return (fee / 100).toFixed(2) + "%";
  }
</script>

<!-- COMPONENT_POOLS_POOL_INFO_CARD -->
<div class="pool-card">
  <div class="pool-header">
    <h3>POOL #{pool.id}</h3>
    <span class="pool-fee">{formatFee(pool.total_fee)}</span>
  </div>

  <div class="pool-tokens">
    {#each pool.token_account_ids as token}
      <div class="token-item">
        <b class="token-symbol">{token}</b>
      </div>
    {/each}
  </div>
  <a href={ROUTES.swap.replace(":pool_id", pool.id)}><div>TRADE</div></a>
  <!-- <a href={ROUTES.pool.replace(":pool_id", pool.id)}>DETAILS</a> -->
</div>

<style>
  .pool-card {
    border-radius: 8px;
    overflow: hidden;
    background: white;
    color: var(--drk_color_one);
    margin-bottom: 1px;
    margin-top: 1px;
    padding: 0px;
    width: 500px;
    max-width: 90vw;
  }

  .pool-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  .pool-header h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  .pool-fee {
    color: var(--alt_color_two);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .pool-tokens {
    margin: 1rem;
    text-align: left;
    font-size: 15px;
  }
  
  a {
      text-decoration: none;
      color: var(--drk_color_one);
      
  }
  a div {
      background-color: var(--drk_color_one);
      color: white;
      margin: 0px;
      width: 100%;
      padding: 3px;
  }
  a div:hover {
      background-color: white;
      color: var(--drk_color_one);
      border-top: 1px solid var(--drk_color_one);
  }
</style>
