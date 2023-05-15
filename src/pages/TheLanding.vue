<template>
  <div class="flex flex-col justify-center items-center h-screen w-screen">
    <transition name="small-image">
      <img
        class="absolute top-[35%]"
        v-if="showSmallImage"
        src="https://i.ibb.co/6XPXWfk/main-logo-1.png"
      />
    </transition>
    <transition name="text">
      <router-link
        to="/identification"
        v-if="showText"
        class="text-black text-3xl font-bold break-words w-20 text-center mt-[200px]"
      >
        კითხვარის დაწყება
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSmallImage: false,
      showText: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.showSmallImage = true
      setTimeout(() => {
        this.showText = true
      }, 1000)
    }, 500)
  }
}
</script>

<style scoped>
.small-image-enter-active,
.small-image-leave-active {
  transition: transform 0.6s;
}

.small-image-enter-from {
  opacity: 0;
  transform: scale(28);
}

.small-image-enter-to {
  opacity: 1;
  transform: scale(1);
}

.text-enter-from {
  opacity: 0;
  transform: translateY(-50%);
}

.text-enter-active {
  transition: opacity 0.3s, transform 1s ease-out;
}

.text-enter-to {
  opacity: 1;
  transform: translateY(0%);
}

a:hover {
  text-shadow: 4px -3px 0 #232323;
}
</style>
