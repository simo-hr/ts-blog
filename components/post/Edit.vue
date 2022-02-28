<script setup lang="ts">
import { RepositoryFactory, } from '@/api/gql/repositories'
import { Post, Category, } from '@/types'

const route = useRoute()

type Props = {
  isEdit?: boolean
}

const props = defineProps<Props>()

type State = {
  form: Post
}
const state: State = reactive({
  form: {
    id: '',
    title: '',
    content: '',
    is_published: false,
    published_at: new Date(),
    category: undefined,
    created_at: 0,
    created_unixtime: 0,
    updated_at: 0,
    updated_unixtime: 0,
  },
})

const categoriesRef = ref<Category[]>()

const fetchData = async () => {
  categoriesRef.value = await RepositoryFactory.Category.getCategories().then((result) => {
    if (result.error) {
      console.error(result.error)
    }
    return result.data.categories
  })
}

useAsyncData('data', async () => {
  await fetchData()
})

if (typeof route.params?.id === 'string') {
  state.form = await RepositoryFactory.Post.getPost({ id: route.params.id, }).then(result => result.data.post)
}
</script>

<template>
  <div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submitCategory">
      <div v-if="isEdit" class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">ポストID</label>
        <input
          id="id"
          v-model="state.form.id"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          disabled
          placeholder="category id"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">ポストタイトル</label>
        <input
          id="title"
          v-model="state.form.title"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          type="text"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="category">親カテゴリー</label>
        <select
          id="category"
          v-model="state.form.category"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option v-for="(category, index) in categoriesRef" :key="index" :value="category">
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
    <EditorInput :post-content="state.form.content" />
  </div>
</template>
