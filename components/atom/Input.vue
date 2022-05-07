<template>
  <div>
    <input
      :id="id"
      :value="modelValue"
      :type="inputProps.type"
      :placeholder="`${inputProps.placeholder}`"
      :class="`${inputProps.class} form-input`"
      :style="`${inputProps.style}`"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { EventHandler, } from '~/types/event'

type InputProps = {
  id: string
  modelValue: string | number
  type: string
  placeholder?: string
  class?: string
  style?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
}

const inputProps = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  class: '',
  style: '',
  disabled: false,
  readonly: false,
  required: false,
})

type Emits = {
  (e: 'update:modelValue', value: string): void
}
const emit = defineEmits<Emits>()

const handleInput: EventHandler = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
