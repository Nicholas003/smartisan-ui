<template>
  <div class="smart-bg-two-full">
    <sm-nav-bar :title="'按钮'">
      <template #left>
        <SmartButton :size="'small'">
        <div class="flex items-center">
          <div>返回</div>
        </div>
        </SmartButton>
      </template>
    </sm-nav-bar>
    
    <Cell class="mt-0" :title="'普通按钮'"></Cell>

    <div>
      <SmartButton @click="handleClick"   class="m-3" :type="'primary'">基础颜色</SmartButton>
      <SmartButton class="m-3" loading :type="'success'">成功颜色</SmartButton>
      <SmartButton class="m-3" :type="'default'">普通颜色</SmartButton>
      <SmartButton class="m-3" :type="'warning'">警告颜色</SmartButton>
      <SmartButton class="m-3" :type="'danger'">危险颜色</SmartButton>
    </div>

    
    <div>
      <div class=" ">
        <SmartButton 
        class="m-3"
        v-for="(item,index) in typeList" 
        :key="index" 
        
        :type="item">
          订阅内容
        </SmartButton>
      </div>

      <div class="m-3">
        <div :key="index" v-for="(item,index) in sizeList">
          <SmartButton 
            class="mt-6"
            :type="'primary'"
            :size="item"
            
            
            >
              哈哈
            </SmartButton>
        </div>
      </div>

      <div class=" ">
        <SmartButton 
        class="m-3"
        v-for="(item,index) in typeList" 
        :key="index" 
        line
        loading
        
        :type="item">
          订阅内容
        </SmartButton>
      </div>

      <div class=" ">
        <SmartButton 
        class="m-3"
        v-for="(item,index) in typeList" 
        :key="index" 
        
        loading
        round
        :type="item">
          订阅内容
        </SmartButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SmartButton,{buttonType,buttonSizeType} from "@/components/Button/Button.vue"
import Cell from "@/components/Cell/Cell.vue"
import { Left } from "@icon-park/vue-next";
import { ref } from "vue";
let typeList:buttonType[] = [
  "default",
  "primary",
  "success",
  "warning",
  "danger"
]
let sizeList:buttonSizeType[]=[
  "large",
  "normal",
  "small",
  "mini",
]

let block = ref<boolean>(false)
let index = 3
let type  = ref<buttonType>(typeList[index])
let size  = ref<buttonSizeType>(sizeList[index])
let handleClick = ()=>{
  console.log(123)
}
// setInterval(()=>{
//   if(index++==typeList.length-1){
//     index = 0
//   }
//   type.value = typeList[index]
//   size.value =  sizeList[index]
// },1000)
</script>

<style lang="scss" scoped>

</style>