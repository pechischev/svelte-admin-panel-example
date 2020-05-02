<script>
  import {push} from 'svelte-spa-router';
  import { Plus } from "../../../components/icons";
  import ShopCard from "./ShopCard.svelte"
</script>

<style type="text/scss">
  .empty-card {
    display: flex;
    height: 100%;
    padding: 16px;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 2px dashed var(--dis_grey);
    border-radius: 8px;
  }

  .empty-card__title {
    font: 500 24px/28px "Roboto", sans-serif;
    color: var(--dis_grey);
    text-align: center;
    margin-top: 10px;
  }
</style>

<ShopCard on:redirect={() => push("/shops/create")}>
  <div class="empty-card">
    <Plus />
    <p class="empty-card__title">Добавить новый магазин</p>
  </div>
</ShopCard>