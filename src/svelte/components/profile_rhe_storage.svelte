<script lang="ts">
  import { ref_storage_deposit_function } from "../../ts/ref/ref_functions";
  // =====================================================================
  let deposit = "10000000000000000000000";
  async function minium_deposit() {
    await ref_storage_deposit_function(deposit);
  }
</script>

<!--  -->
<!--  -->

<!-- COMPONENT_RHEA_STORAGE -->
<div>
  <h4>RHEA STORAGE</h4>
  <p>(click to make storgae deposit tx)</p>
  <button on:click={minium_deposit}>STORAGE DEPOSIT</button>
</div>

<!--  -->
<!--  -->

<style>
  div {
    width: 500px;
    max-width: 90vw;
    background: white;
    color: #474747;
    padding: 20px;
    box-sizing: border-box;
  }
  button {
    box-sizing: border-box;
    width: 100%;
  }
</style>
