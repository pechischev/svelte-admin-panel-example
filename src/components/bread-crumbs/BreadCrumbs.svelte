<script>
    import { pop } from 'svelte-spa-router';
    import ArrowLeft from "../icons/ArrowLeft.svelte";

    export let path;

    function redirect() {
        pop();
    }
</script>

<style lang="scss">
    .bread-crumbs {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 35px 0;
    }

    .bread-crumbs div {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .bread-crumbs p {
        font: 400 18px/22px "Roboto", sans-serif;
        color: var(--txt_content);
        margin-left: 20px;
    }
</style>

<div class="bread-crumbs">
    <div on:click={redirect}>
        <ArrowLeft />
        <p>{path}</p>
    </div>

  <slot></slot>
</div>