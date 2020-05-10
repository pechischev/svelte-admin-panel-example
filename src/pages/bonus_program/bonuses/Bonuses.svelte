<script>
    import { BlockTitle } from "../../../components/block-title";
    import { BonusAccount, Cashback } from "./parts";

</script>

<style lang="scss">
    .blocks {
        display: flex;
    }
</style>

<BlockTitle text="Сведения о бонусах" />

<div class="blocks">
    <BonusAccount bonus={10000} />
    <Cashback percent={2}/>
</div>