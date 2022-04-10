<template>
  <div class="radio-father" :class="{inline}">
      <div class="radio" :class="{disabled}" @click.stop="setCheckbox">
        <slot name="icon" :row="{active,disabled}">
          <div class="check" :style="`${checkedColor?'--sm-active-color':''}:${checkedColor}`" :class="{active}">
            <span class="icon">
              <check-small stroke-linecap="butt" :stroke-width="5" />
            </span>
          </div>
        </slot>
      <div class="text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckSmall } from "@icon-park/vue-next";
import { toRefs, inject, computed, ComponentOptions,ref } from "vue";

export type checkboxValueType = number|string

interface checkboxInterface {
  name?: checkboxValueType;
  checkedColor?: string,
  disabled?:boolean,
  modelValue?:undefined|boolean
}

interface checkboxInterface{
  (e:'update:modelValue',value:boolean):void
  (e:'change',value:boolean):void
}

let props = withDefaults(defineProps<checkboxInterface>(), {
  checkedColor:"",
  disabled:false,
  modelValue:undefined
});

toRefs(props);

if(props.modelValue!==undefined&&props.name!==undefined){

  throw new Error('不能同时传入v-model和name')

}

let emit = defineEmits<checkboxInterface>()

let hasGroup = props.modelValue===undefined  //没传modelValue表示有父组织

let checkboxGroupInstanceProps:Record<string,any> = {}

let setCheckboxInject:(name:any)=>void;

let getCheckboxGroupInstance;

let disabled = computed(()=>props.disabled)

let inline = computed(()=>hasGroup?false:'')

if(hasGroup){
  
  setCheckboxInject = inject('setCheckbox') as (name:any)=>void

  getCheckboxGroupInstance = inject('getCheckboxGroup') as ComponentOptions || {}

  checkboxGroupInstanceProps = getCheckboxGroupInstance.props || {}

  disabled = computed(()=>checkboxGroupInstanceProps.disabled || props.disabled)

  inline = computed(()=>checkboxGroupInstanceProps.inline)

}

let aloneChangeCheckbox = ()=>{

  if(!props.disabled){

    emit('change',!props.modelValue)

    emit('update:modelValue',!props.modelValue)

  }

}

let groupChangeCheckbox = ()=>{
  setCheckboxInject(props.name)
}

let active = computed(()=>{
  if(hasGroup){
    return (checkboxGroupInstanceProps).modelValue.includes(props.name) 
  }else{
    return props.modelValue
  }
})

let setCheckbox = hasGroup?groupChangeCheckbox:aloneChangeCheckbox

</script>

<style lang="scss" scoped>
.radio-father{
  @apply mt-2;
  &:first-child{
    @apply mt-0
  }
  &.inline{
    @apply inline-block ml-2 mt-0;
    &:first-child{
      @apply ml-0
    }
  }
}

.radio {
  @apply flex items-center;
  
  .check {
    @apply w-5 h-5 flex items-center 
    justify-center rounded-full 
    shadow-inner
    text-white
    text-lg
    relative
    border;
    --sm-active-color:#{$blue};
    &.active {
      @apply border-none;
      background:var(--sm-active-color);
    }
    // border-color: $blue;

    .icon {
      @apply absolute;
      transform: translate(-2%, 1%);
    }
  }
  &.disabled{
    @apply cursor-not-allowed;
    .check{
      @apply text-black text-opacity-10 shadow-none ;
    }
    .text{
      @apply text-opacity-30;
    }
    .active{
      @apply bg-black bg-opacity-10;
    }
    
  }
  .text{
    @apply text-black text-opacity-70 ml-1 text-sm
  }
}
</style>