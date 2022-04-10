<template>
  <div ref="tabsRef">
    <!-- <div></div> -->
    <div class="tabs border-solid-b-05">
      <div class="tab" @click="setTabsActive(item)" :class="{ 'active':active==item.name }" :key="index" v-for="(item,index) in tabProps">
        {{item.title}}
      </div>
    </div>
    <div >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import {tabInterface} from './Tab.vue'
import {  getCurrentInstance, provide, toRefs, useSlots, watch,ref, onMounted, onUnmounted, onBeforeUnmount } from "vue";
export type tabsNameType = number | string;

interface tabsInterface {
  active: tabsNameType;
}

interface emitInterface {
  (e: "update:active", v: any): void;
  (e: "change", v: any): void;
  (e: "tab-click", v: any): void;
}

let props = withDefaults(defineProps<tabsInterface>(), {});

let emit = defineEmits<emitInterface>();

let refProps = toRefs(props);

let instance = getCurrentInstance();

let getSlot = instance!.slots.default

let tabProps = ref<tabInterface[]>([])

let tabsRef = ref<any>(null);

let observer = new MutationObserver(()=>{
  reset()
});

let config = { attributes: false, childList: true, subtree: true };

onMounted(()=>{
  observer.observe(tabsRef.value,config)
})

onBeforeUnmount(()=>{
  observer.disconnect()
})


let reset = ()=>{

  let slot = getSlot!()

  if(!slot[0].props){
    
    slot = slot[0].children as any[]

  }

  tabProps.value = slot.map(({props}:any)=>props)

}

reset()

let setTabsActive = (item:tabInterface)=>{
  if(item.name!=refProps.active.value){

    emit('update:active',item.name)

    emit('change',item)
    
  }
  emit('tab-click',item) 
}

provide("tabs", instance);

</script>
<style lang="scss" scoped>

.tabs {
  @apply bg-white p-2.5 flex relative;

  
  .tab {
    @apply flex-1 flex justify-center py-0.5 font-bold h-8 items-center relative;
    font-size: 14px;
    &::after {
      @apply absolute;
      content: "";
      width: 200%;
      height: 200%;
      left: -50%;
      top: -50%;
      transform: scale(0.5);
      border: solid 1px #d4d4d4;
      // border-radius: 6px;
    }
    &:not(:first-child)::after {
      border-left: none;
    }
    &.active {
      @apply text-white;
      background-image: linear-gradient(#aeaeae, #b3b3b3);
      box-shadow: inset 0 1px 3px rgb(0 0 0 / 15%);
    }
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      &::after {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      &::after {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
}
</style>

