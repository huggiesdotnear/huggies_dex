<!-- ============================== -->
<!-- script -->
<script lang="ts">
  import { get_and_put_pool_info } from "../ts/get_and_put_pool_info";
  let pool_id: string;

  async function handleFetch() {
    await get_and_put_pool_info(pool_id);
    location.reload();
  }
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- COMPONENT_POOLS_GET_AND_PUT_POOL_INFO -->
<div>
  <p></p>
  <p>
    (note ref is permissionless, meaning any one can create new pools)
    <br />
    (dyor before fetching any pool and trading)
  </p>
  <p>fetch a pool</p>
  <div><input type="number" bind:value={pool_id} /></div>
  <button on:click={handleFetch}>fetch</button>
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
