<main>
    <Router />
    <FOOTER_COMPONENT/>
    <NAV_COMPONENT/>
</main>


<script lang="ts">
    // ROUTER
	import { Router } from 'sv-router';
	import './ts/routes';
	
	import NAV_COMPONENT from './svelte/components/nav.svelte';
	import FOOTER_COMPONENT from './svelte/components/footer.svelte';
</script>

