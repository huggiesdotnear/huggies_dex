<!--  -->
<script lang="ts">
  import { onMount } from "svelte";
  import { ROUTES } from "../ts/routes";
  import { number_of_pools } from "./ts/pools_page_pool_count";
  import { ref_contractId_for_network } from "../ts/ref/ref_const";
  import COMPONENT_POOLS_POOL_INFO_CARD from "./components/pools_pool_info_card.svelte";
  import COMPONENT_POOLS_GET_AND_PUT_POOL_INFO from "./components/pools_get_and_put_pool.svelte"
  import { get_all_saved_pools_function } from "../ts/indexer-db/get-pools";
  import type { POOL_RECORD_TYPE } from "../ts/indexer-db/dexie";
  // ===========================================================
  let pools: POOL_RECORD_TYPE[] = [];
  onMount(async () => {
    try {
      pools = await get_all_saved_pools_function();
    } catch (err) {
      console.error("Error fetching pools:", err);
      pools = [];
    }
  });
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- POOLS PAGE -->
<!-- POOLS_PAGE -->
<section>
  <h1>POOLS</h1>
  <p>there are {number_of_pools} on {ref_contractId_for_network()}</p>
  <!--  -->
  <!--  -->
  <COMPONENT_POOLS_GET_AND_PUT_POOL_INFO/>
  <!--  -->
  <!--  -->
  <div class="pools-container">
    {#each pools as pool}
      <COMPONENT_POOLS_POOL_INFO_CARD {pool} />
    {/each}
  </div>
  <!--  -->
  <!--  -->
  <p></p>
  <a href={ROUTES.add_pool}><button>CREATE NEW POOL</button></a>
  <p></p>
  <!--  -->
</section>

