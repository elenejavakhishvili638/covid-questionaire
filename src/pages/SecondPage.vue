<template>
  <form-layout page="2">
    <div class="h-[811px] w-1520 flex justify-between">
      <Form @submit="onSubmit">
        <div>
          <the-label>გაქვს გადატანილი Covid-19?*</the-label>
          <the-radio
            name="had_covid"
            value="yes"
            displayValue="კი"
            type="radio"
            v-model="values.had_covid"
            @onInput="handleInput"
            validate="required"
          ></the-radio>
          <the-radio
            name="had_covid"
            value="no"
            displayValue="არა"
            type="radio"
            v-model="values.had_covid"
            @onInput="handleInput"
            :validate="validateC"
          ></the-radio>
          <the-radio
            name="had_covid"
            value="have_right_now"
            displayValue="ახლა მაქვს"
            type="radio"
            v-model="values.had_covid"
            @onInput="handleInput"
            :validate="validateC"
          ></the-radio>
          <ErrorMessage class="text-[#F15524] text-base mt-[6px] ml-[20px]" name="had_covid" />
        </div>
        <div v-if="values.had_covid === 'yes'">
          <p class="mt-47 text-black font-bold text-[22px] mb-2">
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </p>
          <the-radio
            displayValue="კი"
            name="had_antibody_test"
            value="true"
            type="radio"
            v-model="values.had_antibody_test"
            @onInput="handleInput"
            :validate="validateC"
          ></the-radio>
          <the-radio
            displayValue="არა"
            name="had_antibody_test"
            value="false"
            type="radio"
            v-model="values.had_antibody_test"
            @onInput="handleInput"
            :validate="validateC"
          ></the-radio>
          <ErrorMessage
            class="text-[#F15524] text-base mt-[6px] ml-[20px]"
            name="had_antibody_test"
          />
        </div>
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
import TheRadio from '../components/form/TheRadio.vue'

import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
  components: { FormLayout, TheInput, Form, Field, ErrorMessage, TheLabel, TheRadio },

  computed: {
    values() {
      const questionnaire = this.$store.getters['questionnaire/questionnaire']
      if (!questionnaire) {
        questionnaire = {}
      }
      return questionnaire
    }
  },
  methods: {
    handleInput({ value, name }) {
      this.$store.dispatch('questionnaire/getSecondPage', { value, name })
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
  opacity: 0;
  transform: translate(250px, -100px);
}
.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  transform: translate(0, 0px);
}
</style>