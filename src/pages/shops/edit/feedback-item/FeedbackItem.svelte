<script>
    export let item = {};
</script>

<style lang="scss">
    .feedback {
        position: relative;
        width: 270px;
        height: 160px;
        padding: 8px;
        margin: 0 24px 10px 0;
        background: var(--white);
        box-shadow: 0 2px 8px rgba(26, 104, 222, 0.1);
        border-radius: 4px;
        transition: .25s;
    }

    .feedback:hover {
        box-shadow: 0 2px 8px rgba(26, 104, 222, 0.25);
    }

    .feedback__author {
        position: absolute;
        left: 8px;
        top: 8px;
        font: 700 16px/20px "Roboto", sans-serif;
        color: var(--label-color);
    }

    .feedback__date {
        position: absolute;
        right: 8px;
        top: 8px;
        font: 400 16px/20px "Roboto", sans-serif;
        color: var(--label-color);
    }

    .feedback__text {
        margin-top: 30px;
        font: 400 16px/20px "Roboto", sans-serif;
        color: var(--txt_content);
    }
</style>

<div class="feedback">
    <p class="feedback__author">{item.author}</p>
    <p class="feedback__date">{item.date}</p>
    <p class="feedback__text">{item.text}</p>
</div>