<script lang="ts">
  let { ref_user_deposites } = $props();
</script>

<!--  -->
<!--  -->

<!-- COMPONENT_TRADER_DEPOSITS -->
<div>
  <h4>RHEA(REF) INNER BALANCE:</h4>
  <div class="codeblock_div"><pre><code>{JSON.stringify(ref_user_deposites, null, 2)}</code></pre></div>
</div>

<!--  -->
<!--  -->

<style>
  div {
    text-align: left;
    width: 500px;
    max-width: 90vw;
    overflow-x: auto; /* enables horizontal scroll if needed */
    font-size: 0.8rem; /* smaller text */
    margin-bottom: 20px;
    margin-top: 0px;
  }
  .codeblock_div {
      background-color: white;
  }
  pre,
  code {
    white-space: pre-wrap; /* wraps long lines */
    word-break: break-word; /* breaks long tokens */
    /*font-family: monospace;*/
    font-size: inherit;
    /*background-color: white;*/
    color: #474747;
    padding: 1em;
    border-radius: 6px;
  }
</style>
