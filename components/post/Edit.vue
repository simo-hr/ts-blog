<template>
  <div>
    <p>
      {{ props.isEdit ? '更新' : '新規' }}
    </p>
    {{ state.post }}
  </div>
</template>

<script setup lang="ts">
import { RepositoryFactory, } from '@/api/gql/repositories'
import { Post, } from '@/types'
const route = useRoute()
type Props = {
  isEdit?: boolean
}
const props = defineProps<Props>()
type State = {
  post: Post
}
const state: State = reactive({
  post: {
    id: '',
    title: '',
    content: '',
    isPublished: false,
    publishedAt: new Date(),
    updatedAt: new Date(),
  },
})
if (typeof route.params?.id === 'string') {
  state.post = await RepositoryFactory.Post.getPost({ id: route.params.id, }).then(result => result.data)
}
</script>
