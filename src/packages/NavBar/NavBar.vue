<template>
  <div class="w-full z-50 relative" :class="{'h-11':real}">
    <div class="bg-white h-11 w-full flex items-center " :class="[{'nav-bar-shadow':border},[fixed?'fixed z-50':'relative']]">
      <div @click="leftClick" class="left absolute top-0 bottom-0 flex items-center left-3" v-if="showLeft">
        <slot name="left">
          <LeftSmall class="text-2xl text-gray-500" stroke-linecap="butt" :stroke-width="5" />
        </slot>
      </div>
      <div class="middle text-ellipsis text-center w-full">
        <slot name="middle">
          <span class="font-bold text-gray-500 text-lg">{{title}}</span>
        </slot>
      </div>
      <div @click="$emit('rightClick',$event)" class="right absolute top-0 bottom-0 flex items-center right-3">
        <slot name="right"></slot>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { LeftSmall } from "@icon-park/vue-next";
import { toRefs } from "vue";
import { useRouter } from "vue-router";

interface navBarInterface{
  title?:string|number,
  border?:boolean,
  fixed?:boolean,
  real?:boolean,
  showLeft?:boolean,
  back?:boolean
}
interface navBarEmitInterface{
  (e:'leftClick',event:any):void
  (e:'rightClick',event:any):void
}

let props = withDefaults(defineProps<navBarInterface>(),{
  border:true,
  fixed:true,
  real:true,
  title:"",
  showLeft:true,
  back:true
})

let emit = defineEmits<navBarEmitInterface>()

let refProps = toRefs(props)

let router = useRouter()

let leftClick = (event:any)=>{
  if(refProps.back.value){
    router.back()
  }
  emit('leftClick',event)
}

</script>

<style scoped>
.middle {
  font-size: 16px;
}
.nav-bar-shadow{
  box-shadow: 0 1px 1px 0 hsl(0deg 0% 40% / 10%);
}
</style>