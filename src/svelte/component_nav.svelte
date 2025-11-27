<nav>
    <a href={ROUTES.home}><House/></a>
    <a href={ROUTES.nav}><LayoutGrid/></a>
    <a href={ROUTES.profile}><User/></a>
</nav>

<script lang="ts">
  // ROUTES
  import { ROUTES } from "../ts/routes";
  
  // ICONS
  import { House, LayoutGrid, User } from '@lucide/svelte';
</script>