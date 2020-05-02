<script>
    import { Label } from "../../../components/label";
    import { Modal } from "./modal";

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

    .button-modal {
        width: 228px;
        padding: 15px 40px;
        margin: 25px 16px 25px 0;
        font: 500 18px/22px "Roboto", sans-serif;
        text-align: center;
        color: #1A68DE;
        border: 1px solid #1A68DE;
        border-radius: 16px;
        background-color: var(--white);
        transition: .25s;
        cursor: pointer;
    }

    .button-modal:hover {
        color: var(--white);
        background-color: #1A68DE;
    }
</style>

<div class="block">
    <Label text={"Основной бонусный счёт компании"} />
    <p class="bonus">{stringBonus}</p>
    <div class="button-modal" on:click="{() => showModal = true}">Пополнить</div>
</div>


{#if showModal}
    <Modal on:close="{() => showModal = false}">
        шо-то непонятное
    </Modal>
{/if}
