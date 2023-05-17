<template>
  <div class="flex flex-col justify-center items-center h-screen w-screen">
    <transition name="small-image">
      <img
        class="absolute top-[35%]"
        v-if="showSmallImage"
        :src="mainlogo"
      />
    </transition>
    <transition name="text">
      <router-link
        to="/identification"
        v-if="showText"
        @mouseover="showSecondImage = true"
        @mouseleave="showSecondImage = false"
        class="relative text-black text-3xl font-bold break-words w-20 text-center mt-[200px] overflow-hidden"
      >
        <img class="absolute animate-slide" :src="start" />
        <img
          v-show="showSecondImage"
          class="absolute left-[2px] bottom-[-1.5px]"
          :src="start2"
        />
      </router-link>
    </transition>
  </div>
</template>

<script>
import start from "../assets/images/start.png"
import start2 from "../assets/images/start2.png"
import mainlogo from "../assets/images/mainlogo.png"

export default {
  data() {
    return {
      showSmallImage: false,
      showText: false,
      showSecondImage: false,
      start,
      start2,
      mainlogo
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
  transition: opacity 0.3s, transform 1s ease-in-out;
}

.text-enter-to {
  opacity: 1;
  transform: translateY(0%);
}

@keyframes slide {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-slide {
  animation: slide 1s ease-in-out forwards;
  position: relative;
}
</style>
