<!-- USER PAGE -->
<!-- USER_PAGE -->
<section>
    <h1>TRADER: {accountId}</h1>
</section>
<!--  -->
<!-- =========================================== -->
<script lang="ts">
    import { route } from "../ts/routes";

    // Get the account ID from route parameters
    let accountId = $state<string>('');

    $effect(() => {
        accountId = (route.params as Record<string, string>)['account_id'] || '';
    });
</script>