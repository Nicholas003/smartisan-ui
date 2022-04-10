<template>
  <div class="m-5 smart-form">
    <!-- {{disabled}} -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {getCurrentInstance,provide} from 'vue'
import {type labelAlignType} from './FormItem.vue'
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
  @apply shadow-inner border rounded-md overflow-hidden;
  &:deep(.form-item){
    @apply relative;
    .container{
      @apply shadow-none py-2.5 rounded-none border-none relative pl-0;
      .input-label{
        @apply hidden;
      }
    }
    .close-btn {
      @apply  mr-0;
    }
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
    // .form-item{
    &:last-child::before{
      display: none;
    }
    // }
    
    // border-bottom: solid 1px rgb(204, 204, 204);
    
    
    
    // &:deep(.input)
    // border-top: none;
    // .input{
    //   @apply border-b;
    // }
    // & .form-item{
    //   &:last-child{
    //     &::before{
    //       display: none;
    //     }
    //     // @apply border-b;
    //     // border-bottom: none;
    //   }
    // }
    // &:active{
    //   @apply bg-black;
    // }
  }
  
}

</style>