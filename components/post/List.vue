<script setup lang="ts">
import { RepositoryFactory, } from '@/api/gql/repositories'
import { Post, } from '@/types'

const postsRef = ref<Post[]>()

const fetchData = async () => {
  postsRef.value = await RepositoryFactory.Post.getPosts().then(result => result.data.posts)
}
useAsyncData('data', async () => {
  await fetchData()
})
</script>

<template>
  <div>
    <nuxt-link to="/posts/new">
      新規作成
    </nuxt-link>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">
            #
          </th>
          <th class="px-4 py-2">
            ポストID
          </th>
          <th class="px-4 py-2">
            タイトル
          </th>
          <th class="px-4 py-2">
            コンテント
          </th>
          <th class="px-4 py-2">
            公開/非公開
          </th>
          <th class="px-4 py-2">
            公開日
          </th>
          <th class="px-4 py-2">
            作成日
          </th>
          <th class="px-4 py-2">
            更新日
          </th>
          <th class="px-4 py-2">
            編集
          </th>
          <th class="px-4 py-2">
            削除
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in postsRef" :key="index">
          <td class="border px-4 py-2">
            {{ index + 1 }}
          </td>
          <td class="border px-4 py-2">
            {{ post.id }}
          </td>
          <td class="border px-4 py-2">
            {{ post.title }}
          </td>
          <td class="border px-4 py-2">
            {{ post.content }}
          </td>
          <td class="border px-4 py-2">
            {{ post.is_published }}
          </td>
          <td class="border px-4 py-2">
            {{ post.published_at }}
          </td>
          <td class="border px-4 py-2">
            {{ post.created_at }}
          </td>
          <td class="border px-4 py-2">
            {{ post.updated_at }}
          </td>
          <td class="border px-4 py-2">
            <nuxt-link :to="`/posts/edit/${post.id}`">
              <button type="button">
                <i class="" role="img" aria-label="編集する"></i>
                編集する
              </button>
            </nuxt-link>
          </td>
          <td class="border px-4 py-2">
            <button type="button" @click="handleDeleteDoc(index)">
              <i class="" role="img" aria-label="削除する"></i>
              削除する
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
