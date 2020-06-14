<script>
  import {TextField} from '../../components/text-field';
  import {Label} from '../../components/label';
  import {BlockTitle} from '../../components/block-title';
  import {Button} from '../../components/button';
  import {CompanyService} from '../../services'
  import {company as companyStore} from '../../logics/store';
  import {onDestroy} from 'svelte';

  let data = {};
  let legalAddress = {};
  let factualAddress = {};
  const unsubscribe = companyStore.subscribe((company) => {
    const companyData = {...company};
    const {legal_address = {}, factual_address = {}, ...rest} = companyData;
    legalAddress = legal_address;
    factualAddress = factual_address;
    data = rest;
  })

  CompanyService.fetchCompany();

  function onSave() {
    CompanyService.updateCompany({
      ...data,
      legal_address: legalAddress,
      factual_address: factualAddress
    });
  }

  onDestroy(() => unsubscribe())
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
    <TextField className="line-1_3" placeholder="Индекс" bind:value={legalAddress.postcode}/>
    <TextField className="line" placeholder="Город" bind:value={legalAddress.city}/>
  </div>
  <div class="blocks">
    <TextField className="line" placeholder="Улица" bind:value={legalAddress.street}/>
    <TextField className="line-1_6" placeholder="Дом" bind:value={legalAddress.house_number}/>
    <TextField className="line-1_6" placeholder="Офис" bind:value={legalAddress.apartment_number}/>
  </div>
</div>
<div class="company-block">
  <Label text="Фактический адрес"/>
  <div class="blocks">
    <TextField className="line-1_3" placeholder="Индекс" bind:value={factualAddress.postcode}/>
    <TextField className="line" placeholder="Город" bind:value={factualAddress.city}/>
  </div>
  <div class="blocks">
    <TextField className="line" placeholder="Улица" bind:value={factualAddress.street}/>
    <TextField className="line-1_6" placeholder="Дом" bind:value={factualAddress.house_number}/>
    <TextField className="line-1_6" placeholder="Офис" bind:value={factualAddress.apartment_number}/>
  </div>
</div>
<div class="company-block">
  <div class="blocks">
    <Label text="Телефон" className="line-1_2"/>
    <Label text="E-mail" className="line-1_2"/>
  </div>
  <div class="blocks">
    <TextField className="line-1_2" placeholder="+71234567890" bind:value={data.phone_number}/>
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
<!--<div class="company-block">
  <Label text="Р/С"/>
  <TextField className="line" placeholder="123456789000000000" bind:value={data.payment_account}/>
</div>-->
<div class="company-block">
  <Label text="ОГРН"/>
  <TextField className="line" placeholder="СГГККННХХХХХЧ" bind:value={data.ogrn}/>
</div>

<div style="margin-top: 20px">
  <Button text="Сохранить изменения" on:click={() => onSave()}/>
</div>