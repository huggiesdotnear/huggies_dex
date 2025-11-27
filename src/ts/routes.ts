import { createRouter } from 'sv-router';
import HOME_PAGE from '../svelte/page_home.svelte';
import NAV_PAGE from '../svelte/page_nav.svelte';

export const { p, navigate, isActive, route } = createRouter({
	'/': HOME_PAGE,
	'/nav': NAV_PAGE,
});