<template>
  <div class="smart-bg-two-full py-10">
    <div class="flex justify-center">
      <img class="w-10 h-10" src="https://static.smartisanos.cn/tnt/assets/images/logo-carbon@2x.1c36190975dfff1328bfad3f848ba4a5.png"
        alt="">
    </div>
    <div class="text-center mt-3 text-gray-700">
      SmartisanUI
    </div>
    <div class="text-center text-xs mt-3 text-gray-400">
      彪悍的人生不需要解释
    </div>
    <div class="mt-3 mx-3" v-for="(v,k) in list" :key="k">
      <div class="ml-2.5 text-black text-opacity-70 text-sm">
        {{v.title}}
      </div>
      <CellGroup class="mt-3 rounded-md overflow-hidden">
        <Cell @click="changeRoute(item)" clickable v-for="(item,index) in v.list" :key="index" :title="item.title" showArrow>
        </Cell>
      </CellGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cell from "@/components/Cell/Cell.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import CellGroup from "@/components/Cell/CellGroup.vue";

interface listItemInterface {
  title: string;
  list: { title: string; link: string }[];
}

let list = ref<listItemInterface[]>([]);

list.value = [
  {
    title: "基础组件",
    list: [
      {
        title: "颜色",
        link: "/color",
      },
      {
        title: "按钮",
        link: "/button",
      },
      {
        title: "单元格",
        link: "/cell",
      },
      {
        title: "状态栏",
        link: "/navBar",
      },
    ],
  },
  {
    title: "表单组件",
    list: [
      {
        title: "单选",
        link: "/radio",
      },
      {
        title: "多选",
        link: "/checkbox",
      },
      {
        title: "输入框",
        link: "/input",
      },
      {
        title: "开关",
        link: "/switch",
      },
      {
        title: "进步器",
        link: "/stepper",
      },
      
      
    ],
  },
  {
    title:'导航组件',
    list:[
      {
        title: "标签页",
        link: "/tab",
      },
      {
        title: "标签栏",
        link: "/tabBar",
      },
    ],
  }
];

let router = useRouter();

let changeRoute = ({ link }: { title: string; link: string }) => {
  console.log(router);
  console.log(link);
  router.push(link);
};
</script>

<style lang="scss" scoped>
// .demo{
//   @apply bg-black;
//   // background: #000;
//   &.aa{
//     background: #000;
//   }
// }
</style>