import { createRouter } from 'sv-router';
import HOME_PAGE from '../svelte/page_home.svelte';
import NAV_PAGE from '../svelte/page_nav.svelte';

// ===============================================
//
export const ROUTES = {
  home: "/",
  nav: "/nav"
}

export const { p, navigate, isActive, route } = createRouter({
  [ROUTES.home]: HOME_PAGE,
	[ROUTES.nav]: NAV_PAGE,
});