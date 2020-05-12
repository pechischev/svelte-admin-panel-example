<script>
  import {push, querystring} from 'svelte-spa-router';
  import {Button} from '../../components/button';
  import qs from 'qs';

  import {Bonuses} from './bonuses';
  import {Transactions} from './transactions';

  function getTab(query) {
    const {tab} = qs.parse(query);
    return tab;
  }

  const tabs = [
    {
      text: 'Бонусы',
      link: '/bonus_program?tab=bonuses',
      active: (query) => !getTab(query) || getTab(query) === 'bonuses',
      component: Bonuses,
    },
    {
      text: 'История операций',
      link: '/bonus_program?tab=operations',
      active: (query) => getTab(query) === 'operations',
      component: Transactions,
    }
  ];
</script>

<style lang="scss">
  .blocks {
    display: flex;
  }
</style>

<div class="blocks">
  {#each tabs as tab }
    <Button
      text={tab.text}
      active={tab.active($querystring)}
      outlined
      on:click={() => push(tab.link)}
    />
  {/each}
</div>

{#each tabs as tab }
  {#if tab.active($querystring) }
    <svelte:component this={tab.component}/>
  {/if}
{/each}