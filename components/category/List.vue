<script setup lang="ts">
import { RepositoryFactory, } from '@/api/gql/repositories'
import { Category, } from '@/types'
type State = {
  categories: Category[]
}
const state: State = reactive({
  categories: [],
})

state.categories = await RepositoryFactory.Category.getCategories().then(result => result.data.categories)

const handleDeleteDoc = () => {
  console.log('削除処理')
}
</script>

<template>
  <div>
    <nuxt-link to="/categories/new">
      新規作成
    </nuxt-link>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">
            #
          </th>
          <th class="px-4 py-2">
            カテゴリーID
          </th>
          <th class="px-4 py-2">
            親カテゴリー
          </th>
          <th class="px-4 py-2">
            カテゴリー名
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
        <tr v-for="(category, index) in state.categories" :key="index">
          <td class="border px-4 py-2">
            {{ index + 1 }}
          </td>
          <td class="border px-4 py-2">
            {{ category.id }}
          </td>
          <td class="border px-4 py-2">
            {{ category.parent_category_id }}
          </td>
          <td class="border px-4 py-2">
            {{ category.name }}
          </td>
          <td class="border px-4 py-2">
            {{ category.updated_at }}
          </td>
          <td class="border px-4 py-2">
            <nuxt-link :to="`/categories/edit/${category.id}`">
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
