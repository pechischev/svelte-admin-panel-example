<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<div class="card" on:click={() => dispatch('redirect')}>
  <slot></slot>
</div>

<style type="text/scss">
  .card {
    width: 310px;
    height: 190px;
    margin: 0 24px 24px 0;
    background: var(--white);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(26, 104, 222, 0.1);
    transition: .25s;
    cursor: pointer;
  }

  .card:hover {
    box-shadow: 0 2px 8px rgba(26, 104, 222, 0.25);
  }
</style>