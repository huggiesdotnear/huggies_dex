<script lang="ts">
  import { ROUTES, navigate } from "../../ts/routes";
  import type { POOL_RECORD_TYPE } from "../../ts/indexer-db/dexie";

  export let pool: POOL_RECORD_TYPE;

  // Function to format fee percentage
  function formatFee(fee: number): string {
    return (fee / 100).toFixed(2) + '%';
  }

  // Navigate to swap page for this pool
  function goToSwap() {
    navigate(ROUTES.swap.replace(':pool_id', pool.id));
  }
</script>

<!-- COMPONENT_POOLS_POOL_INFO_CARD -->
<div class="pool-card">
  <div class="pool-header">
    <h3>Pool #{pool.id}</h3>
    <span class="pool-kind">{pool.pool_kind}</span>
  </div>

  <div class="pool-tokens">
    {#each pool.token_account_ids as token, i}
      <div class="token-item">
        <span class="token-symbol">{token}</span>
        <span class="token-amount">{pool.amounts[i]}</span>
      </div>
    {/each}
  </div>

  <div class="pool-details">
    <div class="pool-detail-item">
      <span class="detail-label">Fee:</span>
      <span class="detail-value">{formatFee(pool.total_fee)}</span>
    </div>
    <div class="pool-detail-item">
      <span class="detail-label">Liquidity:</span>
      <span class="detail-value">{pool.shares_total_supply}</span>
    </div>
  </div>

  <button class="swap-button" on:click={goToSwap}>Swap</button>
</div>

<style>
  .pool-card {
    /*border: 1px solid #e0e0e0;*/
    border-radius: 8px;
    overflow: hidden;
    background: white;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  .pool-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  .pool-header h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  .pool-kind {
    background-color: #e3f2fd;
    color: #1976d2;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .pool-tokens {
    margin-bottom: 1rem;
  }

  .token-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .token-item:last-child {
    margin-bottom: 0;
  }

  .token-symbol {
    font-weight: 600;
    color: #333;
  }

  .token-amount {
    color: #666;
  }

  .pool-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .pool-detail-item {
    display: flex;
    flex-direction: column;
  }

  .detail-label {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 0.25rem;
  }

  .detail-value {
    font-weight: 600;
    color: #333;
  }

  .swap-button {
    background-color: #1976d2;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-weight: 600;
  }

  .swap-button:hover {
    background-color: #1565c0;
  }
</style>