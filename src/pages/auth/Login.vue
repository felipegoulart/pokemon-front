<template>
  <q-page class="flex flex-center login">
    <main class="login__container">
      <header class="login__header">
        <span class="login__header-display login__header-display--blue"></span>
        <span class="login__header-display login__header-display--green"></span>
        <span class="login__header-display login__header-display--yellow"></span>
        <span class="login__header-display login__header-display--red"></span>
      </header>

      <div class="login__container-image">
        <q-img src="../../assets/pokeball.png" />
      </div>

      <q-form class="login__form" @submit="submitSuccess">
        <q-input v-model="form.name" borderless class="login__input" type="text" placeholder="Seu nome de mestre pokemon..." :rules="nameRules" />
        <q-input v-model="form.passowd" borderless class="login__input" type="password" placeholder="Sua chave secreta" :rules="passwordRules" />

        <button class="login__button login__button-primary">Entrar</button>
        <button class="login__button login__button-secondary" type="button">Cadastrar</button>
      </q-form>
    </main>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },

  computed: {
    nameRules () {
      return [val => val?.length || 'Digite um nome']
    },

    passwordRules () {
      return [val => val?.length >= 6 || 'Senha inválida']
    }
  },

  methods: {
    submitSuccess () {
      this.$router.push({ name: 'PokemonsList' })
    }
  }
})
</script>

<style lang="scss" scoped>
.login {
  background-color: $white;

  &__container {
    align-items: center;
    background-color: $red;
    border: $black solid 8px;
    display: flex;
    flex-direction: column;
    height: 680px;
    justify-content: space-around;
    padding: 24px 48px;
    position: relative;
    width: 480px;

    &-image {
      aspect-ratio: 1/1;
      height: 30%;
    }
  }

  &__header {
      position: absolute;
      top: 16px;
      left: 16px;
      display: flex;

      &-display {
        background-color: $white;
        border: $black solid 2px;
        height: 12px;
        width: 12px;
        margin: 0 4px;
        border-radius: 50%;

        &--blue {
          background-color: $blue;
          height: 24px;
          width: 24px;
        }

        &--green {
          background-color: $green;
        }
        &--yellow {
          background-color: $yellow;
        }
        &--red {
          background-color: $red;
        }
      }
    }

  &__form {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__input {
    background-color: $white;
    border: $black solid 4px;
    font-size: 18pt;
    height: 64px;
    margin: 16px 0;
    text-indent: 16px;
    width: 100%;
  }

  &__button  {
    border: $black 2px solid;
    cursor: pointer;
    font-size: 24pt;
    margin: 8px;
    padding: 0 32px;
    position: relative;

    &:hover::after {
      background-color: rgba($black, $alpha: 0.1);
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  &__button-primary  {
    background-color: $green;
    border: $black 2px solid;
    color: $black;
    cursor: pointer;
    font-size: 24pt;
    padding: 8px 32px;
    width: 80%;
  }
}
</style>
