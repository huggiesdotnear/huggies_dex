<!--  -->
<!-- =========================================== -->
<script lang="ts">
  import { route } from "../ts/routes";
  import { ref_get_deposits_function } from "../ts/ref/ref_functions";
  import COMPONENT_TRADER_DEPOSITS from "./components/profile_deposits_component.svelte";

  let accountId = $state("");
  let ref_user_deposites = $state({});

  // Update accountId whenever route params change
  $effect(() => {
    const params = route.params as { account_id?: string };
    accountId = params.account_id || "";
  });

  // Load deposits whenever accountId becomes valid
  $effect(() => {
    if (!accountId) return;

    (async () => {
      const data = await ref_get_deposits_function(accountId);
      ref_user_deposites = data;
      console.log("raw:", structuredClone(data)); // clean log
    })();
  });
</script>

<!--  -->
<!-- =========================================== -->
<!--  -->

<!-- USER PAGE -->
<!-- USER_PAGE -->
<section>
  <h1>TRADER: {accountId}</h1>
  <COMPONENT_TRADER_DEPOSITS {ref_user_deposites} />
</section>
