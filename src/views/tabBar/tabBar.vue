<template>
  <div>

    <sm-nav-bar :title="'tabBar'"></sm-nav-bar>

    <div class="p-3">
      使用icon-park的图标库 (也可以不用 使用#default="{row:{active}}")
    </div>

    <TabBar :shadow="false" v-model:active="active">
      <TabBarItem name="1" :title="'首页'" >
          <Home :strokeWidth='3'/>
      </TabBarItem>
      <TabBarItem name="2" :title="'分类'">
        <ListCheckbox :strokeWidth='3' />
      </TabBarItem>
      <TabBarItem name="3" :title="'购物车'">
        <MallBag theme="filled" />
      </TabBarItem>
      <TabBarItem name="4" :title="'个人中心'">
        <Avatar theme="filled"/>
      </TabBarItem>
    </TabBar>

    <TabBar fixed v-model:active="active">
      <TabBarItem name="1" :title="'首页'" >
        <Home :strokeWidth='3'/>
      </TabBarItem>
      <TabBarItem name="2" :title="'分类'">
        <ListCheckbox :strokeWidth='3' />
      </TabBarItem>
      <TabBarItem name="3" :title="'购物车'">
        <MallBag theme="filled" />
      </TabBarItem>
      <TabBarItem name="4" :title="'个人中心'">
        <Avatar theme="filled"/>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script setup lang="ts">
import TabBar from '@/components/TabBar/TabBar.vue';
import TabBarItem from '@/components/TabBar/TabBarItem.vue';
import { Home, Avatar,ListCheckbox,MallBag } from '@icon-park/vue-next';

import { ref } from 'vue';

let active = ref<string>('1')



</script>

<style scoped>

</style>