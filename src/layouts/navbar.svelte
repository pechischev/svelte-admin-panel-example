<script>
  import Tab, {Icon, Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import {push, location} from 'svelte-spa-router';

  const tabs = [
    {
      path: '/company',
      label: 'Моя компания'
    },
    {
      path: '/shops',
      label: 'Магазины'
    },
    {
      path: '/bonus_program',
      label: 'Бонусная программа'
    },
  ];

  let activeTab = tabs[0];

  location.subscribe((currentLocation) => {
    activeTab = tabs.find((tab) => currentLocation.includes(tab.path));
  });

</script>

<style>
  .tab-label {
    letter-spacing: 0;
    text-transform: capitalize;
    font: 500 18px/22px "Roboto", sans-serif;
  }
</style>

<TabBar className="tab-bar" tabs={tabs} let:tab bind:active={activeTab}>
  <Tab className="tab" {tab} minWidth on:click={() => push(tab.path)}>
    <Label className="tab-label">{tab.label}</Label>
  </Tab>
</TabBar>
