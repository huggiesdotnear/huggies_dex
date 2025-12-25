<!--  -->
<!-- =========================================== -->
<script lang="ts">
  import { ROUTES } from "../ts/routes";
  import NETWORK_BUTTON from "./components/button_network_toggle.svelte";
  import AUTH_BUTTON from "./components/button_auth.svelte";
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- NAV PAGE -->
<!-- NAV_PAGE -->
<section>
  <!-- <h1>NAV</h1> -->
  <!--  -->
  <AUTH_BUTTON />
  <NETWORK_BUTTON />
  <!--  -->
  <h6>PAGES</h6>
  <a href={ROUTES.swap}><button>SWAP</button></a>
  <a href={ROUTES.user_route}><button>PROFILE</button></a>
  <a href={ROUTES.feed}><button>FEED</button></a>
  <a href={ROUTES.burn}><button>BURN</button></a>
  <a href={ROUTES.about}><button>ABOUT</button></a>
</section>
