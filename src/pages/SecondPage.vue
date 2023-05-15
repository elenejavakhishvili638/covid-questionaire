<template>
  <form-layout page="2">
    <div class="h-[811px] w-1520 flex justify-between">
      <Form @submit="onSubmit">
        <the-label>გაქვს გადატანილი Covid-19?*</the-label>
        <input id="yes" type="radio" value="yes" />
        <label class="text-black font-normal text-[20px] ml-[19px]" for="yes">კი</label>
      </Form>
      <div class="relative z-0">
        <img src="https://i.ibb.co/LQfQvB6/vaccinate2.png" />
        <transition appear name="expand">
          <div
            class="origin-top-right absolute w-[229px] h-[229px] bg-[#DD3939] z-[-1] top-64 left-20 rounded-full"
          ></div>
        </transition>
      </div>
    </div>
  </form-layout>
</template>



<script>
import FormLayout from '../components/layout/FormLayout.vue'
import TheInput from '../components/form/TheInput.vue'
import TheLabel from '../components/form/TheLabel.vue'

import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
  components: { FormLayout, TheInput, Form, Field, ErrorMessage, TheLabel },

  computed: {
    values() {}
  },
  methods: {}
}
</script>


<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease-in-out;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translate(250px, -100px);
}
.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  transform: translate(0, 0px);
}
</style>