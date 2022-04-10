<template>
  <div class="tab-bar-item" @click="setTabBar" :class="{'active':isActive}">
    <div class="icon">
      <slot name="default" :row="{active:isActive}"></slot>
    </div>
    <div class="title">
      {{title}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs,inject,ComponentInternalInstance,computed } from 'vue';

export interface tabBarItemInterface{
  name:string|number;
  title:string|number;
}

let props = defineProps<tabBarItemInterface>()

let {name} = toRefs(props)

let tabBarInstance = inject("tabBar") as ComponentInternalInstance;

let isActive = computed(() => tabBarInstance.props.active==name.value);

let setTabBarActive = inject('setTabBarActive') as any

let setTabBar = ()=>{

  setTabBarActive(props)

}

</script>

<style lang="scss" scoped>

.tab-bar-item{
  color: #8f8f8f;
  @apply text-base flex flex-col justify-center items-center;
  width: 76px;
  &.active{
    color: $red;
  }
  .icon{
    font-size: 26px;
    // @apply text-2xl
  }
  .title{
    font-size: 10px;
    line-height: 1;
    @apply mt-1.5;
  }
}

</style>