<template>
  <div class="stepper">
    <button class="minus" :disabled="numValue<=min||disabled"  @click="minusClick">
      <minus class="icon" theme="filled"  fill="#333" :strokeWidth="3" strokeLinecap="butt"/>
    </button>
    <div class="num" :style="{width}">
      <input  class="input" v-if="!disabled&&!inputDisabled" type="number"  @blur="inpuBlur" v-model="numValue"/>
      <div class="input" v-else>{{numValue}}</div>
    </div>
    <button :disabled="numValue>=max||disabled"  class="plus" @click="plusClick">
      <plus class="icon" theme="filled"  fill="#333" :strokeWidth="3" strokeLinecap="butt"/>
    </button>
    <!-- <plus theme="filled" size="24" fill="#333" :strokeWidth="1" strokeLinecap="butt"/> -->
  </div>
</template>

<script setup lang="ts">
import { Minus,Plus } from '@icon-park/vue-next';
import { computed, toRefs,ref, watch } from 'vue';
// import {add} from 'lodash-es'
import BigNumber from 'bignumber.js'

type modelValueType = string|number;

interface stepperInterface {
  disabled?: boolean;
  inputDisabled?:boolean;
  modelValue: modelValueType;
  step?:number,
  max?:number,
  min?:number,
  width?:string,
  integer?:boolean,  //是否整数
}

interface emitInterface{
  (e:'update:modelValue',value:number|string):void
}

let props = withDefaults(defineProps<stepperInterface>(),{
  disabled:false,
  step:1,
  inputDisabled:false,
  max:Infinity,
  min:0,
  width:'50px',
  integer:false,
})

let refProps = toRefs(props)

let emit = defineEmits<emitInterface>()

let numValue = ref<modelValueType>(refProps.modelValue.value);

watch(numValue,(newValue,oldValue)=>{
  
  let v = numValue.value;
  if(refProps.integer.value){
    v = Number(String(numValue.value).replace(/[^0-9]/g,''))
  }
  upModelValue(v)
})

watch(refProps.modelValue,(newValue)=>{
  upModelValue(newValue)
})

let upModelValue = (v:modelValueType)=>{
  let {min,max} = refProps
  let nv = v
  if(numValue.value<min.value){
    nv = min.value
  }
  if(numValue.value>max.value){
    nv = max.value
  }
  numValue.value = nv
  emit('update:modelValue',nv)

}

let inpuBlur = ()=>{
  // let {max,min} = refProps
  // if(numValue.value<min.value){
  //   return upModelValue(min.value)
  // }
  // if(numValue.value>max.value){
  //   return upModelValue(max.value)
  // }
  upModelValue(numValue.value)
}

inpuBlur()


let plusClick = ()=>{
  let {modelValue,step} = refProps

  let newValue:modelValueType = Number(BigNumber.sum(modelValue.value,step.value))

  upModelValue(newValue)
}

let minusClick = ()=>{
  let {modelValue,step} = refProps

  let num = new BigNumber(modelValue.value)

  let newValue:number = Number(num.minus(step.value))

  upModelValue(newValue)
}

</script>

<style lang="scss" scoped>
.stepper{
  @apply flex items-center;
  .num{
    @apply text-center;
    .input{
      width: 100%;
      text-align: center;
      &[disabled]{
        @apply text-black bg-white;
      }
    }
  }
  .minus,.plus{
    @apply h-5 w-5 shadow rounded-full relative active:shadow-inner;
    .icon{
      @apply absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2;
      // text-align: center;
    }
    &[disabled]{
      @apply shadow-none bg-gray-100
    }
  }
}
</style>