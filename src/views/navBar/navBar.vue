<template>
  <div class="smart-bg-full">
    
    <sm-nav-bar @left-click="leftClick" :title="'SmartisanUI'">
      <template #right>
        <div  @click="rightClick">❤</div>
      </template>
    </sm-nav-bar>
    
    <sm-nav-bar class="mt-5" :showLeft="false" :fixed="false" :title="'哎呦喂'"></sm-nav-bar>

    <sm-nav-bar class="mt-5" :fixed="false" :title="'哎呦喂'">
      <template #left>
        左侧自定义
      </template>
    </sm-nav-bar>

    <sm-nav-bar class="mt-5"  :showLeft="false" :fixed="false" :title="'哎呦喂'">
      <template #right>
        右侧自定义
      </template>
    </sm-nav-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let leftClick = (e:PointerEvent)=>{
  console.log(e)
}

let rightClick = (e:MouseEvent)=>{
  console.log(e)
}

</script>

<style scoped>

</style>