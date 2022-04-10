<template>
  <div class="tab-bar-father">
    <div class="fixed-self" :class="{'fixed bottom-0':fixed}">
      <div :class="{'tab-shadow':shadow}" class="tab-bar border-solid-t-05 border-solid-b-05">
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "@vue/reactivity";
import { getCurrentInstance, provide } from "vue";
import { tabBarItemInterface } from "./TabBarItem.vue";

interface tabBarInterface {
  active: number | string;
  fixed?: boolean;
  shadow?: boolean;
}
interface tabBarEmitInterface {
  (e: "update:active", name: any): void;
  (e: "change", v: any): void;
  (e: "tab-click", v: any): void;
}

let props = withDefaults(defineProps<tabBarInterface>(), {
  fixed: false,
  shadow:true
});

let { active } = toRefs(props);

let instance = getCurrentInstance();

provide("tabBar", instance);

let emit = defineEmits<tabBarEmitInterface>();

let setTabBarActive = (item: tabBarItemInterface) => {
  if (item.name != active.value) {
    emit("update:active", item.name);

    emit("change", item);
  }
  emit("tab-click", item);
};

provide("setTabBarActive", setTabBarActive);
</script>

<style lang="scss" scoped>
.tab-bar-father {
  height: 56px;
  .fixed-self {
    height: 56px;
    width: 100%;
  }
  .tab-bar {
    @apply flex justify-center items-center h-full;
    
  }
  .tab-shadow{
    box-shadow: 0 -11px 32px rgb(0 0 0 / 8%);
  }
}
</style>