<script setup lang="ts">
import { RepositoryFactory, } from '@/api/gql/repositories'
import { Post, } from '@/types'
type State = {
  posts: Post[]
}
const state: State = reactive({
  posts: [
    {
      id: '',
      title: '',
      content: '',
      isPublished: false,
      publishedAt: new Date(),
      updatedAt: new Date(),
    }
  ],
})
state.posts = await RepositoryFactory.Post.getPosts().then(result => result.data.posts)
console.log(state.posts)
</script>

<template>
  <div>
    <div v-for="(post, index) in state.posts" :key="index">
      <p>{{ post.id }}</p>
      <p>{{ post.title }}</p>
      <p>{{ post.content }}</p>
      <p>{{ post.isPublished }}</p>
      <p>{{ post.publishedAt }}</p>
      <p>{{ post.updatedAt }}</p>
    </div>
  </div>
</template>
