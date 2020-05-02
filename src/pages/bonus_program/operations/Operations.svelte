<script>
    import { ButtonTab } from "../button-tab";
    import { BlockTitle } from "../../../components/block-title";

</script>

<style lang="scss">

    .blocks {
        display: flex;
    }
</style>

<div class="blocks">
    <ButtonTab text={"Бонусы"} to={"/bonus_program/bonuses"} />
    <ButtonTab text={"История операций"} to={"/bonus_program/operations"} />
</div>

