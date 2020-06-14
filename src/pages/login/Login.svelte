<script>
  import {push} from 'svelte-spa-router';
  import {TextField} from '../../components/text-field';
  import {Button} from '../../components/button';
  import {UserService} from '../../services'

  let data = {};

  function onSave() {
    UserService.signIn(data).then(() => push('/company'));
  }
</script>

<style lang="scss">
  .wrapper {
    height: calc(75vh - 64px);
    width: 100%;
    display: flex;
  }

  .auth-block {
    padding: 50px;
    width: 400px;
    height: 325px;
    margin: auto;
    border: 1px solid var(--border-color-active);
    border-radius: 5px;
  }

  .auth-button {
    display: flex;
    justify-content: flex-end;
  }

  .margin {
    margin: 15px;
  }
</style>

<div class="wrapper">
  <div class="auth-block">
    <TextField className="line" placeholder="Логин" bind:value={data.phone_number}/>
    <div class="margin"></div>
    <TextField className="line" placeholder="Пароль" type="password" bind:value={data.password}/>
    <div class="auth-button">
      <Button text="Зайти" right={true} on:click={() => onSave()}/>
    </div>
  </div>
</div>