<template>
  <form-layout page="2">
    <div class="h-[811px] w-1520 flex justify-between">
      <Form v-slot="{ meta }" @submit="onSubmit">
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
          <the-label>ანტისხეულების ტესტი გაქვს გაკეთებული?*</the-label>
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
        <div
          class="flex flex-col w-[596px]"
          v-if="values.had_antibody_test === 'true' && values.had_covid === 'yes'"
        >
          <the-label class="mb-[47px]">
            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
            რაოდენობა*</the-label
          >
          <the-input
            class="mb-[25px] ml-5"
            name="test_date"
            placeholder="რიცხვი"
            type="date"
            parent="antibodies"
            :value="values.antibodies.test_date"
            @input="handleInput"
          ></the-input>
          <the-input
            class="ml-5"
            name="number"
            placeholder="ანტისხეულების რაოდენობა"
            type="number"
            parent="antibodies"
            :value="values.antibodies.number"
            @input="handleInput"
          ></the-input>
        </div>
        <div
          class="flex flex-col w-[596px]"
          v-if="values.had_antibody_test === 'false' && values.had_covid === 'yes'"
        >
          <the-label class="mb-[47px]">
            მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</the-label
          >
          <the-input
            class="ml-5"
            id="covid_date"
            name="covid_date"
            placeholder="დდ/თთ/წწ"
            type="date"
            validate="required"
            :value="values && values.covid_date"
            @input="handleInput"
          ></the-input>
        </div>
        <div class="w-[191px] z-[500] absolute bottom-[3rem] left-[45%] flex justify-between">
          <button type="button" @click="goBack">
            <img src="https://i.ibb.co/8Pz1dkR/Vector-3.png" />
          </button>
          <button :disabled="!meta.valid" type="submit">
            <img v-if="meta.valid" src="https://i.ibb.co/yScPCy6/Vector-2.png" />
            <img v-else src="https://i.ibb.co/5LgxYxd/Vector-4.png" />
          </button>
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
    handleInput({ value, name, parent = null }) {
      this.$store.dispatch('questionnaire/getSecondPage', { value, name, parent })
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