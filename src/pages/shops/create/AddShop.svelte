<script>
  import {push} from 'svelte-spa-router';
  import {BreadCrumbs} from "../../../components/bread-crumbs";
  import {CompanyService} from "../../../services";
  import {ShopForm} from "../parts";

  function onCreate(event) {
    CompanyService.createMarketplace(event.detail).then(() => push('/shops/'));
  }
</script>

<BreadCrumbs path={"Новый магазин"}/>

<ShopForm on:onSave={onCreate}/>