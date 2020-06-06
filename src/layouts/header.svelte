<script>
  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import {company as companyStore, isAuthorized} from '../logics/store';
</script>

<TopAppBar variant="static" color="primary">
  <Row class="wrap">
    <Section>
      <div>иконка</div>
    </Section>
    {#if $isAuthorized}
      <Section align="end" toolbar>
        <Title>{$companyStore.name}</Title>
      </Section>
    {/if}
  </Row>
</TopAppBar>
