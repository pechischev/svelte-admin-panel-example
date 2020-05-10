<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let disabled = false;
  export let type = void 0;
  export let text = '';
  export let active = false;
  export let outlined = false;

</script>

<style lang="scss">
  .button {
    display: block;
    font: 500 18px/22px "Roboto", sans-serif;
    text-align: center;
    padding: 10px 20px;
    margin: 25px 16px 25px 0;
    border-radius: 16px;
    outline: none;
    cursor: pointer;
    transition: .25s;
    min-height: 50px;
  }

  .button_primary {
    color: var(--act_blue);
    background: var(--white);
    border: 1px solid var(--act_blue);
  }

  .button_primary:active,
  .button_primary.button_active,
  .button_primary:hover {
    background: var(--act_blue);
    color: var(--white);
  }

  .button_outlined {
    border-radius: 24px;
  }
</style>

<button
    class="button"
    class:button_primary={true}
    class:button_outlined={outlined}
    class:button_active={active}
    class:button_disabled={disabled}
    on:click={() => dispatch('click')}
    type={type}
>
  <slot>{text}</slot>
</button>