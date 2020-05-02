<script>
    import { Label } from "../../../components/label";
    import { SliderMinus, SliderPlus } from "../../../components/icons";

    export let percent;
    let value = percent;

    function minus() {
        if (value > 0) {
            value -= 1;
        }
    }

    function plus() {
        if (value < 100) {
            value += 1;
        }
    }

    $: isActiveMinus = value > 0;
    $: isActivePlus = value < 100;
</script>

<style lang="scss">
    .block {
        width: 400px;
    }

    .blocks {
        display: flex;
        width: 300px;
    }

    .value {
        width: 56px;
        margin: 15px;
        font: 700 22px/26px "SF UI Text", sans-serif;
        color: var(--txt_content);
        user-select: none;
        text-align: center;
    }

    .minus {
        margin: 15px;
        cursor: pointer;
    }

    .plus {
        margin: 15px;
        cursor: pointer;
    }

    .disabled {
        cursor: default !important;
        pointer-events: none !important;
    }
</style>

<div class="block">
    <Label text={"Процент получемый клиентом"} />
    <div class="blocks">
        <div class="minus {!isActiveMinus ? 'disabled' : ''}" on:click="{minus}">
            <SliderMinus />
        </div>
        <p class="value">{value}%</p>
        <div class="plus {!isActivePlus ? 'disabled' : ''}" on:click="{plus}">
            <SliderPlus />
        </div>
    </div>
</div>