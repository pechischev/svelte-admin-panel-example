<script>
  import {push} from 'svelte-spa-router';
  import { DefaultLogo, Star } from "../../../components/icons";
  import ShopCard from "./ShopCard.svelte"
  import {getAddress} from '../../../helpers/address';

  export let shop = {};
</script>

<ShopCard on:redirect={() => push("/shops/" + shop.id)}>
  <div class="shop-info">
    <DefaultLogo />
    <p class="shop-info__title">{shop.name}</p>
    <p class="shop-info__address">{getAddress(shop.address)}</p>

    {#if shop.rate}
      <div class="shop-info__rate rate">
        <Star />
        <p class="rate__number">{shop.rate || 0}</p>
        <p class="rate__text">рейтинг</p>
      </div>
    {/if}
    {#if shop.category}
      <p class="shop-info__category">{shop.category}</p>
    {/if}
  </div>
</ShopCard>

<style type="text/scss">
  .shop-info {
    position: relative;
    height: 100%;
    padding: 16px;
  }

  .shop-info__title {
    font: 700 20px/24px "Roboto", sans-serif;
    color: var(--txt_content);
    margin-top: 8px;
  }

  .shop-info__address {
    font: 400 16px/20px "Roboto", sans-serif;
    color: var(--txt_content);
    margin-top: 4px;
  }

  .shop-info__rate {
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

  .shop-info__category {
    position: absolute;
    right: 16px;
    bottom: 16px;
    text-align: right;
    font: 400 12px/14px "Roboto", sans-serif;
    color: var(--txt_content);
  }
</style>