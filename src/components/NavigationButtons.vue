<template>
  <div class="w-[191px] z-[500] absolute bottom-[3rem] left-[45%] flex justify-between">
    <button type="button" @click="goBack">
      <img :src="vector3" />
    </button>
    <button :disabled="!isValid" type="submit">
      <img v-if="isValid" :src="vector2" />
      <img v-else :src="vector4" />
    </button>
  </div>
</template>

<script>
import vector2 from "../assets/images/vector2.png"
import vector3 from "../assets/images/vector3.png"
import vector4 from "../assets/images/vector4.png"


export default {
  data () {
    return {
      vector2,
        vector3,
        vector4
    }
  },
  props: ['goBack', 'isValid']
}
</script>
