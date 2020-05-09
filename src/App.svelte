<script>
  import Router from 'svelte-spa-router';
  import {Header, Navbar} from './layouts';
  import {Company, Shops, NotFound} from './pages';
  import {AddShop, EditShop} from './pages/shops';
  import {Bonuses} from './pages/bonus_program/bonuses';
  import {Operations} from './pages/bonus_program/operations';
  import {onMount} from 'svelte';
  import {CompanyService} from './services';

  const routes = {
    '/company': Company,
    '/bonus_program': Bonuses,
    '/bonus_program/bonuses': Bonuses,
    '/bonus_program/operations': Operations,
    '/shops': Shops,
    '/shops/create': AddShop,
    '/shops/:id': EditShop,
    '*': NotFound,
  };

  onMount(() => {
    CompanyService.fetchCompany();
    CompanyService.fetchShops();
  })
</script>

<Header/>
<main class="wrap">
  <Navbar/>
  <Router {routes}/>
</main>
