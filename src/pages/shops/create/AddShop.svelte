<script>
  import {BreadCrumbs} from "../../../components/bread-crumbs";
  import {CompanyService} from "../../../services";
  import {ShopForm} from "../parts";

  function onCreate(event) {
    CompanyService.createShop(event.detail);
  }
</script>

<BreadCrumbs path={"Новый магазин"}/>

<ShopForm on:onSave={onCreate}/>