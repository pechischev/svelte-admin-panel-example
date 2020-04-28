<script>
    import { BreadCrumbs } from "../../../components/bread-crumbs";
    import { BlockTitle } from "../../../components/block-title";
    import { DefaultLogo, OutlineStar } from "../../../components/icons";
    import { TextField } from "../../../components/text-field";
    import { TextArea } from "../../../components/text-area";
    import { Button } from "../../../components/button";
    import { Label } from "../../../components/label";
    import { FeedbackItem } from "./feedback-item";

    const feedback = [
        {
            author: "Виталик",
            date: "12.03.20",
            text: "Сервис просто супер. приду ещё!!!"
        },
        {
            author: "Виталик",
            date: "12.03.20",
            text: "Сервис просто супер. приду ещё!!!"
        },
        {
            author: "Виталик",
            date: "12.03.20",
            text: "Сервис просто супер. приду ещё!!!"
        },
        {
            author: "Виталик",
            date: "12.03.20",
            text: "Сервис просто супер. приду ещё!!!"
        },
        {
            author: "Виталик",
            date: "12.03.20",
            text: "Сервис просто супер. приду ещё!!!"
        },
    ];

</script>

<style type="text/scss">
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

    .rate {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .rate p {
        font: 400 18px/22px "Roboto", sans-serif;
        color: var(--txt_content);
        margin-left: 16px;
    }

    .feedback {
        display: flex;
        margin-top: 8px;
    }
</style>

<BreadCrumbs path={"ВкусноМир"} isEdit={true} />

<BlockTitle text="Рейтинг покупателей" />
<div class="rate">
    <OutlineStar />
    <p>Пользователи пока не оценивали ваш магазин</p>
</div>

<Label text="Отзывы" />
<div class="feedback">
  {#each feedback as item}
      <FeedbackItem item={item} />
  {/each}
</div>

<BlockTitle text="Общие сведения о магазине" />

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