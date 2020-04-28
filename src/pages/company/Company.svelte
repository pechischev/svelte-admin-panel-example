<script>
    import { TextField } from "../../components/text-field";
    import { Label } from "../../components/label";
    import { BlockTitle } from "../../components/block-title";
    import { Button } from "../../components/button";
</script>

<style type="text/scss">
    .company-block {
        max-width: 720px;
    }

    .blocks {
        display: flex;
    }
</style>

<BlockTitle text="Общие сведения о компании" />
<div class="company-block">
    <Label text="Название компании" />
    <TextField className="line" placeholder="Например: ООО “Деловая Среда”" />
</div>
<div class="company-block">
    <Label text="Юридический адрес" />
    <div class="blocks">
        <TextField className="line-1_3" placeholder="Индекс" value="" />
        <TextField className="line" placeholder="Город" value="" />
    </div>
    <div class="blocks">
        <TextField className="line" placeholder="Улица" value="" />
        <TextField className="line-1_6" placeholder="Дом" value="" />
        <TextField className="line-1_6" placeholder="Офис" value="" />
    </div>
</div>
<div class="company-block">
    <Label text="Фактический адрес" />
    <div class="blocks">
        <TextField className="line-1_3" placeholder="Индекс" value="" />
        <TextField className="line" placeholder="Город" value="" />
    </div>
    <div class="blocks">
        <TextField className="line" placeholder="Улица" value="" />
        <TextField className="line-1_6" placeholder="Дом" value="" />
        <TextField className="line-1_6" placeholder="Офис" value="" />
    </div>
</div>
<div class="company-block">
    <div class="blocks">
        <Label text="Телефон" className="line-1_2" />
        <Label text="E-mail" className="line-1_2" />
    </div>
    <div class="blocks">
        <TextField className="line-1_2" placeholder="+7" value="" />
        <TextField className="line-1_2" placeholder="" value="" />
    </div>
</div>


<BlockTitle text="Общие сведения о компании" />
<div class="company-block">
    <Label text="ИНН" />
    <TextField className="line" isRequisites="true" placeholder="123456789123" />
</div>
<div class="company-block">
    <Label text="КПП" />
    <TextField className="line" isRequisites="true" placeholder="NNNNPPXXX" />
</div>
<div class="company-block">
    <Label text="Р/С" />
    <TextField className="line" isRequisites="true" placeholder="123456789000000000" />
</div>
<div class="company-block">
    <Label text="ОГРН" />
    <TextField className="line" isRequisites="true" placeholder="СГГККННХХХХХЧ" />
</div>

<div style="margin-top: 20px">
    <Button text="Сохранить изменения" />
</div>