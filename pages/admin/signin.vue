<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submitSignIn()">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> email </label>
        <input
          id="email"
          v-model="state.form.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          type="text"
          placeholder="例)xxx@xxx.com"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
        <input
          id="password"
          v-model="state.form.password"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2022 simo. All rights reserved.
    </p>
  </div>
</template>

<script setup lang="ts">
import { setAdmin, } from '@/utils/functions/auth'
import { EventHandler, } from '@/types/event'
import { RepositoryFactory, } from '@/api/gql/repositories/index'
import { BASE_PATH, } from '@/utils/const'
const router = useRouter()
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
  setAdmin(result.data.signIn)
  router.push(`${BASE_PATH}/`)
}
</script>
