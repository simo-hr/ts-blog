<template>
  <div>
    <AtomLabel :for="id" :class="labelClass" :style="labelStyle" :label-name="labelName" />
    <AtomInput
      :id="id"
      v-model:model-value="state.value"
      :type="inputSectionProps.type"
      :placeholder="placeholder"
      :class="inputSectionProps.class"
      :style="style"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { EventHandler, } from '~/types/event'

type InputSectionProps = {
  id: string
  modelValue: string | number
  type: string
  placeholder?: string
  class?: string
  style?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  labelName: string
  labelClass?: string
  labelStyle?: string
}

const inputSectionProps = withDefaults(defineProps<InputSectionProps>(), {
  placeholder: '',
  class: '',
  style: '',
  disabled: false,
  readonly: false,
  required: false,
  labelClass: '',
  labelStyle: '',
})

type State = {
  value: string | number
}
const state: State = reactive({
  value: inputSectionProps.modelValue,
})

type Emits = {
  (e: 'update:modelValue', value: string | number): void
}

const emit = defineEmits<Emits>()
const handleInput: EventHandler = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
