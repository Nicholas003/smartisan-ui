<template>
  <div class="cell ">
    <div v-if="true" :class="{'border-solid-b-05':bottomBorder,'border-solid-t-05':topBorder,clickable}" class="title">
      <div class="font-bold text-black text-opacity-70 flex items-center">
        <div class="text-base text-black text-opacity-40">
          <slot name="left-icon">

          </slot>
        </div>
        <div>
          <div>
            <slot name="default">
              <span>{{title}}</span>
            </slot>
          </div>
        </div>

      </div>
      <div class="flex items-center">
          <slot name="right">
            <div class="font-bold text-black text-opacity-40">
              <span>{{value}}</span>
            </div>
          </slot>
        <div :class="arrowDirection" class="transition-all" v-if="showArrow">
          <right class="text-base text-black text-opacity-40" stroke-linecap="butt" :stroke-width="5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Right } from "@icon-park/vue-next";
import { toRefs, useSlots, ref, onMounted, getCurrentInstance } from "vue";
export type cellArrowDirection = "up" | "down" | "left" | "right";
interface cellInterface {
  title?: string | number;
  value?: string | number;
  arrowDirection?: cellArrowDirection;
  showArrow?: boolean;
  clickable?: boolean;
}

let props = withDefaults(defineProps<cellInterface>(), {
  title: "",
  value: "",
  arrowDirection: "right",
  showArrow: false,
  clickable: false, //点击反馈
});

let labelRef = ref<any>(null);

let refs = toRefs(props);

let slot = useSlots();

let showlabel = ref<boolean>(false);

let topBorder = ref<boolean>(true);

let bottomBorder = ref<boolean>(true);


</script>

<style scoped>
.cell{
  /* @apply h-11; */
  /* height: 100px; */
}
.title {
  @apply bg-white flex justify-between px-3 py-2 transition-all;
  height: 46px;
}
.clickable{

  @apply active:bg-gray-500 active:bg-opacity-5
}
.label {
  @apply bg-white px-3 pb-3 pt-0;
}
.cell .up {
  @apply transform -rotate-90;
}
.cell .down {
  @apply transform rotate-90;
}

.cell .right {
  @apply transform rotate-0;
}

.cell .left {
  @apply transform rotate-180;
}
/* 
.a{
  background: #000;
} */
/* .a:active{
  background: #fff;
} */
</style>