<!-- ADD POOL PAGE -->
<!-- ADD_POOL_PAGE -->
<section>
    <h1>ADD SIMPLE POOL</h1>
    <p>(create a new simple pool)</p>
    <!--  -->
    <from>
        <p>FEE</p>
        <div class="fee-buttons">
            <button on:click={() => (fee = 0)}>0%</button>
            <button on:click={() => (fee = 25)}>0.25%</button>
            <button on:click={() => (fee = 50)}>0.50%</button>
            <button on:click={() => (fee = 75)}>0.57%</button>
            <button on:click={() => (fee = 100)}>1%</button>
        </div>
        <input type="number" bind:value={fee} required />
        <p>TOKENS</p>
        <input
            type="text"
            bind:value={tokens[0]}
            placeholder="shit-1170.meme-cooking.near"
            required
        />
        <input
            type="text"
            bind:value={tokens[1]}
            placeholder="wrap.near"
            required
        />
        <button type="submit" on:click={create}>CREATE</button>
    </from>
    <!--  -->
    <p></p>
</section>
<!--  -->
<!-- =========================================== -->
<!--  -->
<script lang="ts">
    import { ref_add_simple_pool_function } from "../ts/ref/ref_functions";
    let fee: number = 0;
    let tokens: string[] = ["", ""];
    
    async function create() {
      await ref_add_simple_pool_function(fee, tokens)
    }
</script>
<!--  -->
<!-- =========================================== -->
<!--  -->
<style>
    input {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        width: 500px;
        max-width: 90vw;
        margin: 2px;
        display: flex;
        padding: 5px;
    }
    p {
        text-align: left;
    }

    /* Style the container for decimal buttons to take full width */
    .fee-buttons {
        display: flex;
        width: 500px;
        max-width: 90vw;
        overflow: hidden;
    }

    /* Style the decimal buttons */
    .fee-buttons button {
        flex: 1;
        cursor: pointer;
    }
</style>
