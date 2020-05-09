<script>
  import {BreadCrumbs} from "../../../components/bread-crumbs";
  import {BlockTitle} from "../../../components/block-title";
  import {Basket, Lock, OutlineStar} from "../../../components/icons";
  import {Label} from "../../../components/label";
  import {FeedbackItem} from "./feedback-item";
  import {ShopForm} from "../parts";
  import {CompanyService} from "../../../services";
  import {shops as shopsStore} from '../../../logics/store/shops';

  export let params = {};

  const shopId = JSON.parse(params.id);
  const shop = shopsStore.getShop(shopId) || {};

  function onEdit(event) {
    CompanyService.updateShop(event.detail);
  }

  function onRemoveShop() {
    CompanyService.removeShop(shopId)
  }

</script>

<style type="text/scss">
  .rate {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .rate p {
    font: 400 18px/22px "Roboto", sans-serif;
    color: var(--txt_content);
    margin-left: 16px;
  }

  .feedback {
    display: flex;
    margin-top: 8px;
  }
</style>

<BreadCrumbs path={shop.name}>
  <div>
    <Lock />
    <span on:click={() => onRemoveShop()}>
    <Basket />
    </span>

  </div>
</BreadCrumbs>

<BlockTitle text="Рейтинг покупателей"/>

{#if !shop.feedbacks}
  <div class="rate">
    <OutlineStar/>
    <p>Пользователи пока не оценивали ваш магазин</p>
  </div>
{/if}

{#if shop.feedbacks}
  <Label text="Отзывы"/>
  <div class="feedback">
    {#each shop.feedbacks as item}
      <FeedbackItem item={item}/>
    {/each}
  </div>
{/if}

<ShopForm on:onSave={onEdit} shop={shop}/>