<script>
  import {TextField} from "../../components/text-field";
  import {Label} from "../../components/label";
  import {BlockTitle} from "../../components/block-title";
  import {Button} from "../../components/button";
  import {CompanyService} from '../../services'
  import {company as companyStore} from '../../logics/store';

  const data = companyStore.getData();

  function onSave() {
    CompanyService.updateCompany(data);
  }
</script>

<style type="text/scss">
  .company-block {
    max-width: 720px;
  }

  .blocks {
    display: flex;
  }
</style>

<BlockTitle text="Общие сведения о компании"/>
<div class="company-block">
  <Label text="Название компании"/>
  <TextField className="line" placeholder="Например: ООО “Деловая Среда”" bind:value={data.name}/>
</div>
<div class="company-block">
  <Label text="Юридический адрес"/>
  <div class="blocks">
    <TextField className="line-1_3" placeholder="Индекс" bind:value={data.legal_postcode}/>
    <TextField className="line" placeholder="Город" bind:value={data.legal_city}/>
  </div>
  <div class="blocks">
    <TextField className="line" placeholder="Улица" bind:value={data.legal_street}/>
    <TextField className="line-1_6" placeholder="Дом" bind:value={data.legal_house}/>
    <TextField className="line-1_6" placeholder="Офис" bind:value={data.legal_office}/>
  </div>
</div>
<div class="company-block">
  <Label text="Фактический адрес"/>
  <div class="blocks">
    <TextField className="line-1_3" placeholder="Индекс" bind:value={data.fact_postcode}/>
    <TextField className="line" placeholder="Город" bind:value={data.fact_city}/>
  </div>
  <div class="blocks">
    <TextField className="line" placeholder="Улица" bind:value={data.fact_street}/>
    <TextField className="line-1_6" placeholder="Дом" bind:value={data.fact_house}/>
    <TextField className="line-1_6" placeholder="Офис" bind:value={data.fact_office}/>
  </div>
</div>
<div class="company-block">
  <div class="blocks">
    <Label text="Телефон" className="line-1_2"/>
    <Label text="E-mail" className="line-1_2"/>
  </div>
  <div class="blocks">
    <TextField className="line-1_2" placeholder="+71234567890" bind:value={data.phone}/>
    <TextField className="line-1_2" placeholder="example@mail.ru" bind:value={data.email}/>
  </div>
</div>


<BlockTitle text="Реквизиты"/>
<div class="company-block">
  <Label text="ИНН"/>
  <TextField className="line" placeholder="123456789123" bind:value={data.inn}/>
</div>
<div class="company-block">
  <Label text="КПП"/>
  <TextField className="line" placeholder="NNNNPPXXX" bind:value={data.kpp}/>
</div>
<div class="company-block">
  <Label text="Р/С"/>
  <TextField className="line" placeholder="123456789000000000" bind:value={data.payment_account}/>
</div>
<div class="company-block">
  <Label text="ОГРН"/>
  <TextField className="line" placeholder="СГГККННХХХХХЧ" bind:value={data.ogrn}/>
</div>

<div style="margin-top: 20px">
  <Button text="Сохранить изменения" on:click={() => onSave()}/>
</div>