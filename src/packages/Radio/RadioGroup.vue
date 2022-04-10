<template>
  <div class="contents">
    <slot name="default"></slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs,provide, getCurrentInstance, watch } from 'vue';
import type {radioNameType} from './Radio.vue'
interface radioGroupInterface{
  modelValue:radioNameType,
  disabled?:boolean,
  inline?:boolean
}
interface radioGroupEmitInterface{
  (e:'change',value:any):void;
  (e:'update:modelValue',value:any):void
}

let props = withDefaults(defineProps<radioGroupInterface>(),{
  disabled:false,
  inline:false
})

let emit = defineEmits<radioGroupEmitInterface>()

let refProps = toRefs(props)

// watch(refProps.modelValue,(newVal,oldVal)=>{
//   console.log(newVal,oldVal)
// })

provide('setRadio',(name:any)=>{
  if(!props.disabled){
    emit('change',name)
    emit('update:modelValue',name)
  }
})

let instance = getCurrentInstance()

provide('getRadioGroup',instance)


</script>

<style scoped>

</style>