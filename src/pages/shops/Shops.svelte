<script>
  import {BlockTitle} from '../../components/block-title';
  import {CompanyService} from '../../services';
  import {AddShopCard, InfoShopCard} from './parts';
  import {shops} from '../../logics/store';

  CompanyService.fetchShops()

</script>

<style type="text/scss">
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<BlockTitle text="Список магазинов участников"/>

<div class="cards">
  <AddShopCard/>
  {#each $shops as shop}
    <InfoShopCard shop={shop}/>
  {/each}
</div>