<script>
  import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
  import {company as companyStore} from '../logics/store';
</script>

<TopAppBar variant="static" color="primary">
  <Row class="wrap">
    <Section>
      <div>иконка</div>
    </Section>
    <Section align="end" toolbar>
      <Title>{$companyStore.name}</Title>
    </Section>
  </Row>
</TopAppBar>
