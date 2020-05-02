<script>
    import Router from 'svelte-spa-router';
    import { Header, Navbar } from './layouts';
    import { Company, BonusProgram, Shops, NotFound } from "./pages";
    import { Create } from "./pages/shops/create";
    import { Edit } from "./pages/shops/edit";
    import { Bonuses } from "./pages/bonus_program/bonuses";
    import { Operations } from "./pages/bonus_program/operations";

    const routes = {
        '/': Company,
        '/bonus_program': Bonuses,
        '/bonus_program/bonuses': Bonuses,
        '/bonus_program/operations': Operations,
        '/shops': Shops,
        '/shops/create': Create,
        '/shops/:id': Edit,
        '*': NotFound,
    };
</script>

<Header />
<main class="wrap">
    <Navbar />
    <Router {routes} />
</main>
