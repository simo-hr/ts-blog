<script setup lang="ts">
import { FormField, } from '@/types/form'
import { Category, CategoryData, } from '@/types'
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

const categoriesRef = ref<Category[]>([])
const formFieldsRef = ref<FormField[]>([])

const router = useRouter()
const submitForm = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { category, error, } = props.isEdit
    ? await useCategory().categoryUpdateOne(state.form)
    : await useCategory().categoryCreateOne({
      name: state.form.name,
      parent_category_id: state.form.parent_category_id,
      posts: state.form.posts,
    })
  if (error) {
    console.log(error)
    throw error
  }
  router.push(`${BASE_PATH}/categories`)
}

const fetchData = async () => {
  const { categories, error, } = await useCategory().categoryAll()
  if (error) {
    console.log(error)
    throw error
  }
  categoriesRef.value = categories
}

useAsyncData('data', async () => {
  if (typeof route.params?.id === 'string') {
    const { category, error, } = await useCategory().categoryById(route.params.id)
    if (error) {
      console.log(error)
      throw error
    }
    state.form = category
  }
  await fetchData()
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
    },
    {
      id: 'parentCategoryId',
      name: 'parent_category_id',
      labelName: '親カテゴリー',
      value: state.form.parent_category_id,
      type: 'select',
      selectItems: categoriesRef.value,
      selectText: 'name',
      selectValue: 'id',
    }
  ]
})
</script>

<template>
  <div class="w-full max-w-xs">
    <form class="form" @submit.prevent="submitForm">
      <OrganismForm v-model:form="state.form" :form-fields="formFieldsRef" />
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
