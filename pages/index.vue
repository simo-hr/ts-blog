<template>
  <div>
    {{ id }}
  </div>
</template>

<script setup>
import { RepositoryFactory, } from '@/api/gql/repositories/index'
const result = await RepositoryFactory.Post.getPost({ id: '1', })
console.log(result.data)
</script>
