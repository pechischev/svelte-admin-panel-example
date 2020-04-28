<script>
    import { BlockTitle } from "../../components/block-title";
    import { ShopCard } from "./shop-card";

    const shops = [
        {
            id: ''
        },
        {
            id: '1',
            logo: "",
            title: "ВкусноМир",
            address: "ул. Покупаечная, дом 200",
            rate: "4.8",
            category: "Продукты питания"
        },
        {
            id: '2',
            logo: "Logo",
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

<BlockTitle text="Список магазинов участников" />

<div class="cards">
  {#each shops as item}
      <ShopCard item={item} />
  {/each}
</div>