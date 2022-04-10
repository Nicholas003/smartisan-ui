<template>
  <div class="base relative">
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.base{
  @apply min-h-screen w-full;
  /* width: 100%;
  min-height: 100vh; */
}
</style>