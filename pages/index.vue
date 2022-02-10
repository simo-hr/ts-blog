<template>
  <div>
    {{ state.post }}
  </div>
</template>

<script setup lang="ts">
import { Post, } from '@/types'
import { RepositoryFactory, } from '@/api/gql/repositories/index'
type State = {
  post:Post
}
const state: State = reactive({
  post: {
    id: '',
    title: '',
  },
})

const result = await RepositoryFactory.Post.getPost({ id: '620126c9b6e69ae10d0ab1d3', })
state.post = result.data
</script>
