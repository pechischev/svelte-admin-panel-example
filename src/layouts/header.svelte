<script>
  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import {company as companyStore} from '../logics/store';
  import {UserService} from '../services';
</script>

<TopAppBar variant="static" color="primary">
  <Row class="wrap">
    <Section>
      <div>иконка</div>
    </Section>
    {#if UserService.isAuthorized()}
      <Section align="end" toolbar>
        <Title>{$companyStore.name}</Title>
      </Section>
    {/if}
  </Row>
</TopAppBar>
