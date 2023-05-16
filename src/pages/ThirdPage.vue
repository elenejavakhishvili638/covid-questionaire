<template>
  <form-layout page="3">
    <div class="h-[811px] w-1520 flex justify-between">
      <Form v-slot="{ meta }" @submit="onSubmit">
        <div>
          <the-label>უკვე აცრილი ხარ?*</the-label>
          <the-radio
            name="had_vaccine"
            value="true"
            displayValue="კი"
            type="radio"
            v-model="values.had_vaccine"
            @onInput="handleInput"
            validate="required"
          ></the-radio>
          <the-radio
            name="had_vaccine"
            value="false"
            displayValue="არა"
            type="radio"
            v-model="values.had_vaccine"
            @onInput="handleInput"
            validate="required"
          ></the-radio>
          <ErrorMessage class="text-[#F15524] text-base mt-[6px] ml-[20px]" name="had_vaccine" />
        </div>
        <div>
          <the-label>აირჩიე რა ეტაპზე ხარ*</the-label>
        </div>
        <div>
          <the-label>რას ელოდები?*</the-label>
        </div>
        <navigation-buttons :goBack="goBack" :isValid="meta && meta.valid"></navigation-buttons>
      </Form>
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
import TheLabel from '../components/form/TheLabel.vue'
import NavigationButtons from '../components/form/NavigationButtons.vue'
import { Form, ErrorMessage } from 'vee-validate'

export default {
  components: { FormLayout, TheRadio, Form, ErrorMessage, TheLabel, NavigationButtons },
  computed: {
    values() {
      const vaccination = this.$store.getters['vaccination/vaccination']
      if (!vaccination) {
        vaccination = {}
      }
      return vaccination
    }
  },
  methods: {
    handleInput({ value, name }) {
      this.$store.commit('vaccination/setThirdPage', { value, name })
    },
    goBack() {
      this.$router.replace('/covid-questionaire')
    },
    onSubmit() {}
  }
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