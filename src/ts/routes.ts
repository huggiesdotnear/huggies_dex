import { createRouter } from 'sv-router';

// PAGES
import SWAP_PAGE from '../svelte/page_home.svelte';
import POOLS_PAGE from '../svelte/page_pools.svelte';
import POOL_PAGE from '../svelte/page_pool.svelte';
import PROFILE_PAGE from '../svelte/page_user.svelte';
import NAV_PAGE from '../svelte/page_nav.svelte';
import ABOUT_PAGE from '../svelte/page_about.svelte';
import BURN_PAGE from '../svelte/page_burn.svelte';

// ===============================================
//
export const ROUTES = {
  home: "/",
  all: "*",
  swap: "/swap",
  nav: "/nav",
  profile: "/profile/:account_id",
  pools: "/pools",
  pool: "/pool/:pool_id",
  burn: "/burn",
  about: "/about",
}

export const { p, navigate, isActive, route } = createRouter({
  [ROUTES.home]: SWAP_PAGE,
  [ROUTES.all]: SWAP_PAGE,
  [ROUTES.swap]: SWAP_PAGE,
  [ROUTES.pools]: POOLS_PAGE,
  [ROUTES.pool]: POOL_PAGE,
	[ROUTES.profile]: PROFILE_PAGE,
	[ROUTES.nav]: NAV_PAGE,
	[ROUTES.about]: ABOUT_PAGE,
  [ROUTES.burn]: BURN_PAGE,
});