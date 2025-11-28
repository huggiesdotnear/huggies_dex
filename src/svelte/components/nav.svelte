<!-- NAV_COMPONENT -->
<!-- nav -->
<nav>
    <a href={ROUTES.swap}><House /></a>
    <a href={ROUTES.feed}><Newspaper /></a>
    <a href={ROUTES.user}><User /></a>
    <a href={ROUTES.nav}><LayoutGrid /></a>
</nav>
<!--  -->
<!-- =========================================== -->
<!-- style -->
<style>
    nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: white;
        /*border-top: 1px solid black;*/
        padding: 8px 0;
        z-index: 1000;
    }
    nav a {
        color: var(--drk_color_one);
    }
    nav a:hover {
        color: var(--alt_color_two);
    }
</style>

<!-- script -->
<script lang="ts">
    // ROUTES
    import { ROUTES } from "../../ts/routes";

    // ICONS
    import { House, LayoutGrid, User, Newspaper } from "@lucide/svelte";
</script>