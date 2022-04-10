<template>
  <div class="smart-bg-full">
    <sm-nav-bar :title="'标签页'"></sm-nav-bar>
    <Tabs ref="TabsRef" v-model:active="active">
      <Tab v-for="(item,index) in list" :key="index" :title="item" :name="item">
        666
      </Tab>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import Tab from '@/components/Tab/Tab.vue';
import Tabs from '@/components/Tab/Tabs.vue';
import { onMounted, ref } from 'vue';

let active = ref<any>('商品')
// console.log(Tabs)

let TabsRef = ref<any>()

let list = ref<string[]>(
  [
    '商品',
    '评价',
    '详情'
  ]
)


// list.value.push('489')
// setTimeout(()=>{
// active.value = 3
// },1000)




</script>

<style lang="scss" scoped>
</style>