<template>
  <div>
    <form class="login-form" @submit.prevent="submitSignIn()">
      <label for="email"></label>
      <input
        id="email"
        v-model="state.admin.email"
        type="text"
        required
        placeholder="例)xxx@xxx.com"
        name="email"
        autofocus
      />
      <label for="password"></label>
      <br>
      <input id="password" v-model="state.admin.password" type="password" required name="password" />
      <button type="submit">
        サインイン
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { EventHandler, } from '@/types/event'
import { RepositoryFactory, } from '@/api/gql/repositories/index'
type State = {
  form: {
    email: string
    password: string
  }
}
const state: State = reactive({
  form: {
    email: '',
    password: '',
  },
})

const submitSignIn: EventHandler = async () => {
  const result = await RepositoryFactory.Admin.signIn({ email: state.form.email, password: state.form.password, })
  if (!result || result.error?.message) {
    throw new Error(result.error?.message)
  }
}
</script>
