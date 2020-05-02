<script>
  import {BlockTitle} from "../../components/block-title";
  import {AddShopCard, InfoShopCard} from "./parts";

  const shops = [
    {
      id: '1',
      title: "ВкусноМир",
      address: "ул. Покупаечная, дом 200",
      rate: "4.8",
      category: "Продукты питания"
    },
    {
      id: '2',
      title: "ВкусноМир",
      address: "ул. Покупаечная, дом 200",
      rate: "4.8",
      category: "Продукты питания"
    },
  ];
</script>

<style type="text/scss">
  .cards {
    display: flex;
  }
</style>

<BlockTitle text="Список магазинов участников"/>

<div class="cards">
  <AddShopCard />
  {#each shops as item}
    <InfoShopCard item={item}/>
  {/each}
</div>