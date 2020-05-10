<script>
  import Router from 'svelte-spa-router';
  import {Header, Navbar} from './layouts';
  import {Company, Shops, NotFound, BonusProgram} from './pages';
  import {AddShop, EditShop} from './pages/shops';
  import {onMount} from 'svelte';
  import {CompanyService} from './services';

  const routes = {
    '/company': Company,
    '/bonus_program': BonusProgram,
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
