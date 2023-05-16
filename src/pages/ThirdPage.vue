<template>
  <form-layout page="3">
    <div class="h-[811px] w-1520 flex justify-between">
      <Form> </Form>
      <div class="relative z-0">
        <img class="mt-[54px]" src="https://i.ibb.co/bNQpjV0/doctor2.png" />
        <transition appear name="expand">
          <img
            class="absolute z-[-1] top-10 left-8 origin-bottom-left"
            src="https://i.ibb.co/34Nn76g/main-logo-2.png"
          />
        </transition>
      </div>
    </div>
  </form-layout>
</template>

<script>
import FormLayout from '../components/layout/FormLayout.vue'
import TheRadio from '../components/form/TheRadio.vue'
import { Form, ErrorMessage } from 'vee-validate'

export default {
  components: { FormLayout, TheRadio, Form, ErrorMessage }
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease-in-out;
}
.expand-enter-from,
.expand-leave-to {
  transform: translateY(10rem);
}
.expand-enter-to,
.expand-leave-from {
  transform: translateY(0);
}
</style>