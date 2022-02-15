<template>
  <div>
    <CategoryEdit />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
</script>
