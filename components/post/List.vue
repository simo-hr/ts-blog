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
      is_published: false,
      published_at: new Date(),
      updated_at: new Date(),
    }
  ],
})
state.posts = await RepositoryFactory.Post.getPosts().then(result => result.data.posts)
console.log(state.posts)
</script>

<template>
  <div>
    <div v-for="(post, index) in state.posts" :key="index">
      <nuxt-link class="text-3xl" :to="`/posts/edit/${post.id}`">
        edit
      </nuxt-link>
      <p>{{ post.id }}</p>
      <p>{{ post.title }}</p>
      <p>{{ post.content }}</p>
      <p>{{ post.is_published }}</p>
      <p>{{ post.published_at }}</p>
      <p>{{ post.updated_at }}</p>
    </div>
  </div>
</template>
