<template>
  <div class="bg-cream m-0 box-border h-screen w-screen">
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>


<style scoped>
.route-enter-from {
  opacity: 0;
}

.route-leave-to {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.2s ease-out;
}
.route-leave-active {
  transition: all 0.2s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>