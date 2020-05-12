<script>
  import Router, {wrap, replace} from 'svelte-spa-router';
  import {Header, Navbar} from './layouts';
  import {Company, Shops, NotFound, BonusProgram, Login} from './pages';
  import {AddShop, EditShop} from './pages/shops';
  import {CompanyService} from './services';
  import {user} from './logics/store';

  const routes = {
    '/login': Login,
    '/company': wrap(Company, null, () => user.isAuthorized()),
    '/bonus_program': wrap(BonusProgram, null, () => user.isAuthorized()),
    '/shops': wrap(Shops, null, () => user.isAuthorized()),
    '/shops/create': wrap(AddShop, null, () => user.isAuthorized()),
    '/shops/:id': wrap(EditShop, null, () => user.isAuthorized()),
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
  {#if user.isAuthorized()}
    <Navbar/>
  {/if}
  <Router {routes} on:conditionsFailed={conditionsFailed}/>
</main>
