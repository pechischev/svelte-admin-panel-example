<script>
  import {createEventDispatcher, onDestroy} from 'svelte';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  let modal;

  export let title;

  const handle_keydown = e => {
    switch (e.key) {
      case 'Escape':
        close();
        break;
    }
  };

  const previously_focused = typeof document !== 'undefined' && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
  {#if title}
    <div class="modal__title">{title}</div>
  {/if}
  <slot/>
  <div class="modal__buttons">
    <slot name="buttons" close={close}/>
  </div>
</div>

<style lang="scss">
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 20%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -20%);
    padding: 1.5em;
    background: var(--white);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  .modal__title {
    font: bold 24px/28px "Roboto", sans-serif;
  }

  .modal__buttons {
    display: flex;
    justify-content: center;
  }
</style>
