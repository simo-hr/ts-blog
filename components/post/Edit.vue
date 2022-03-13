<script setup lang="ts">
import { FormField, } from '@/types/form'
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

const formFieldsRef = ref<FormField[]>()
formFieldsRef.value = [
  {
    id: 'id',
    name: 'id',
    labelName: 'ID',
    type: 'text',
    value: state.form.id,
    readonly: true,
    isVisible: () => props.isEdit,
  },
  {
    id: 'title',
    name: 'title',
    labelName: 'タイトル',
    value: state.form.title,
    required: true,
    type: 'text',
  },
  {
    id: 'category',
    name: 'category',
    labelName: '親カテゴリー',
    value: state.form.content,
    required: true,
    type: 'select',
    selectItems: [
      { id: '1', name: 'name1', },
      { id: '2', name: 'name2', },
      { id: '3', name: 'name3', }
    ],
    selectValue: 'id',
    selectText: 'name',

  }
]
</script>

<template>
  <div>
    <form class="form">
      <OrganismForm v-model:form="state.form" :form-fields="formFieldsRef" />
      <label class="form-label" for="category">親カテゴリー</label>
      <select id="category" v-model="state.form.category" class="form-select">
        <option v-for="(category, index) in categoriesRef" :key="index" :value="category">
          {{ category.name }}
        </option>
      </select>
      <div class="flex items-center justify-between">
        <button class="create-or-update-button" type="submit">
          {{ props.isEdit ? '更新' : '新規' }}
        </button>
      </div>
    </form>
  </div>
</template>
