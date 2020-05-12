<script>
  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import {company as companyStore, user} from '../logics/store';
</script>

<TopAppBar variant="static" color="primary">
  <Row class="wrap">
    <Section>
      <div>иконка</div>
    </Section>
    {#if user.isAuthorized()}
      <Section align="end" toolbar>
        <Title>{$companyStore.name}</Title>
      </Section>
    {/if}
  </Row>
</TopAppBar>
