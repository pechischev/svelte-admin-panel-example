<script>
    import { push } from 'svelte-spa-router';

    export let text = "";
    export let to = "";
    let isActive = window.location.toString().indexOf(to) !== -1;
    let classNames = "button-tab " + (isActive ? "active" : "");


    function redirect() {
        push(to);
    }
</script>

<style lang="scss">
    .button-tab {
        width: auto;
        padding: 8px 20px;
        margin: 25px 16px 25px 0;
        font: 500 18px/22px "Roboto", sans-serif;
        text-align: center;
        color: #1A68DE;
        border: 1px solid #1A68DE;
        border-radius: 24px;
        background-color: var(--white);
        transition: .25s;
        cursor: pointer;
    }

    .button-tab:hover,
    .button-tab.active {
        color: var(--white);
        background-color: #1A68DE;
    }

</style>

<div class={classNames} on:click={() => redirect()}>{text}</div>