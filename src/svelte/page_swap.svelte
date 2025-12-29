<!--  -->
<!-- =========================================== -->
<!--  -->

<script lang="ts">
  // ===========================================
  // ROUTE PARAMS
  import { route, ROUTES } from "../ts/routes";
  const raw_route_pool_id = (route.params as Record<string, string>)["pool_id"];
  const parsed_route_pool_id = Number(raw_route_pool_id);
  console.log("SWAP ROUTE POOL ID:", parsed_route_pool_id);
  // ===========================================
  import COMPONENT_SWAP_POOL_INFO_CARD from "./components/swap_pool_info_card.svelte";
  import COMPONENT_SWAP_POOL_LINK from "./components/swap_fetch_pool.svelte"
  import { ref_get_pool_function } from "../ts/ref/ref_functions";
  import { put_pool_function } from "../ts/indexer-db/put-pools";
  import { ref_contractId_for_network } from "../ts/ref/ref_const";
  import { number_of_pools } from "./ts/pools_page_pool_count";
  import { LAST_POOL_ID_STORAGE_KEY } from "../ts/app_consts";
  // ===========================================
  let pool_kind: string;
  let token_account_ids: string[];
  let amounts: string[];
  let total_fee: number;
  let shares_total_supply: string;
  let amp: number;
  // ===========================================
  async function get_and_put_pool_info() {
    const pool_info = await ref_get_pool_function(parsed_route_pool_id);
    pool_kind = pool_info.pool_kind;
    token_account_ids = pool_info.token_account_ids;
    amounts = pool_info.amounts;
    total_fee = pool_info.total_fee;
    shares_total_supply = pool_info.shares_total_supply;
    amp = pool_info.amp;

    put_pool_function(
      raw_route_pool_id,
      pool_kind,
      token_account_ids,
      amounts,
      total_fee,
      shares_total_supply,
      amp,
    );
  }
  get_and_put_pool_info();
  // ===========================================
  function set_last_pool_id() {
    localStorage.setItem(LAST_POOL_ID_STORAGE_KEY(), raw_route_pool_id)
    console.log(LAST_POOL_ID_STORAGE_KEY(), "saved", raw_route_pool_id)
  }
  set_last_pool_id()
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- SWAP PAGE -->
<!-- SWAP_PAGE -->
<section>
  <h1>SWAP</h1>
  <p>there are {number_of_pools} on {ref_contractId_for_network()}</p>
  <!--  -->
  <COMPONENT_SWAP_POOL_LINK/>
  <!--  -->
  <COMPONENT_SWAP_POOL_INFO_CARD
    {pool_kind}
    {token_account_ids}
    {amounts}
    {total_fee}
    {shares_total_supply}
    {amp}
  />
  <!--  -->
  <p></p>
  <a href={ROUTES.add_pool}><button>CREATE NEW POOL</button></a>
  <!--  -->
  <p></p>
</section>
