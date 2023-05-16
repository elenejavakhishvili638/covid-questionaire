<template>
  <div>
    <form-layout page="1">
      <div class="w-1520 flex justify-between">
        <div>
          <Form class="mb-[111px]" @submit="onSubmit">
            <the-input
              id="first_name"
              name="first_name"
              placeholder="იოსებ"
              type="text"
              :value="values && values.first_name"
              validate="required|inGeo:სახელის|minLength:სახელის"
              @input="handleInput"
              label="სახელი*"
            ></the-input>
            <the-input
              id="last_name"
              name="last_name"
              placeholder="ჯუღაშვილი"
              type="text"
              validate="required|inGeo:გვარის|minLength:გვარის"
              :value="values && values.last_name"
              @input="handleInput"
              label="გვარი*"
            ></the-input>
            <the-input
              id="email"
              name="email"
              placeholder="fbi@redberry.ge"
              type="email"
              validate="required|email"
              :value="values && values.email"
              @input="handleInput"
              label="მეილი*"
            ></the-input>
            <button class="z-[50] absolute bottom-[3rem] left-[50%]">
              <img src="https://i.ibb.co/yScPCy6/Vector-2.png" />
            </button>
          </Form>
          <div>
            <hr class="w-[237px] border-black mb-5" />
            <p class="w-[365px] text-gray font-normal text-base">
              *-ით მონიშნული ველების შევსება სავალდებულოა
            </p>
          </div>
        </div>
        <div class="relative z-0">
          <img src="https://i.ibb.co/Byv2zWS/scan2.png" />
          <transition appear name="expand">
            <div class="absolute w-[622px] h-[75px] bg-[#D6D16E] z-[-1] top-56 left-32"></div>
          </transition>
        </div>
      </div>
    </form-layout>
  </div>
</template>

<script>
import FormLayout from '../components/layout/FormLayout.vue'
import TheInput from '../components/form/TheInput.vue'

import { Form } from 'vee-validate'

export default {
  components: { FormLayout, Form, TheInput },
  computed: {
    values() {
      return this.$store.getters['identificaiton/identification']
    }
  },
  methods: {
    handleInput({ name, value }) {
      console.log({ value, name })
      this.$store.commit('identificaiton/setFirstPage', { name, value })
    },
    onSubmit() {
      this.$router.replace('/covid-questionaire')
    }
  }
}
</script>

<style scoped>
.expand-enter-from {
  transform: scale(0);
  transform-origin: bottom left;
  opacity: 0;
}

.expand-enter-to {
  transform: scale(1);
  transform-origin: bottom left;
  opacity: 1;
}

.expand-enter-active {
  transition: transform 0.6s, opacity 0.6s;
}
</style>