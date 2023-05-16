<template>
  <form-layout page="4">
    <div class="h-[811px] w-1520 flex justify-between">
      <Form></Form>
      <div class="mt-[72px] relative z-0">
        <img src="https://i.ibb.co/KFJGjtN/bike2-1.png" />
        <transition appear name="expand">
          <img
            class="absolute z-[-1] top-[65px] left-[90px] origin-bottom-left"
            src="https://i.ibb.co/svyGqft/main-logo-3.png"
          />
        </transition>
      </div>
    </div>
    <div class="flex justify-center z-[10] mt-[30px]">
      <router-link to="/vaccination"
        ><img class="mr-[117px]" src="https://i.ibb.co/8Pz1dkR/Vector-3.png" />
      </router-link>
    </div>
  </form-layout>
</template>

<script>
import FormLayout from '../components/layout/FormLayout.vue'
import TheRadio from '../components/form/TheRadio.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
  components: { FormLayout, TheRadio, Form, Field, ErrorMessage }
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease-in-out;
}
.expand-enter-from,
.expand-leave-to {
  transform: scale(0);
}
.expand-enter-to,
.expand-leave-from {
  transform: scale(1);
}

.form-container::-webkit-scrollbar {
  display: none;
}
</style>