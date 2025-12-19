<!-- NAV_TAB_COMPONENT -->
<!-- nav -->
<nav>
    <a href={ROUTES.home}>SWAP</a>
    <a href={ROUTES.pools}>POOLS</a>
    <a href={ROUTES.about}>ABOUT</a>
</nav>
<!--  -->
<!-- =========================================== -->
<!-- style -->
<style>
    nav {
        display: inline-flex;
        text-align: center;
        /*justify-content: space-around;*/
        align-items: center;
        /*background: white;*/
        /*border-top: 1px solid black;*/
        padding: 8px 0;
        margin-top: 20px;
        z-index: 1000;
    }
    nav a {
        color: var(--lit_color_one);
        margin-left: 30px;
        margin-right: 30px;
    }
    nav a:hover {
        color: var(--lit_color_two);
    }
</style>
<!-- ============================== -->
<!-- script -->
<script lang="ts">
    // ROUTES
    import { ROUTES } from "../../ts/routes";
</script>
