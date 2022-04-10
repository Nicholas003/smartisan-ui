<template>
  <div>
    <div class="smart-bg-full">
    <sm-nav-bar :title="'单元格'"></sm-nav-bar>
    <!-- <div class="active:bg-red-700">你好</div> -->
    
    <Cell class="mt-10" :title="'基本方法'">
      
    </Cell>


    
    <Cell class="mt-5" clickable :title="'点击反馈'" ></Cell>
    <Cell class="mt-5">
      <template #default>
        <span class="text-red-400">左侧slot</span>
      </template>
      <template #right>
        <span class="text-green-400">右侧slot</span>
      </template>
    </Cell>

    <Cell class="mt-5" :title="'带箭头的'"   showArrow>
      
    </Cell>
    <Cell class="mt-5" :title="'箭头指定方向旋转'" :value="'详情'"  showArrow :arrow-direction="arrowDirection">

    </Cell>
    <Cell class="mt-5" :title="'自定义label'" :value="'详情'" :label="'你好'" showArrow>

    </Cell>
    <Cell  :title="'123'" class="mt-5" :value="'详情'" showArrow>
      <template v-if="show" #label>
        <div class="bg-green-600">
          哈哈哈
        </div>
      </template>
    </Cell>
    <CellGroup class="m-3 rounded-md overflow-hidden" >
      <Cell clickable showArrow  v-for="(item,index) in 10" :key="index" :title="'使用CellGroup'+index" :value="'右侧文字'">

    </Cell>
    </CellGroup>
    <Cell :title="'自定义左侧内容'" class="mt-5" :value="'详情'" showArrow>
      <template #left-icon>
        <home stroke-linecap="butt" :stroke-width="5" />
      </template>
    </Cell>
    
  </div>
  </div>
</template>

<script setup lang="ts">
import CellGroup from "@/components/Cell/CellGroup.vue"
import Cell,{cellArrowDirection} from "@/components/Cell/Cell.vue"
import { Home } from "@icon-park/vue-next";
import { ref } from "vue";

console.log(Cell)

let arrowDirection = ref<cellArrowDirection>('right')
let list:cellArrowDirection[] = ['right','down','left','up']
let index = 0
let show = ref<boolean>(true)
setInterval(()=>{
  if(index++==list.length-1){
    index = 0
  }
  arrowDirection.value = list[index]
},1000)


</script>

<style scoped>

</style>