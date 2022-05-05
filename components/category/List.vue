<script setup lang="ts">
import { useCategory, } from '../../composables/useCategory'
import { Category, } from '@/types'
import { unixtimeToFormatDatetime, } from '@/utils/functions/day'

const categoriesRef = ref<Category[]>([])

const fetchData = async () => {
  const { categories, error, } = await useCategory().categoryAll({
    limit: 2,
    sort: { updated_unixtime: -1, },
  })
  if (error) {
    console.log(error)
    throw error
  }
  categoriesRef.value = categories
  console.log('🚀 ~ categories', categories)
}

useAsyncData('data', async () => {
  await fetchData()
})

const deleteCategory = async (index) => {
  const { error, } = await useCategory().categoryDelete(categoriesRef.value[index].id)
  if (error) {
    console.log(error)
    throw error
  }
  await fetchData()
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
        <tr v-for="(category, index) in categoriesRef" :key="index">
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
            {{ unixtimeToFormatDatetime(category.created_unixtime) }}
          </td>
          <td class="border px-4 py-2">
            {{ unixtimeToFormatDatetime(category.updated_unixtime) }}
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
            <button type="button" @click="deleteCategory(index)">
              <i class="" role="img" aria-label="削除する"></i>
              削除する
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
