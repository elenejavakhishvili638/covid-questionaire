<template>
  <div class="flex flex-col pt-97 justify-center items-center">
    <the-header :page="page"></the-header>
    <div class="flex flex-col justify-center items-center">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import TheHeader from '../layout/TheHeader.vue'

export default {
  props: ['page'],
  components: { TheHeader }
}
</script>