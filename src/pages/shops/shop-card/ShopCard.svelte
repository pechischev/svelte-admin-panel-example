<script>
    import {push} from 'svelte-spa-router';
    import { DefaultLogo, Logo, Plus, Star } from "../../../components/icons";

    export let item = {};
    export let classNames = "card " + (item.id === "" ? "empty-card" : "shop-card");

    function redirect() {
        if (item.id === "") {
            push("/shops/create");
        } else {
            push("/shops/" + item.id);
        }
    }
</script>

<style type="text/scss">
    .card {
        width: 310px;
        height: 190px;
        padding: 16px;
        margin: 0 24px 24px 0;
        background: var(--white);
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(26, 104, 222, 0.1);
        transition: .25s;
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 0 2px 8px rgba(26, 104, 222, 0.25);
    }

    .empty-card {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        border: 2px dashed var(--dis_grey);
    }

    .empty-card__title {
        font: 500 24px/28px "Roboto", sans-serif;
        color: var(--dis_grey);
        text-align: center;
        margin-top: 10px;
    }

    .shop-card {
      position: relative;
    }

    .shop__title {
        font: 700 20px/24px "Roboto", sans-serif;
        color: var(--txt_content);
        margin-top: 8px;
    }

    .shop__address {
        font: 400 16px/20px "Roboto", sans-serif;
        color: var(--txt_content);
        margin-top: 4px;
    }

    .shop__rate {
        position: absolute;
        left: 16px;
        bottom: 13px;
        height: 24px;
        width: 110px;
        padding: 6px;
        background: #1A68DE;
        border-radius: 4px;
        display: flex;
        align-items: center;
    }

    .rate__number {
        font: 700 12px/14px "Roboto", sans-serif;
        color: var(--white);
        margin: 1px 7px 0 5px;
    }

    .rate__text {
        font: 400 12px/14px "Roboto", sans-serif;
        color: var(--white);
        margin: 1px 0;
    }

    .shop__category {
        position: absolute;
        right: 16px;
        bottom: 16px;
        text-align: right;
        font: 400 12px/14px "Roboto", sans-serif;
        color: var(--txt_content);
    }

</style>

<div class="{classNames}" on:click={() => redirect()}>
  {#if item.id === ""}
      <Plus />
      <p class="empty-card__title">Добавить новый магазин</p>
  {:else}
      <div class="shop">
        {#if item.logo === ""}
            <DefaultLogo />
        {:else}
            <Logo />
        {/if}
          <p class="shop__title">{item.title}</p>
          <p class="shop__address">{item.address}</p>
          <div class="shop__rate">
              <Star />
              <p class="rate__number">{item.rate}</p>
              <p class="rate__text">рейтинг</p>
          </div>
          <p class="shop__category">{item.category}</p>
      </div>
  {/if}
</div>