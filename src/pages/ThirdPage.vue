<template>
  <form-layout page="3">
    <div class="h-[811px] w-1520 flex justify-between">
      <VaccinationForm v-slot="{ meta }" @submit="onSubmit">
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
        <div v-if="values.had_vaccine === 'true'">
          <the-label>აირჩიე რა ეტაპზე ხარ*</the-label>
          <the-radio
            name="vaccination_stage"
            value="first_dosage_and_registered_on_the_second"
            displayValue="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
            type="radio"
            v-model="values.vaccination_stage"
            @onInput="handleInput"
            validate="required"
          ></the-radio>
          <the-radio
            name="vaccination_stage"
            value="fully_vaccinated"
            displayValue="სრულად აცრილი ვარ"
            type="radio"
            v-model="values.vaccination_stage"
            @onInput="handleInput"
            validate="required"
          ></the-radio>
          <the-radio
            name="vaccination_stage"
            value="first_dosage_and_not_registered_yet"
            displayValue="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
            type="radio"
            v-model="values.vaccination_stage"
            @onInput="handleInput"
            validate="required"
          ></the-radio>
          <ErrorMessage
            class="text-[#F15524] text-base mt-[6px] ml-[20px]"
            name="vaccination_stage"
          />
          <more-info
            v-if="values.vaccination_stage === 'first_dosage_and_registered_on_the_second'"
          >
            <template #text>
              რომ არ გადადო,<br />
              ბარემ ახლავე დარეგისტრირდი
            </template>
            <template #link> https://booking.moh.gov.ge/ </template>
          </more-info>
        </div>
        <div v-if="values.had_vaccine === 'false'">
          <the-label>რას ელოდები?*</the-label>
          <the-radio
            name="i_am_waiting"
            value="registered_and_waiting"
            displayValue="დარეგისტრირებული ვარ და ველოდები რიცხვს"
            type="radio"
            v-model="values.i_am_waiting"
            @onInput="handleInput"
            validate="required"
          ></the-radio>
          <the-radio
            name="i_am_waiting"
            value="not_planning"
            displayValue="არ ვგეგმავ"
            type="radio"
            v-model="values.i_am_waiting"
            @onInput="handleInput"
            validate="required"
          ></the-radio>
          <the-radio
            name="i_am_waiting"
            value="had_covid_and_planning_to_be_vaccinated"
            displayValue="გადატანილი მაქვს და ვგეგმავ აცრას"
            type="radio"
            v-model="values.i_am_waiting"
            @onInput="handleInput"
            validate="required"
          ></the-radio>
          <ErrorMessage class="text-[#F15524] text-base mt-[6px] ml-[20px]" name="i_am_waiting" />
          <more-info v-if="values.i_am_waiting === 'not_planning'">
            <template #text> 👉 </template>
            <template #link> https://booking.moh.gov.ge/ </template>
          </more-info>
          <more-info class="w-[491px]" v-if="values.i_am_waiting === 'had_covid_and_planning_to_be_vaccinated'">
            <template #default>
              <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
              <br />
            </template>
            <template #text>
              <p>👉რეგისტრაციის ბმული</p>
            </template>
            <template #link> https://booking.moh.gov.ge/ </template>
          </more-info>
        </div>
        <navigation-buttons :goBack="goBack" :isValid="meta && meta.valid"></navigation-buttons>
      </VaccinationForm>
      <div class="relative z-0">
        <img class="mt-[54px]" :src="doctor2" />
        <transition appear name="expand">
          <img
            class="absolute z-[-1] top-10 left-8 origin-bottom-left"
            :src="mainlogo2"
          />
        </transition>
      </div>
    </div>
  </form-layout>
</template>

<script>
import FormLayout from '../components/FormLayout.vue'
import TheRadio from '../components/TheRadio.vue'
import TheLabel from '../components/TheLabel.vue'
import NavigationButtons from '../components/NavigationButtons.vue'
import MoreInfo from '../components/MoreInfo.vue'
import { Form, ErrorMessage } from 'vee-validate'
import mainlogo2 from "../assets/images/thirdPage/mainlogo2.png"
import doctor2 from "../assets/images/thirdPage/doctor2.png"

export default {
  components: { FormLayout, TheRadio, VaccinationForm: Form, ErrorMessage, TheLabel, NavigationButtons, MoreInfo },
  data () {
    return {
      mainlogo2,
      doctor2
    }
  },
  computed: {
    values() {
      let vaccination = this.$store.getters['vaccination/vaccination']
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
    onSubmit() {
      this.$router.replace('/advices')
    }
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