<!-- NETWORK_BUTTON -->
<button>
    {NETWORK_ID}
</button>

<!--  -->
<!-- =========================================== -->
<script lang="ts">
  import { nearClient, near_testnetClient, near_mainnetClient } from "../../ts/fastintear/createNearClient";
  
  let NETWORK_ID = "MAINNET"
  const STORAGE_KEY = "network_id"
  localStorage.setItem(STORAGE_KEY, NETWORK_ID)

</script>