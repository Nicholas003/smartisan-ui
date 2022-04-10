<template>
  <div class="cell-group" :class="{'border-solid-t-05':showTopBorder}" ref="slotRef">
    <slot ></slot>
  </div>
</template>

<script setup lang="ts">
interface cellGroupInterface{
  showTopBorder?:boolean
}

let props = withDefaults(defineProps<cellGroupInterface>(),{
  showTopBorder:false
})

</script>

<style lang="scss" scoped>
.cell-group{
  &:deep(.title){
    &:first-child::after{
      display: none;
    }
  }
}
// &:deep(.form-item)
</style>