<script>
  import Router, {wrap, replace} from 'svelte-spa-router';
  import {Header, Navbar} from './layouts';
  import {Company, Shops, NotFound, BonusProgram, Login} from './pages';
  import {AddShop, EditShop} from './pages/shops';
  import {CompanyService} from './services';
  import {isAuthorized} from './logics/store';
  import { get } from "svelte/store";

  const routes = {
    '/login': Login,
    '/company': wrap(Company, null, () => get(isAuthorized)),
    '/bonus_program': wrap(BonusProgram, null, () => get(isAuthorized)),
    '/shops': wrap(Shops, null, () => get(isAuthorized)),
    '/shops/create': wrap(AddShop, null, () => get(isAuthorized)),
    '/shops/:id': wrap(EditShop, null, () => get(isAuthorized)),
    '/*': NotFound,
  };

  CompanyService.fetchCompany();

  function conditionsFailed() {
    replace('/login');
  }

  if (!location.hash || !!location.hash.match(/#\//) ) {
    replace('/company');
  }

</script>

<Header/>
<main class="wrap">
  {#if $isAuthorized}
    <Navbar/>
  {/if}
  <Router {routes} on:conditionsFailed={conditionsFailed}/>
</main>
