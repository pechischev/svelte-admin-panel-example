<script>
  import Router, {wrap, replace} from 'svelte-spa-router';
  import {Header, Navbar} from './layouts';
  import {Company, Shops, NotFound, BonusProgram, Login} from './pages';
  import {AddShop, EditShop} from './pages/shops';
  import {CompanyService, UserService} from './services';

  const routes = {
    '/login': Login,
    '/company': wrap(Company, null, () => UserService.isAuthorized()),
    '/bonus_program': wrap(BonusProgram, null, () => UserService.isAuthorized()),
    '/shops': wrap(Shops, null, () => UserService.isAuthorized()),
    '/shops/create': wrap(AddShop, null, () => UserService.isAuthorized()),
    '/shops/:id': wrap(EditShop, null, () => UserService.isAuthorized()),
    '/*': NotFound,
  };

  CompanyService.fetchCompany();
  UserService.fetchUser();

  function conditionsFailed() {
    replace('/login');
  }

  if (!location.hash || !!location.hash.match(/^#\/$/) ) {
    replace('/company');
  }

</script>

<Header/>
<main class="wrap">
  {#if UserService.isAuthorized()}
    <Navbar/>
  {/if}
  <Router {routes} on:conditionsFailed={conditionsFailed}/>
</main>
