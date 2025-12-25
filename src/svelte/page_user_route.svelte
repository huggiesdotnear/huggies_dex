<!--  -->
<!-- =========================================== -->
<script lang="ts">
  import { onMount } from "svelte";
  import { nearClient } from "../ts/fastintear/createNearClient";
  import { navigate, ROUTES } from "../ts/routes";

  onMount(async () => {
    const status = nearClient().authStatus();
    const isSignedIn = status === "SignedIn";

    if (isSignedIn) {
      const accountId = nearClient().accountId();
      if (accountId) {
        navigate(ROUTES.trader.replace(":account_id", accountId));
      } else {
        navigate(ROUTES.user_auth);
      }
    } else {
      navigate(ROUTES.user_auth);
    }
  });
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- USER ROUTE PAGE -->
<!-- USER_ROUTE_PAGE -->
<section>
  <!-- <h1>USER</h1> -->
  <!-- <p>Redirecting...</p> -->
</section>
