<template>
  <div class="contents">
    <slot name="default"></slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs,provide, getCurrentInstance,defineExpose } from 'vue';
import type {checkboxValueType} from './Checkbox.vue'

interface checkboxGroupInterface{
  modelValue:checkboxValueType[],
  disabled?:boolean,
  inline?:boolean
}
interface checkboxGroupEmitInterface{
  (e:'update:modelValue',value:any):void,
  (e:'change',value:checkboxValueType[]):void
}

let props = withDefaults(defineProps<checkboxGroupInterface>(),{
  disabled:false,
  inline:true
})

let emit = defineEmits<checkboxGroupEmitInterface>()

toRefs(props)

provide<boolean>('hasCheckboxGroup',true)



let setCheckbox = (name:checkboxValueType)=>{
  if(!props.disabled){
    let value:checkboxValueType[] = JSON.parse(JSON.stringify(props.modelValue))
    let index = value.findIndex((v)=>v==name)
    if(index==-1){
      value.push(name)
    }else{
      value.splice(index, 1)
    }
    emit('change',value)
    emit('update:modelValue',value)
  }
}

provide('setCheckbox',setCheckbox)

let instance = getCurrentInstance()

provide('getCheckboxGroup',instance)

defineExpose({setCheckbox})

</script>

<style scoped>

</style>