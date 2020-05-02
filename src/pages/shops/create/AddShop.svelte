<script>
  import {BreadCrumbs} from "../../../components/bread-crumbs";
  import {ShopForm} from "../parts";

  function onCreate(event) {
    const info = event.detail;
    console.log(info)
  }
</script>

<BreadCrumbs path={"Новый магазин"}/>

<ShopForm on:onSave={onCreate}/>