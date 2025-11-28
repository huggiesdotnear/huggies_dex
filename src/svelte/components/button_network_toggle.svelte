<!-- NETWORK_BUTTON -->
<button on:click={toggleNetwork}>
    {NETWORK_ID.toUpperCase()}
</button>

<!--  -->
<!-- =========================================== -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { setNetwork } from "../../ts/fastintear/createNearClient";

  let NETWORK_ID: string = "mainnet";

  onMount(() => {
    // Initialize network ID from localStorage
    const savedNetwork = localStorage.getItem("network_id") || "mainnet";
    NETWORK_ID = savedNetwork;
  });

  function toggleNetwork() {
    const newNetwork = NETWORK_ID === "mainnet" ? "testnet" : "mainnet";
    NETWORK_ID = newNetwork;
    setNetwork(newNetwork);
  }
</script>