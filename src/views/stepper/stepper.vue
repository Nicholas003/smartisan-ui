<template>
  <div>
    <sm-nav-bar title="进步器"></sm-nav-bar>
    <CellGroup showTopBorder class="">

      <Cell title="正常使用">
        <template #right>
          <Stepper v-model="value1"/>
        </template>
      </Cell>

      <Cell title="设置最小最大值">
        <template #right>
          <Stepper  :min="-5" :max="10" v-model="value2"/>
        </template>
      </Cell>

      <Cell title="禁止输入">
        <template #right>
          <Stepper input-disabled  v-model="value3"/>
        </template>
      </Cell>

      <Cell title="只能输入整数">
        <template #right>
          <Stepper integer  v-model="value4"/>
        </template>
      </Cell>

      <Cell title="设置步长">
        <template #right>
          <Stepper :step="1.3" v-model="value5"/>
        </template>
      </Cell>

      <Cell title="disabled">
        <template #right>
          <Stepper disabled :step="1.3" v-model="value5"/>
        </template>
      </Cell>


    </CellGroup>
    
  </div>
</template>

<script setup lang="ts">
import Stepper from '@/components/Stepper/Stepper.vue';
import Cell from '@/components/Cell/Cell.vue';
import CellGroup from '@/components/Cell/CellGroup.vue';
import { ref } from 'vue';


let value1 = ref<number>(0)

let value2 = ref<number>(6)
let value3 = ref<number>(0)

let value4 = ref<number>(0)
let value5 = ref<number>(0)

</script>

<style lang="scss" scoped>



</style>