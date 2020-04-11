<script>
  import Router, {link} from 'svelte-spa-router'
  import {Company, BonusProgram, Settings, Shops, NotFound} from "./pages";

  import './styles/styles.scss';

  const routes = {
    '/company': Company,
    '/bonus_program': BonusProgram,
    '/settings': Settings,
    '/shops': Shops,
    '*': NotFound,
  }
</script>
<header>
  <a href="/company" use:link>Company</a>
  <a href="/bonus_program" use:link>Bonus program</a>
  <a href="/settings" use:link>Settings</a>
  <a href="/shops" use:link>Shops</a>
</header>
<main>
  <Router {routes}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

</style>