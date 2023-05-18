<template>
  <div class="w-1520 flex justify-between items-center pb-23 border-b-2 border-black">
    <img class="h-[24px] w-[147.8px]" :src="frame" />
    <p class="text-black font-bold text-[40px]">{{ page }}/4</p>
  </div>
</template>

<script>
import frame from "../../assets/images/Frame.png"
export default {
  props: ['page'],
  data () {
    return {
      frame
    }
  },
}
</script>