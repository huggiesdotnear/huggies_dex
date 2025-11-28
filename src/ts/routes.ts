import { createRouter } from 'sv-router';

// PAGES
// import HOME_PAGE from '../svelte/page_home.svelte';
import SWAP_PAGE from '../svelte/page_swap.svelte';
import POOLS_PAGE from '../svelte/page_pools.svelte';
import POOL_PAGE from '../svelte/page_pool.svelte';
import USER_PAGE from '../svelte/page_user.svelte';
import USER_ROUTE_PAGE from '../svelte/page_user_route.svelte';
import USER_AUTH_PAGE from '../svelte/page_user_auth.svelte';
import NAV_PAGE from '../svelte/page_nav.svelte';
import ABOUT_PAGE from '../svelte/page_about.svelte';
import BURN_PAGE from '../svelte/page_burn.svelte';
import FEED_PAGE from '../svelte/page_feed.svelte';

// ===============================================
//
export const ROUTES = {
  home: "/",
  all: "*",
  swap: "/swap",
  nav: "/nav",
  user: "/user/:account_id",
  user_route: "/user/route",
  user_auth: "/user/auth",
  pools: "/pools",
  pool: "/pool/:pool_id",
  about: "/about",
  burn: "/burn",
  feed: "/feed",
}

export const { p, navigate, isActive, route } = createRouter({
  [ROUTES.home]: SWAP_PAGE,
  [ROUTES.all]: SWAP_PAGE,
  [ROUTES.swap]: SWAP_PAGE,
  [ROUTES.pools]: POOLS_PAGE,
  [ROUTES.pool]: POOL_PAGE,
  [ROUTES.user]: USER_PAGE,
  [ROUTES.user_route]: USER_ROUTE_PAGE,
	[ROUTES.user_auth]: USER_AUTH_PAGE,
	[ROUTES.nav]: NAV_PAGE,
	[ROUTES.about]: ABOUT_PAGE,
	[ROUTES.burn]: BURN_PAGE,
  [ROUTES.feed]: FEED_PAGE,
});