<template>
  <div>
    {{ state.post }}
    {{ state.admin }}
  </div>
</template>

<script setup lang="ts">
import { Post, } from '@/types'
import { RepositoryFactory, } from '@/api/gql/repositories/index'
type State = {
  post: Post
}
const state: State = reactive({
  post: {
    id: '',
    title: '',
  },
})

const result1 = await RepositoryFactory.Post.getPost({ id: '620126c9b6e69ae10d0ab1d3', })
state.post = result1.data
</script>
