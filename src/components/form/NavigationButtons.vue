<template>
  <div class="w-[191px] z-[500] absolute bottom-[3rem] left-[45%] flex justify-between">
    <button type="button" @click="goBack">
      <img src="https://i.ibb.co/8Pz1dkR/Vector-3.png" />
    </button>
    <button :disabled="!isValid" type="submit">
      <img v-if="isValid" src="https://i.ibb.co/yScPCy6/Vector-2.png" />
      <img v-else src="https://i.ibb.co/5LgxYxd/Vector-4.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavigationButtons',
  props: ['goBack', 'isValid']
}
</script>
