<script>
    import { Label } from "../../../../components/label";
    import { Button } from "../../../../components/button";
    import { Modal } from "../../../../components/modal";

    export let bonus = 0;
    let stringBonus = bonus.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

    let showModal = false;
</script>

<style lang="scss">
    .block {
        width: 400px;
    }

    .bonus {
        font: 700 36px/42px "Roboto", sans-serif;
        color: var(--green);
        margin: 16px 0;
    }

</style>

<div class="block">
    <Label text={"Основной бонусный счёт компании"} />
    <p class="bonus">{stringBonus}</p>
    <Button text="Пополнить" on:click={() => showModal = true}/>
</div>


{#if showModal}
    <Modal on:close="{() => showModal = false}">
        шо-то непонятное
    </Modal>
{/if}
