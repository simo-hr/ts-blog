<script setup lang="ts">
import { RepositoryFactory, } from '@/api/gql/repositories'
import { CategoryData, } from '@/types'
import { BASE_PATH, } from '@/utils/const'

const route = useRoute()

type Props = {
  isEdit?: boolean
}

const props = defineProps<Props>()

type State = {
  form: CategoryData
}

const state: State = reactive({
  form: {
    id: '',
    name: '',
    parent_category_id: '',
    updated_at: new Date(),
  },
})

if (typeof route.params?.id === 'string') {
  state.form = await RepositoryFactory.Category.getCategory({ id: route.params.id, }).then(
    result => result.data.category
  )
}

const categories = await RepositoryFactory.Category.getCategories().then((result) => {
  if (result.error) {
    throw new Error(result.error.message)
  }
  return result.data.categories
})

const router = useRouter()
const submitCategory = async () => {
  if (props.isEdit) {
    await RepositoryFactory.Category.updateCategory({
      id: state.form.id,
      name: state.form.name,
      parent_category_id: state.form.parent_category_id,
    }).then((result) => {
      if (result.error) {
        throw new Error(result.error.message)
      }
      return result.data.updateCategory
    })
  } else {
    await RepositoryFactory.Category.createCategory({
      name: state.form.name,
      parent_category_id: state.form.parent_category_id,
    }).then((result) => {
      if (result.error) {
        throw new Error(result.error.message)
      }
      return result.data.createCategory
    })
  }
  router.push(`${BASE_PATH}categories`)
}
</script>

<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submitCategory">
      <div v-if="isEdit" class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">カテゴリーID</label>
        <input
          id="id"
          v-model="state.form.id"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          disabled
          placeholder="category id"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">カテゴリー名</label>
        <input
          id="name"
          v-model="state.form.name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          type="text"
          placeholder="category name"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="parentCategoryId">親カテゴリー</label>
        <select
          id="parentCategoryId"
          v-model="state.form.parent_category_id"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option v-for="(category, index) in categories" :key="index" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {{ props.isEdit ? '更新' : '新規' }}
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2022 simo. All rights reserved.
    </p>
  </div>
</template>
