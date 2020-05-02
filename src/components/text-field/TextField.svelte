<script>
    export let value = "";
    export let className = "";
    export let placeholder = "";
</script>

<style type="text/scss">
    .text-field {
        padding: 16px;
        background-color: var(--white);
        border: 1px solid var(--border-color-normal);
        border-radius: 8px;
        transition: .25s;
        color: var(--txt_content);
        font: 400 18px/22px "Roboto", sans-serif;
        margin: 8px 8px 0 0;
    }

    .text-field:active,
    .text-field:hover {
        border-color: var(--border-color-active);
    }

    .text-field:focus {
        outline: none;
    }
</style>

<input
    class="text-field {className}"
    placeholder="{placeholder}"
    bind:value="{value}"
/>