<template>
  <div>
    <label :for="labelProps.for" :class="`${labelProps.class} form-label`" :style="`${labelProps.labelStyle}`">
      {{ labelName }}
    </label>
  </div>
</template>

<script setup lang="ts">
type LabelProps = {
  for: string
  labelName: string
  labelClass?: string
  labelStyle?: string
}

const labelProps = withDefaults(defineProps<LabelProps>(), {
  labelClass: '',
  labelStyle: '',
})
</script>
