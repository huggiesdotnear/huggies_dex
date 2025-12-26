<!--  -->
<script lang="ts">
  import NETWORK_BUTTON from "./button_network_toggle.svelte";
  import AUTH_BUTTON from "./button_auth.svelte";
  import { ROUTES } from "../../ts/routes";
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- FOOTER_COMPONENT -->
<!-- footer -->
<footer>
  <!--  -->
  <AUTH_BUTTON />
  <NETWORK_BUTTON />
  <a href={ROUTES.user_route}><button>PROFILE</button></a>
  <!--  -->
  <p>COPYRIGHT 2025 BY HUGGIES.NEAR</p>
</footer>

<!--  -->
<style>
  footer {
    margin-bottom: 70px;
    font-size: 10px;
    display: inline-flex;
    flex-direction: column;
  }
</style>
