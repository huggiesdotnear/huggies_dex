<!-- SWAP PAGE -->
<!-- SWAP_PAGE -->
<section>
    <h1>SWAP</h1>
    <COMPONENT_SWAP_POOL_INFO_CARD pool_kind={pool_kind} token_account_ids={token_account_ids} amounts={amounts}/>
    <p></p>
</section>
<!--  -->
<!-- =========================================== -->
<script lang="ts">
    // ===========================================
    // ROUTE PARAMS
    import { route } from "../ts/routes";
    const raw_route_pool_id = (route.params as Record<string, string>)["pool_id"];
    const parsed_route_pool_id = Number(raw_route_pool_id);
    console.log("SWAP ROUTE POOL ID:", parsed_route_pool_id)
    // ===========================================
    import COMPONENT_SWAP_POOL_INFO_CARD from './components/swap_pool_info_card.svelte'
    import { ref_get_pool_function } from "../ts/ref/ref_functions";
    //
    let pool_kind: string;
    let token_account_ids: string[];
    let amounts: string[]
    // 
    async function update_pool_info() {
      const pool_info = await ref_get_pool_function(parsed_route_pool_id)
      pool_kind = pool_info.pool_kind
      token_account_ids = pool_info.token_account_ids
      amounts = pool_info.amounts
    }
    update_pool_info()
</script>