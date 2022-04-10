<template>
  <div class="h-screen w-screen bg-gray-100">
    <sm-nav-bar border :title="'switch'">
      
    </sm-nav-bar>
    <div class="mt-5 m-5">
      <div class="text-sm">基础用法</div>
      <div class="mt-3">
        <smart-switch v-model="value"/>
      </div>
    </div>
    <div class="mt-5 m-5">
      <div class="text-sm">禁用</div>
      <div class="mt-3">
        <smart-switch disabled v-model="value"/>
      </div>
    </div>
    <div class="mt-5 m-5">
      <div class="text-sm">自定义尺寸</div>
      <div class="mt-3">
        <smart-switch :size="'60px'" v-model="value"/>
      </div>
      <div class="mt-3">
        <smart-switch :size="'10px'" v-model="value"/>
      </div>
    </div>
    <div class="mt-5 m-5">
      <div class="text-sm">自定义颜色</div>
      <div class="mt-3">
        <smart-switch :color="'red'" v-model="value"/>
      </div>
    </div>
    <div class="mt-5">
      <div class="text-sm ml-5">组合使用</div>
      <div >
        <Cell class="mt-5 w-full" :title="'switch'"   >
          <template #right>
            <SmartSwitch :size="'25px'" v-model="value"/>
          </template>
        </Cell> 
      </div>
    </div>
    <!-- <Cell class="mt-5 w-full" :title="'带箭头的'"   >
      <template #right>
        <SmartSwitch disabled :size="'25px'" v-model="value"/>
      </template>
    </Cell> -->
    <!-- <SmartSwitch v-model="value"/> -->
  </div>

  
</template>

<script setup lang="ts">
import SmartSwitch from '@/components/Switch/Switch.vue';
import Cell,{cellArrowDirection} from "@/components/Cell/Cell.vue"
import { ref } from 'vue';

let value = ref<boolean>(true)

let change = (value:boolean)=>{
  console.log(value)
}
let onUpdateValue = (v:boolean)=>{
  console.log(v)
  // value.value = v
  // alert()
  value.value = v
}
</script>

<style scoped>

</style>