<script>
    import { ButtonTab } from "../button-tab";
    import { BlockTitle } from "../../../components/block-title";
    import { BonusAccount } from "../bonus-accaunt";
    import { Cashback } from "../cashback";

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

<BlockTitle text="Сведения о бонусах" />

<div class="blocks">
    <BonusAccount bonus={10000} />
    <Cashback percent={2}/>
</div>