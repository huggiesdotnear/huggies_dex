import { createRouter } from 'sv-router';
import SWAP_PAGE from '../svelte/page_home.svelte';
import NAV_PAGE from '../svelte/page_nav.svelte';
import PROFILE_PAGE from '../svelte/page_user.svelte';

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
	[ROUTES.profile]: PROFILE_PAGE,
  [ROUTES.nav]: NAV_PAGE,
});