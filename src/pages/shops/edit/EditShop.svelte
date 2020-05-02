<script>
  import {BreadCrumbs} from "../../../components/bread-crumbs";
  import {BlockTitle} from "../../../components/block-title";
  import {Basket, Lock, OutlineStar} from "../../../components/icons";
  import {Label} from "../../../components/label";
  import {FeedbackItem} from "./feedback-item";
  import {ShopForm} from "../parts";

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


  function onEdit(event) {
    const info = event.detail;
    console.log(info)
  }

</script>

<style type="text/scss">
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

<BreadCrumbs path={"ВкусноМир"}>
  <div>
    <Lock />
    <Basket />
  </div>
</BreadCrumbs>

<BlockTitle text="Рейтинг покупателей"/>
<div class="rate">
  <OutlineStar/>
  <p>Пользователи пока не оценивали ваш магазин</p>
</div>

<Label text="Отзывы"/>
<div class="feedback">
  {#each feedback as item}
    <FeedbackItem item={item}/>
  {/each}
</div>

<ShopForm on:onSave={onEdit}/>