<template>
  <div class="smart-bg-full">
    <sm-nav-bar :title="'颜色'"></sm-nav-bar>

    <div class="flex-center flex-col">
      <div class="w-14 h-14 flex-center shadow-inner mt-5 text-gray-700 mx-3" :class="item" :key="index" v-for="(item,index) in colorList">
          <!-- {{item}} -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let colorList = [
  'smart-bg-blue',
  'smart-bg-red',
  'smart-bg-yello',
  'smart-bg-green',
  'smart-bg-white'
]
</script>

<style scoped>

/* --red: #d44d44;

	--blue: #5b87ec;
	--green: #8aad37;

	--orange: #e2a847; */
</style>