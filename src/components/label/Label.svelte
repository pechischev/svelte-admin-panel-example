<script>
    export let text = "";
    export let classSize = "line";
</script>

<style type="text/scss">
    .label {
        margin: 16px 0 0;
        color: var(--label-color);
        font: 400 16px/20px "Roboto", sans-serif;
        cursor: default;
    }
</style>

<p class="label {classSize}">{text}</p>