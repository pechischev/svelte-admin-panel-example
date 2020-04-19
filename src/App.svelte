<script>
  import Router from 'svelte-spa-router';
  import {Header, Navbar} from './layouts';
  import {Company, BonusProgram, Shops, NotFound} from "./pages";

  const routes = {
    '/': Company,
    '/bonus_program': BonusProgram,
    '/shops': Shops,
    '*': NotFound,
  };
</script>

<Header/>
<main class="wrap">
  <Navbar/>
  <Router {routes}/>
</main>
