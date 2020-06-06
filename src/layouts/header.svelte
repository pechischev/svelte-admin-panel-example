<script>
  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import {company as companyStore, isAuthorized} from '../logics/store';
  import {Logo} from '../components/icons';
</script>

<TopAppBar variant="static" color="primary">
  <Row class="wrap">
    <Section>
      <Logo/>
    </Section>
    {#if $isAuthorized}
      <Section align="end" toolbar>
        <Title>{$companyStore.name}</Title>
      </Section>
    {/if}
  </Row>
</TopAppBar>
