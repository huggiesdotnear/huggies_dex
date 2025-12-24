<!-- HOME PAGE -->
<!-- HOME_PAGE -->
<section>
    <!-- <h1>HOME</h1> -->
</section>
<!--  -->
<!-- =========================================== -->
<!--  -->
<script lang="ts">
    import { onMount } from "svelte";
    import { DEFAULT_POOL_ID, LAST_POOL_ID_STORAGE_KEY } from "../ts/app_consts";
    import { navigate, ROUTES } from "../ts/routes";
    //
    onMount(async () => {
      const app_get_last_pool = localStorage.getItem(LAST_POOL_ID_STORAGE_KEY())
      const app_current_pool = app_get_last_pool === null ? DEFAULT_POOL_ID() : app_get_last_pool;
      navigate(ROUTES.swap.replace(':pool_id', app_current_pool));
    });
</script>