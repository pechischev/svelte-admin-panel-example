<script>
  import Router, {wrap, replace} from 'svelte-spa-router';
  import {Header, Navbar} from './layouts';
  import {Company, Shops, NotFound, BonusProgram, Login} from './pages';
  import {AddShop, EditShop} from './pages/shops';
  import {UserService} from './services';
  import {get} from 'svelte/store';
  import {isAuthorized} from './logics/store';

  const isUserAuthorized = () => get(isAuthorized)

  const routes = {
    '/login': Login,
    '/company': wrap(Company, null, isUserAuthorized),
    '/bonus_program': wrap(BonusProgram, null, isUserAuthorized),
    '/shops': wrap(Shops, null, isUserAuthorized),
    '/shops/create': wrap(AddShop, null, isUserAuthorized),
    '/shops/:id': wrap(EditShop, null, isUserAuthorized),
    '/*': NotFound,
  };

  UserService.fetchUser().then(() => {
    if (isUserAuthorized() && (!location.hash || !!location.hash.match(/^#\/$/))) {
      replace('/company');
    }
  });

  function conditionsFailed() {
    replace('/login');
  }

</script>

<Header/>
<main class="wrap">
  {#if $isAuthorized}
    <Navbar/>
  {/if}
  <Router {routes} on:conditionsFailed={conditionsFailed}/>
</main>
