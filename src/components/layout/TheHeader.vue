<template>
  <div class="w-1520 flex justify-between items-center pb-23 border-b-2 border-black">
    <img class="h-[24px] w-[147.8px]" src="https://i.ibb.co/m0D0zkG/Frame.png" />
    <p class="text-black font-bold text-[40px]">{{ page }}/4</p>
  </div>
</template>

<script>
export default {
  props: ['page']
}
</script>