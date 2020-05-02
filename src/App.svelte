<script>
  import Router from 'svelte-spa-router';
  import {Header, Navbar} from './layouts';
  import {Company, BonusProgram, Shops, NotFound} from "./pages";
  import { AddShop, EditShop } from "./pages/shops";

  const routes = {
    '/company': Company,
    '/bonus_program': BonusProgram,
    '/shops': Shops,
    '/shops/create': AddShop,
    '/shops/:id': EditShop,
    '*': NotFound,
  };
</script>

<Header/>
<main class="wrap">
  <Navbar/>
  <Router {routes}/>
</main>
