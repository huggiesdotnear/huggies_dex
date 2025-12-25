<!-- POOLS PAGE -->
<!-- POOLS_PAGE -->
<section>
    <h1>POOLS</h1>
    <p>there are {number_of_pools} on {ref_contractId_for_network()}</p>
    <!--  -->
    <a href={ROUTES.add_pool}><button>CREATE NEW POOL</button></a>
    <p></p>
</section>
<!--  -->
<script lang="ts">
    import { ROUTES } from "../ts/routes";
    import { number_of_pools } from "./ts/pools_page_pool_count";
    import { ref_contractId_for_network } from "../ts/ref/ref_const";
</script>