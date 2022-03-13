<template>
  <div>
    <div v-for="(field, index) in formProps.formFields" :key="index" class="mb-3">
      <template v-if="field.isVisible ? field.isVisible() : true">
        <MoleculeInputSection
          v-if="field.type === 'text'"
          :id="field.id"
          v-model:model-value="field.value"
          :type="field.type"
          :placeholder="field.placeholder"
          :class="field.class"
          :style="field.style"
          :disabled="field.disabled"
          :readonly="field.readonly"
          :required="field.required"
          :label-name="field.labelName"
          :label-class="field.labelClass"
          :label-style="field.labelStyle"
          @input="handleInput($event, field.name)"
        />
        <MoleculeSelectSection
          v-else-if="field.type === 'select'"
          :id="field.id"
          v-model:model-value="field.value"
          :type="field.type"
          :placeholder="field.placeholder"
          :class="field.class"
          :style="field.style"
          :required="field.required"
          :label-name="field.labelName"
          :label-class="field.labelClass"
          :label-style="field.labelStyle"
          :select-items="field.selectItems"
          :select-value="field.selectValue"
          :select-text="field.selectText"
          @input="handleInput($event, field.name)"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createObject, } from '~/utils/functions/object'
import { FormField, } from '@/types/form'
import { EventHandler, } from '~/types/event'

type FormProps = {
  form: object
  formFields: FormField[]
}

const formProps = defineProps<FormProps>()

type Emits = {
  (e: 'update:form', value: object): void
}
const emit = defineEmits<Emits>()

const handleInput: EventHandler = (e, fieldName, isCheckbox = false) => {
  if (isCheckbox) {
    const updatedForm = { ...formProps.form, ...createObject(fieldName.split('.'), e.target.checked), }
    emit('update:form', updatedForm)
  } else {
    const updatedForm = { ...formProps.form, ...createObject(fieldName.split('.'), e.target.value), }
    emit('update:form', updatedForm)
  }
}
</script>
