<script setup lang="ts">
import { FormField, } from '@/types/form'
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
    posts: [],
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
const submitForm = () => {
  if (props.isEdit) {
    RepositoryFactory.Category.updateCategory({
      category: {
        id: state.form.id,
        name: state.form.name,
        parent_category_id: state.form.parent_category_id,
        posts: state.form.posts,
      },
    }).then((result) => {
      if (result.error) {
        throw new Error(result.error.message)
      }
      return result.data.updateCategory
    })
  } else {
    RepositoryFactory.Category.createCategory({
      category: {
        name: state.form.name,
        parent_category_id: state.form.parent_category_id,
        posts: state.form.posts,
      },
    }).then((result) => {
      if (result.error) {
        throw new Error(result.error.message)
      }
      return result.data.createCategory
    })
  }
  router.push(`${BASE_PATH}categories`)
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
    id: 'name',
    name: 'name',
    labelName: '名前',
    value: state.form.name,
    required: true,
    type: 'text',
  }
]
</script>

<template>
  <div class="w-full max-w-xs">
    <form class="form" @submit.prevent="submitForm">
      <OrganismForm v-model:form="state.form" :form-fields="formFieldsRef" />
      <div class="mb-6">
        <label class="form-label" for="parentCategoryId">親カテゴリー</label>
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
          {{ props.isEdit ? '更新' : '登録' }}
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2022 simo. All rights reserved.
    </p>
  </div>
</template>
