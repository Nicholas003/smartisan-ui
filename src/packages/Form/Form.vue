<template>
  <div class="smart-form">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {getCurrentInstance,provide} from 'vue'
import type {labelAlignType} from './FormItem.vue'
interface formInterface{
  // readonly?:boolean,
  labelAlign?:labelAlignType;
  disabled?:boolean;
}

let props = withDefaults(defineProps<formInterface>(),{
  // readonly:false,
  disabled:false,
  labelAlign:undefined
})

let instance = getCurrentInstance()

// instance?.data

provide('smart-form',instance)

</script>

<style lang="scss" scoped>
.smart-form{
  @apply rounded-lg border shadow-inner bg-white;
  min-height: 44px;
  &:deep(.form-item) {
    &::before{
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -0.6px;
      background: #ebebeb;
      transform: scaleY(.6);
      transform-origin: 0 0;
      z-index: 100;
    }
    &:last-child::before{
      display: none;
    }
  }
  
}

</style>