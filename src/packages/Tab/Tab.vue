<template>
  <div>
    
    <template  v-if="active==name&&hasSlot">
      <div class="content">
        <slot></slot>
      </div>
      
    </template>
  </div>

</template>

<script setup lang="ts">
import {
  ComponentInternalInstance,
  computed,
  inject,
  toRefs,
  useSlots,
} from "vue";
import type { tabsNameType } from "./Tabs.vue";

export interface tabInterface {
  name: string;
  title:string;
}

let props = withDefaults(defineProps<tabInterface>(), {});

toRefs(props);

let tabInstance = inject("tabs") as ComponentInternalInstance;

let active = computed(() => tabInstance.props.active);

let slot = useSlots()

let hasSlot = slot.default ? true :false

</script>
<style lang="scss" scoped>
.content{
    @apply bg-white p-2.5;
}
</style>
