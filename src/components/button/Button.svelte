<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let disabled = false;
  export let type = void 0;
  export let text = '';

</script>

<style lang="scss">
  .button {
    display: block;
    font: 500 18px/22px var(--label-color);
    color: var(--label-color);
    text-align: center;
    padding: 8px 16px;
    background: var(--button-normal);
    border: none;
    border-radius: 16px;
    outline: none;
    cursor: pointer;
    transition: .25s;
    min-height: 50px;
  }

  .button:active,
  .button:hover {
    background: var(--button-active);
    color: var(--txt_content);
  }
</style>

<button
    class="button"
    class:button_disabled={disabled}
    on:click={() => dispatch('click')}
    type={type}
>
  <slot>{text}</slot>
</button>