<template>
  <div class="smart-bg-full">
    <sm-nav-bar title="Checkbox"></sm-nav-bar>
    <Cell class="mt-0" :title="'基础用法'"></Cell>
    <div class="m-3">
      <checkbox :disabled="disabled" v-model="one">是否同意用户协议</checkbox>
    </div>
    <Cell class="mt-0"  :title="'CheckboxGroup组合'">
      <template #right>
        <checkbox v-model="inline">inline</checkbox>
      </template>
    </Cell>
    <div class="m-3">
      <checkbox-group :disabled="disabled" :inline="inline" v-model="value">
        <checkbox :name="'吉他'">
          吉他
        </checkbox>
        <checkbox :name="'贝斯'">
          贝斯
        </checkbox>
      </checkbox-group>
    </div>
    <Cell class="mt-0"  :title="'单元格组合+自定义颜色'">
      <template #right>
        <checkbox v-model="disabled">disabled</checkbox>
      </template>
    </Cell>
    <checkbox-group :disabled="disabled" ref="checkboxGroup" v-model="value">
      <Cell @click="setCheckbox(item)" clickable v-for="(item,index) in list" :key="index" :title="item">
        <template #right>
          <checkbox :checked-color="'red'" :name="item" />
        </template>
      </Cell>
    </checkbox-group>
    <Cell class="mt-3"  :title="'自定义图标内容'">
      <template #right>
        <checkbox v-model="disabled">
            <template #icon="{row:{active}}">
              <star class="start" :theme="active?'filled':'outline'" size="20" :strokeWidth="3" strokeLinecap="butt"/>
            </template>
          </checkbox>
      </template>
    </Cell>
  </div>
</template>

<script setup lang="ts">
import CheckboxGroup from "@/components/Checkbox/CheckboxGroup.vue";
import Checkbox, {
  checkboxValueType,
} from "@/components/Checkbox/Checkbox.vue";
import Cell from "@/components/Cell/Cell.vue";
import { User,Star } from "@icon-park/vue-next";
import { onMounted, ref } from "vue";

let value = ref<string[]>([]);

let one = ref<boolean>(true);

let inline = ref<boolean>(false);

// let disabled = ref<boolean>(false)
// disabled.value

console.log(CheckboxGroup);

let checkboxGroup = ref<Record<string, any>>({});

let setCheckbox = (name: checkboxValueType) => {
  checkboxGroup.value.setCheckbox(name);
};

let change = (e: any[]) => {
  console.log(e);
};

// let value = ref<string>('吉他')

let disabled = ref<boolean>(false);

let list = ["吉他", "架子鼓", "贝斯"];
</script>

<style lang="scss" scoped>

.start{
  color: $yello;
}

</style>