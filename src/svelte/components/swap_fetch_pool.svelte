<script lang="ts">
  import { ROUTES } from "../../ts/routes";
  import { LAST_POOL_ID_STORAGE_KEY } from "../../ts/app_consts";
  let pool_id: string = localStorage.getItem(LAST_POOL_ID_STORAGE_KEY()) ?? ""
</script>

<!--  -->
<!--  -->

<!-- COMPONENT_SWAP_POOL_LINK -->
<div>
  <div><input type="number" bind:value={pool_id} /></div>
  <a href={ROUTES.swap.replace(":pool_id", pool_id)}><button>LOAD</button></a>
</div>

<!--  -->
<!--  -->
<style>
  input {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    width: 500px;
    max-width: 90vw;
    margin: 2px;
    display: inline-block;
    padding: 5px;
  }
</style>