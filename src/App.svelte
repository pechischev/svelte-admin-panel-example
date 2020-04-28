<script>
  import Router from 'svelte-spa-router';
  import {Header, Navbar} from './layouts';
  import {Company, BonusProgram, Shops, NotFound} from "./pages";
  import { Create } from "./pages/shops/create";
  import { Edit } from "./pages/shops/edit";

  const routes = {
    '/': Company,
    '/bonus_program': BonusProgram,
    '/shops': Shops,
    '/shops/create': Create,
    '/shops/:id': Edit,
    '*': NotFound,
  };
</script>

<Header/>
<main class="wrap">
  <Navbar/>
  <Router {routes}/>
</main>
