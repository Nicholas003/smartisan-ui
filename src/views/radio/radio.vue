<template>
  <div class="smart-bg-full">
    <sm-nav-bar title="Radio"></sm-nav-bar>
    <SmCell class="mt-3" :title="'基础用法'"></SmCell>
    <div class="my-3">
      <sm-radio-group :disabled="disabled" v-model="value">
        <sm-radio class="ml-3" v-for="(item,index) in list" :key="index" :name="item">
          {{item}}
        </sm-radio>
      </sm-radio-group>
    </div>
    <SmCell class="mt-3" :title="'基础用法-行内'"></SmCell>
    <div class="m-3">
      <sm-radio-group inline v-model="value">
        <sm-radio :disabled="index==1&&disabled" class="ml-3" v-for="(item,index) in list" :key="index" :name="item">
          {{item}}
        </sm-radio>
      </sm-radio-group>
    </div>
    <SmCell class="mt-3" :title="'单元格组合'"></SmCell>
    <div class="mt-3">
      <sm-radio-group :disabled="disabled" @change="change" v-model="value">
        <SmCellGroup>
          <SmCell @click="value=item" clickable v-for="(item,index) in list" :key="index" :title="item">
            <template #right>
              <sm-radio :checked-color="'red'" :name="item" />
            </template>
          </SmCell>
        </SmCellGroup>
      </sm-radio-group>
    </div>
    <SmCell class="mt-3" :title="'disabled'">
      <template #right>
        <SmSwitch v-model="disabled" />
      </template>
    </SmCell>
  </div>
</template>

<script setup lang="ts">


import { ref } from "vue";

let value = ref<string>('吉他')

let disabled = ref<boolean>(false);

let list = [
  '吉他',
  '架子鼓',
  '贝斯'
]

// let value = disabled.value
// setInterval(()=>{
//   disabled.value = !disabled.value
// },10000)

let change = (name:any)=>{
  console.log(name)
}
</script>

<style scoped>
</style>