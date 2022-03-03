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
    <OrganismForm />
    <form class="form" @submit.prevent="submitCategory">
      <div v-if="isEdit" class="mb-4">
        <label class="form-label" for="name">ポストID</label>
        <input
          id="id"
          v-model="state.form.id"
          class="form-input"
          disabled
          placeholder="category id"
        />
      </div>
      <div class="mb-4">
        <label class="form-label" for="title">ポストタイトル</label>
        <input
          id="title"
          v-model="state.form.title"
          class="form-input"
          required
          type="text"
        />
      </div>
      <div class="mb-6">
        <label class="form-label" for="category">親カテゴリー</label>
        <select
          id="category"
          v-model="state.form.category"
          class="form-select"
        >
          <option v-for="(category, index) in categoriesRef" :key="index" :value="category">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="create-or-update-button"
          type="submit"
        >
          {{ props.isEdit ? '更新' : '新規' }}
        </button>
      </div>
    </form>
    <EditorInput :post-content="state.form.content" />
  </div>
</template>
