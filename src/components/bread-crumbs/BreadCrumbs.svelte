<script>
    import { pop } from 'svelte-spa-router';
    import ArrowLeft from "../icons/ArrowLeft.svelte";
    import { Basket, Lock } from "../icons";

    export let path;
    export let isEdit = false;

    const props = $$props;

    console.log(props)

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

<div class="bread-crumbs" on:click={redirect}>
    <div>
        <ArrowLeft />
        <p>{path}</p>
    </div>

  {#if isEdit}
      <div>
          <Lock />
          <Basket />
      </div>
  {/if}
</div>