<template>
  <div>
    <select
      :id="id"
      :value="modelValue"
      :placeholder="`${props.placeholder}`"
      :class="`${props.class} form-select`"
      :style="`${props.style}`"
      :required="required"
      @input="handleInput"
    >
      <template v-for="(item, index) in selectItems" :key="index">
        <option :value="item[selectValue]">
          {{ item[selectText] }}
        </option>
      </template>
    </select>
  </div>
</template>

<script setup lang="ts">
import { EventHandler, } from '~/types/event'

type Props = {
  id: string
  modelValue: string | number
  placeholder?: string
  class?: string
  style?: string
  required?: boolean
  selectItems: any[]
  selectValue: string
  selectText: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  class: '',
  style: '',
  required: false,
})

type Emits = {
  (e: 'update:modelValue', value: string): void
}
const emit = defineEmits<Emits>()

const handleInput: EventHandler = (e) => {
  console.log('e:', e)
  emit('update:modelValue', e.target.value)
}
</script>
