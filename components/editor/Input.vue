<script setup lang="ts">

type Props = {
  postContent: string
}
const props = defineProps<Props>()

</script>
<template>
  <!-- <textarea id="postContent" v-model="props.postContent" name="postContent" cols="30" rows="10"> </textarea> -->
  <div>
    {{ props.postContent }}
  </div>
</template>
