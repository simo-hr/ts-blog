<script setup lang="ts">
import { FormField, } from '@/types/form'
import { PostData, Category, } from '@/types'
import { BASE_PATH, } from '@/utils/const'

const route = useRoute()
const router = useRouter()

type Props = {
  isEdit?: boolean
}

const props = defineProps<Props>()

type State = {
  form: PostData
}

const state: State = reactive({
  form: {
    id: '',
    title: '',
    content: '',
    is_published: false,
    category_id: '',
    published_at: 0,
  },
})

const formFieldsRef = ref<FormField[]>()
const categoriesRef = ref<Category[]>()

const submitForm = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { post, error, } = props.isEdit
    ? await usePost().postUpdateOne(state.form)
    : await usePost().postCreateOne({
      title: state.form.title,
      content: state.form.content,
      is_published: state.form.is_published,
      category_id: state.form.category_id,
      published_at: state.form.published_at,
    })
  if (error) {
    console.log(error)
    throw error
  }
  router.push(`${BASE_PATH}/posts`)
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
    const { post, error, } = await usePost().postById(route.params.id)
    if (error) {
      console.log(error)
      throw error
    }
    state.form = post
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
      id: 'title',
      name: 'title',
      labelName: 'タイトル',
      value: state.form.title,
      required: true,
      type: 'text',
    },
    {
      id: 'content',
      name: 'content',
      labelName: 'コンテント',
      value: state.form.content,
      required: true,
      type: 'text',
    },
    {
      id: 'category',
      name: 'category',
      labelName: 'カテゴリー',
      value: state.form.category_id,
      required: true,
      type: 'select',
      selectItems: categoriesRef.value,
      selectValue: 'id',
      selectText: 'name',
    }
  ]
})
</script>

<template>
  <div>
    <form class="form" @submit.prevent="submitForm">
      <OrganismForm v-model:form="state.form" :form-fields="formFieldsRef" />
      <div class="flex items-center justify-between">
        <button class="create-or-update-button" type="submit">
          {{ props.isEdit ? '更新' : '新規' }}
        </button>
      </div>
    </form>
  </div>
</template>
