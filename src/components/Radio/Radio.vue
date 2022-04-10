<template>
  <div class="radio-father" :class="{inline}">
    <div class="radio" :class="{disabled}" @click.stop="setRadio">
      <slot name="icon" :row="{active}">
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
import { toRefs, inject, computed, ComponentOptions, } from "vue";
export type radioNameType = string | number
interface radioInterface {
  name: radioNameType;
  checkedColor?: string,
  disabled?:boolean
}

let props = withDefaults(defineProps<radioInterface>(), {
  checkedColor:"",
  disabled:false
});

toRefs(props);

let setRadioInject = inject('setRadio') as (name:radioNameType)=>void

let radioGropInstance = inject('getRadioGroup') as ComponentOptions

let radioGropProps = radioGropInstance.props

let disabled = computed(()=>radioGropProps.disabled || props.disabled)

let active = computed(()=>radioGropProps.modelValue==props.name)

let inline = computed(()=>radioGropProps.inline)

let setRadio = ()=>{
  if(!disabled.value){
    setRadioInject(props.name)
  }
}

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