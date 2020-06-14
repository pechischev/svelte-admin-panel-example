<script>
  import {BlockTitle} from "../../../../components/block-title";
  import {DefaultLogo} from "../../../../components/icons";
  import {TextField} from "../../../../components/text-field";
  import {Button} from "../../../../components/button";
  import {TextArea} from "../../../../components/text-area";
  import {Label} from "../../../../components/label";
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let shop = { address: {} };

  function handleSave() {
    dispatch('onSave', shop)
  }
</script>

<style lang="scss">
  .block {
    max-width: 720px;
  }

  .blocks {
    display: flex;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo p {
    width: 220px;
    margin-left: 24px;
    font: 400 16px/16px "Roboto", sans-serif;
    color: var(--label-color);
  }
</style>

<BlockTitle text="Общие сведения о магазине"/>

{#if false}
  <div class="block">
    <div class="logo">
      <DefaultLogo width={98} height={98}/>
      <p>Добавить логотип магазина</p>
    </div>
  </div>
{/if}

<div class="block">
  <Label text="Название магазина"/>
  <TextField className="line" placeholder="Например: “Незабудка”" bind:value={shop.name}/>
</div>

<div class="block">
  <Label text="Адрес"/>
  <div class="blocks">
    <TextField className="line-1_2" placeholder="Город" bind:value={shop.address.city}/>
    <TextField className="line-1_3" placeholder="Улица" bind:value={shop.address.street}/>
    <TextField className="line-1_6" placeholder="Дом" bind:value={shop.address.house_number}/>
  </div>

  <Label text="Координаты"/>
  <div class="blocks">
    <TextField className="line-1_3" placeholder="Ширина" bind:value={shop.address.location_lat}/>
    <TextField className="line-1_6" placeholder="Долгота" bind:value={shop.address.location_lng}/>
  </div>
</div>

<div class="block">
  <Label text="Категория товаров/услуг"/>
  <TextField className="line-1_2" placeholder="Например: Продукты" bind:value={shop.category}/>
</div>

<div class="block">
  <Label text="Расскажите немного о магазине"/>
  <TextArea className="line" placeholder="Комментарий" bind:value={shop.description}/>
</div>

<div style="margin-top: 20px">
  <Button text="Сохранить изменения" on:click={handleSave}/>
</div>