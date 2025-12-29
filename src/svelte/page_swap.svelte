<!--  -->
<!-- =========================================== -->
<!--  -->

<script lang="ts">
  // ===========================================
  // ROUTE PARAMS
  import { route, ROUTES } from "../ts/routes";
  // ===========================================
  import COMPONENT_SWAP_POOL_INFO_CARD from "./components/swap_pool_info_card.svelte";
  import COMPONENT_SWAP_POOL_LINK from "./components/swap_fetch_pool.svelte";
  import { ref_get_pool_function } from "../ts/ref/ref_functions";
  import { put_pool_function } from "../ts/indexer-db/put-pools";
  import { ref_contractId_for_network } from "../ts/ref/ref_const";
  import { number_of_pools } from "./ts/pools_page_pool_count";
  import { LAST_POOL_ID_STORAGE_KEY } from "../ts/app_consts";
  // ===========================================
  // primitives
  let pool_kind = $state<string>("");
  let total_fee = $state<number>(0);
  let shares_total_supply = $state<string>("");
  let amp = $state<number>(0);
  let token_account_ids = $state<string[]>([]);
  let amounts = $state<string[]>([]);
  // ===========================================
  // ===========================================
  // Keep route param reactive
  let raw_route_pool_id = $state<string>(
    (route.params as Record<string, string>)["pool_id"] ?? "",
  );
  // Derive parsed id reactively when raw id changes
  let parsed_route_pool_id = $state<number>(NaN);
  $effect(() => {
    const n = Number(raw_route_pool_id);
    parsed_route_pool_id = Number.isFinite(n) ? n : NaN;
  });
  // ===========================================
  // Persist last pool_id whenever it changes
  $effect(() => {
    if (raw_route_pool_id) {
      // localStorage requires strings
      localStorage.setItem(LAST_POOL_ID_STORAGE_KEY(), raw_route_pool_id);
      console.log(LAST_POOL_ID_STORAGE_KEY(), "saved", raw_route_pool_id);
    }
  });
  // ===========================================
  // Fetch and populate pool info whenever parsed id changes
  $effect(() => {
    async function run() {
      if (!Number.isFinite(parsed_route_pool_id)) {
        console.warn("Invalid pool_id:", raw_route_pool_id);
        // Reset state on invalid id
        pool_kind = "";
        token_account_ids = [];
        amounts = [];
        total_fee = 0;
        shares_total_supply = "";
        amp = 0;
        return;
      }

      try {
        const pool_info = await ref_get_pool_function(parsed_route_pool_id);

        // Assign primitives
        pool_kind = pool_info.pool_kind ?? "";
        total_fee = pool_info.total_fee ?? 0;
        shares_total_supply = pool_info.shares_total_supply ?? "";
        amp = pool_info.amp ?? 0;

        // Arrays: assign, they are proxied by $state
        token_account_ids = Array.isArray(pool_info.token_account_ids)
          ? pool_info.token_account_ids
          : [];
        amounts = Array.isArray(pool_info.amounts) ? pool_info.amounts : [];

        // If external consumers shouldn't receive proxies, snapshot before passing
        put_pool_function(
          raw_route_pool_id,
          pool_kind,
          $state.snapshot(token_account_ids),
          $state.snapshot(amounts),
          total_fee,
          shares_total_supply,
          amp,
        );
      } catch (err) {
        console.error("Failed to fetch pool info:", err);
        // Optional: reset state or show an error UI state
      }
    }
    run();
  });
  // ===========================================
  // Optional: react to route changes (if your route object updates in-place)
  // If route.params["pool_id"] can change, update raw_route_pool_id reactively:
  $effect(() => {
    const poolId = (route.params as Record<string, string>)["pool_id"];
    if (poolId && poolId !== raw_route_pool_id) {
      raw_route_pool_id = poolId;
    }
  });
  // ===========================================
  // ===========================================
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
  <COMPONENT_SWAP_POOL_LINK />
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
