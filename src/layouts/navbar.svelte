<script>
  import Tab, {Icon, Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import {push, location} from 'svelte-spa-router';

  const tabs = [
    {
      path: '/',
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
    activeTab = tabs.find((tab) => tab.path === currentLocation);
  });

</script>

<TabBar tabs={tabs} let:tab bind:active={activeTab}>
  <Tab {tab} minWidth on:click={() => push(tab.path)}>
    <Label>{tab.label}</Label>
  </Tab>
</TabBar>
