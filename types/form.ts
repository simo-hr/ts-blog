export type DecisionFunction = (...arg: any[]) => boolean
export type FormField = {
  id: string
  name: string
  labelName: string
  value: string | number
  type: string
  placeholder?: string
  class?: string
  style?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  labelClass?: string
  labelStyle?: string
  isVisible?: DecisionFunction
  selectItems?: any[]
  selectValue?: string
  selectText?: string
}
