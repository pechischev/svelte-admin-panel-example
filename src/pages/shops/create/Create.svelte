<script>
    import { BreadCrumbs } from "../../../components/bread-crumbs";
    import { BlockTitle } from "../../../components/block-title";
    import { DefaultLogo } from "../../../components/icons";
    import { TextField } from "../../../components/text-field";
    import { Button } from "../../../components/button";
    import { TextArea } from "../../../components/text-area";
    import { Label } from "../../../components/label";

</script>

<style lang="scss">
    .block {
        max-width: 720px;
    }

    .blocks {
        display: flex;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo p {
        width: 220px;
        margin-left: 24px;
        font: 400 16px/16px "Roboto", sans-serif;
        color: var(--label-color);
    }
</style>

<BreadCrumbs path={"Новый магазин"} />

<BlockTitle text="Общие сведения о магазине"/>

<div class="block">
    <div class="logo">
        <DefaultLogo width={98} height={98} />
        <p>Добавить или изменить логотип магазина</p>
    </div>
</div>

<div class="block">
    <Label text="Название магазина" />
    <TextField className="line" placeholder="Например: “Незабудка”" />
</div>

<div class="block">
    <Label text="Фактический адрес" />
    <div class="blocks">
        <TextField className="line-1_2" placeholder="Город" />
        <TextField className="line-1_3" placeholder="Улица" />
        <TextField className="line-1_6" placeholder="Дом" />
    </div>
</div>

<div class="block">
    <Label text="Категория товаров/услуг" />
    <TextField className="line-1_2" placeholder="Например: Продукты" />
</div>

<div class="block">
    <Label text="Категория товаров/услуг" />
    <TextArea className="line" placeholder="Комментарий" value="" />
</div>

<div style="margin-top: 20px">
    <Button text="Сохранить изменения" />
</div>