<script>
    export let value = "";
    export let className = "";
    export let placeholder = "";
</script>

<style type="text/scss">
    .text-area {
        height: 154px;
        padding: 16px;
        margin: 8px 8px 0 0;
        background-color: var(--white);
        border: 1px solid var(--border-color-normal);
        border-radius: 8px;
        transition: .25s;
        color: var(--txt_content);
        font: 400 18px/22px "Roboto", sans-serif;
        resize: none;
    }

    .text-area:active,
    .text-area:hover {
        border-color: var(--border-color-active);
    }

    .text-area:focus {
        outline: none;
    }

    .requisites-style {
        letter-spacing: 5px;
    }
</style>

<textarea
    class="text-area {className}"
    placeholder="{placeholder}"
    name=""
>
  {value}
</textarea>