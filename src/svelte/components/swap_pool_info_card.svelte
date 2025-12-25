<!-- COMPONENT_SWAP_POOL_INFO_CARD -->
<div>
    <p>{pool_kind}</p>
    <p>{token_account_ids}</p>
    <p>{amounts}</p>
</div>
<!--  -->
<!--  -->
<script lang="ts">
    import type { REF_GET_POOL_TYPE } from "../../ts/ref/ref_types";
    // ===========================================
    let { pool_kind, token_account_ids, amounts  }: REF_GET_POOL_TYPE = $props();
</script>