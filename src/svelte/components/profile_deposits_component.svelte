<script lang="ts">
  let { ref_user_deposites } = $props();

  let sortedDeposits = $derived(
    Object.entries(ref_user_deposites)
      .filter(([, amount]) => Number(amount) > 0) // remove zero balances
      .sort(([, a], [, b]) => Number(b) - Number(a)), // sort high → low
  );
</script>

<!--  -->
<!--  -->

<!-- COMPONENT_TRADER_DEPOSITS -->
<div>
  <h4>RHEA(REF) INNER BALANCE:</h4>
  <!--  -->
  {#each sortedDeposits as [token, amount]}
    <p>{token}: {amount}</p>
  {/each}
  <!--  -->
  <!-- <div class="codeblock_div"><pre><code>{JSON.stringify(ref_user_deposites, null, 2)}</code></pre></div> -->
</div>

<!--  -->
<!--  -->

<style>
  div {
    text-align: left;
    width: 500px;
    max-width: 90vw;
    overflow-x: auto; /* enables horizontal scroll if needed */
    /*font-size: 0.8rem;*/
    margin-bottom: 20px;
    margin-top: 0px;
  }

  /* ========================== */
  /*extra css for code block*/

  /*.codeblock_div {
    background-color: white;
  }
  pre,
  code {
    white-space: pre-wrap;
    word-break: break-word;
    font-size: inherit;
    color: #474747;
    padding: 1em;
    border-radius: 6px;
  }*/
</style>
