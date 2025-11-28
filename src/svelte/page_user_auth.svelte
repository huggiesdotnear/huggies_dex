<!-- USER AUTH PAGE -->
<!-- USER_AUTH_PAGE -->
<section>
    <!-- <h1>USER AUTH</h1> -->
    <!--  -->
    <AUTH_BUTTON/>
    <NETWORK_BUTTON/>
    (IF NOT AUTO REDIRECTED AFTER LOGIN)
    <a href={ROUTES.user_route}><button>GO TO PROFILE</button></a>
</section>
<!--  -->
<!-- =========================================== -->
<script lang="ts">
  import NETWORK_BUTTON from './components/button_network_toggle.svelte'
  import AUTH_BUTTON from './components/button_auth.svelte'
  import { onMount } from 'svelte';
  import { nearClient } from "../ts/fastintear/createNearClient";
  import { navigate, ROUTES } from "../ts/routes";

  onMount(async () => {
    // Continuously check if user is signed in and redirect to user page if they are
    const status = nearClient().authStatus();
    const isSignedIn = status === "SignedIn";

    if (isSignedIn) {
      const accountId = nearClient().accountId();
      if (accountId) {
        // Add a small delay to ensure the UI updates before redirecting
        setTimeout(() => {
          navigate(ROUTES.user.replace(':account_id', accountId));
        }, 500);
      }
    }
  });
</script>