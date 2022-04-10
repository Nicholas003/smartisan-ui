<template>
  <button
    class="smart-btn"
    :disabled="disabled"
    :class="[
      btnClass,
      { 'w-full': size == 'large', block: block, disabled: disabled,line:line,round:round },
    ]"
  >
    <div class="flex-center" :class="size">
      <div class="btn-text">
        <div class="flex items-center relative">
          <div class="animate-spin" v-if="loading">
            <LoadingOne size="10px" />
          </div>
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { LoadingOne } from '@icon-park/vue-next'
import { computed, ref, toRefs } from 'vue'

export type buttonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
export type buttonSizeType = 'large' | 'small' | 'mini' | 'normal'
enum buttonEnum {
  default = 'white',
  primary = 'blue',
  success = 'green',
  warning = 'yello',
  danger = 'red',
}

interface buttonInterface {
  type?: buttonType
  line?: boolean
  disabled?: boolean
  size?: buttonSizeType
  block?: boolean
  loading?: boolean,
  round?:boolean
}
let props = withDefaults(defineProps<buttonInterface>(), {
  type: 'default',
  line: false,
  disabled: false,
  size: 'normal',
  block: false,
  loading: false,
  round:false
})

let refProps = toRefs(props)

let btnClass = computed(() => buttonEnum[refProps.type.value])
</script>

<style lang="scss" scoped>
.smart-btn {
  @apply rounded-md
  text-xs
  font-bold
  relative;
  

  &:active{
    @apply shadow-inner opacity-70
  }
  
  &.round{
    @apply rounded-full ;
    &::after{
      @apply rounded-full;
    }
  }
  &.green{
    background: $green;
    
  }
  &.blue{
    background: $blue;
  }
  &.red{
    background: $red;
  }
  &.yello{
    background: $yello;
  }
  &.white{
    @apply text-black text-opacity-50;
    background: $white;
  }
  &.line{
    @apply border;
    &.green{
      border-color: $green;
      color:$green;
      background: $lightGreen;
      &::after{
        display: none;
      }
    }
    &.blue{
      border-color: $blue;
      color:$blue;
      background: $lightBlue;
      &::after{
        display: none;
      }
    }
    &.yello{
      border-color: $yello;
      color:$yello;
      background: $lightYello;
      &::after{
        display: none;
      }
    }
    &.red{
      border-color: $red;
      color:$red;
      background: $lightRed;
      &::after{
        display: none;
      }
    }
    &.white{
      @apply border-black border-opacity-40;
      background: $lightWhite;
      &::after{
        display: none;
      }
    }
  }
  .large {
    @apply text-lg h-12;
  }
  .normal {
    @apply px-5 h-9 text-base;
  }
  .small {
    @apply px-2.5 h-7;
  }
  .mini {
    @apply px-1.5 h-6;
  }
  .block {
    display: block;
  }
  &:not(.white) {
    color: #fff;
  }
  &::after {
    @apply rounded-xl;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transform-origin: 0 0;
    transform: scale(0.5, 0.5);
  }
  &[disabled] {
    @apply bg-opacity-40 opacity-40 shadow-none;
  }
}
</style>
