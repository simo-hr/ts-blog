<template>
  <div>
    <AtomLabel :for="id" :class="labelClass" :style="labelStyle" :label-name="labelName" />
    <AtomSelect
      :id="id"
      v-model:model-value="state.value"
      :type="selectSectionProps.type"
      :placeholder="placeholder"
      :class="selectSectionProps.class"
      :style="style"
      :required="required"
      :select-items="selectItems"
      :select-value="selectValue"
      :select-text="selectText"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { EventHandler, } from '~/types/event'

type SelectSectionProps = {
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
  selectItems: unknown[]
  selectValue: string
  selectText: string
}

const selectSectionProps = withDefaults(defineProps<SelectSectionProps>(), {
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
  value: selectSectionProps.modelValue,
})

type Emits = {
  (e: 'update:modelValue', value: string | number): void
}

const emit = defineEmits<Emits>()
const handleInput: EventHandler = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
