<template>
  <div class="smart-switch" :style="style" @click="change" :class="{'active':modelValue,disabled}">
    <div class="base">
      <div class="lamp con"></div>
      <div class="close-sunken con"></div>
    </div>
    <div class="handle">
      <div class="sunken"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';

interface switchInterface{
  size?:string;
  color?:string;
  modelValue:boolean;
  disabled?:boolean;
}
interface switchEmitInterface{
  (e:'update:modelValue',value:boolean):void,
  (e:'change',value:boolean):void,
}

let props = withDefaults(defineProps<switchInterface>(),{
  size:'20px',
  color:'#587de6e3',
  disabled:false
});

toRefs(props)

let style = computed(()=>`--switch-height:${props.size};--color:${props.color}`)

let emit = defineEmits<switchEmitInterface>()

let change = ()=>{
  if(!props.disabled){
    emit('change',!props.modelValue)
    emit('update:modelValue',!props.modelValue)
  }
}

</script>

<style lang="scss" scoped>
.smart-switch{
  @apply relative overflow-hidden rounded-full transition-all;
  --switch-height:25px;
  --switch-width:calc(var(--switch-height) * 2.6);
  --color:#587de6e3;
  height: var(--switch-height);
  width: var(--switch-width);
  &.disabled{
    @apply opacity-50;
  }
  .base{
    @apply border rounded-full shadow-inner shadow-gray-200  absolute w-full h-full;
    background: $white;
    z-index: 15;
    .con{
      @apply absolute shadow-xl shadow-black top-1/2 rounded-full transition-all;
    }
    .lamp{
      @apply opacity-0;
      width: calc(var(--switch-height) * 0.3);
      height: calc(var(--switch-height) * 0.3);
      transform: translate(-50%,-50%);
      left: calc(var(--switch-height) * -1);
      background: var(--color);
      box-shadow:0px 0px calc(var(--switch-height) * 0.08) calc(var(--switch-height) * 0.02)  var(--color);
    }
    .close-sunken{
      width: calc(var(--switch-height) * 0.3);
      height: calc(var(--switch-height) * 0.3);
      transform: translate(50%,-50%);
      right: calc(var(--switch-height) * 0.5);
      box-shadow: inset -2px -2px 8px #e1e1e1,
            inset 2px 2px 8px #ffffff;
    }
  }
  
  .slider{
    z-index: 10;
    @apply absolute right-0 rounded-full top-0 bottom-0 transition-all;
    width: calc(var(--switch-width) * 2 - var(--switch-height));
    background: rgba(218, 79, 79, 0.351);
  }
  .handle{
    @apply absolute border opacity-100 rounded-full left-0 transition-all flex justify-center items-center;
    z-index: 20;
    background: $white;
    width: calc(var(--switch-height) * 1.0);
    height: calc(var(--switch-height) * 1.0);
    .sunken{
      @apply rounded-full;
      box-shadow: inset calc(var(--switch-height) * 0.1) calc(var(--switch-height) * 0.1) calc(var(--switch-height) * 0.4) #e1e1e1,
            inset calc(var(--switch-height) * -0.1) calc(var(--switch-height) * -0.1) calc(var(--switch-height) * 0.4)  #ffffff;
      width: calc(var(--switch-height) * 0.45);
      height: calc(var(--switch-height) * 0.45);
    }
  }
  &.active{
    .slider{
      // @apply ;
      right: calc((var(--switch-width) - var(--switch-height)) * -1);
    }
    .handle{
      // @apply left-10;
      left: calc(var(--switch-width) - var(--switch-height));
      
    }
    .lamp{
      @apply opacity-100;
      left: calc(var(--switch-height) * 0.5);
    }
    .close-sunken{
      @apply opacity-0;
      right: calc(var(--switch-height) * -1);
    }
  }
}
</style>