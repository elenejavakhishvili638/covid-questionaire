<template>
  <form-layout page="4">
    <div class="h-[811px] w-1520 flex justify-between">
      <advices-layout>
        <AdvicesForm @submit="onSubmit">
          <div>
            <the-label>
              რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა
              სურვილისამებრ ჩაერთვება?*</the-label
            >
            <the-radio
              name="non_formal_meetings"
              value="twice_a_week"
              displayValue="კვირაში ორჯერ"
              type="radio"
              v-model="values.non_formal_meetings"
              @onInput="handleInput"
              validate="required"
            ></the-radio>
            <the-radio
              name="non_formal_meetings"
              value="once_a_week"
              displayValue="კვირაში ერთხელ"
              type="radio"
              v-model="values.non_formal_meetings"
              @onInput="handleInput"
              validate="required"
            ></the-radio>
            <the-radio
              name="non_formal_meetings"
              value="once_in_a_two_week"
              displayValue="ორ კვირაში ერთხელ"
              type="radio"
              v-model="values.non_formal_meetings"
              @onInput="handleInput"
              validate="required"
            ></the-radio>
            <the-radio
              name="non_formal_meetings"
              value="once_a_month"
              displayValue="თვეში ერთხელ"
              type="radio"
              v-model="values.non_formal_meetings"
              @onInput="handleInput"
              validate="required"
            ></the-radio>
            <ErrorMessage
              class="text-[#F15524] text-base mt-[6px] ml-[20px]"
              name="non_formal_meetings"
            />
          </div>
          <div>
            <the-label>
              კვირაში რამდენი დღე ისურვებდი ოფისიდან <br />
              მუშაობას?*</the-label
            >
            <the-radio
              v-for="option in radioOptions"
              :key="option.value"
              :name="option.name"
              :value="option.value"
              :displayValue="option.displayValue"
              type="radio"
              v-model="values.number_of_days_from_office"
              @onInput="handleInput"
              validate="required"
            ></the-radio>
            <ErrorMessage
              class="text-[#F15524] text-base mt-[6px] ml-[20px]"
              name="number_of_days_from_office"
            />
          </div>
          <the-textarea
            name="what_about_meetings_in_live"
            label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
            :value="values && values.what_about_meetings_in_live"
            @input="handleInput"
          ></the-textarea>
          <the-textarea
            name="tell_us_your_opinion_about_us"
            label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
            :value="values && values.tell_us_your_opinion_about_us"
            @input="handleInput"
          ></the-textarea>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-[#208298] text-[#FFFFFF] text-lg mt-[54px] h-[56px] w-[180px] rounded-[42px] content-end"
            >
              დასრულება
            </button>
          </div>
        </AdvicesForm>
      </advices-layout>
      <div class="mt-[72px] relative z-0">
        <img :src="bike2" />
        <transition appear name="expand">
          <img
            class="absolute z-[-1] top-[65px] left-[90px] origin-bottom-left"
            :src="mainlogo3"
          />
        </transition>
      </div>
    </div>
    <div class="flex justify-center z-[10] mt-[30px]">
      <router-link to="/vaccination"
        ><img class="mr-[117px]" :src="vector3" />
      </router-link>
    </div>
  </form-layout>
</template>

<script>
import FormLayout from '../components/layout/FormLayout.vue'
import TheRadio from '../components/form/TheRadio.vue'
import { Form, ErrorMessage } from 'vee-validate'
import TheLabel from '../components/form/TheLabel.vue'
import TheTextarea from '../components/form/TheTextarea.vue'
import AdvicesLayout from '../components/fourthPage/AdvicesLayout.vue'
import vector3 from "../assets/images/vector3.png"
import bike2 from "../assets/images/fourthPage/bike2.png"
import mainlogo3 from "../assets/images/fourthPage/mainlogo3.png"

export default {
  components: {
    FormLayout,
    TheRadio,
    AdvicesForm: Form,
    ErrorMessage,
    TheLabel,
    TheTextarea,
    AdvicesLayout
  },
  data() {
    return {
      vector3,
      bike2,
      mainlogo3,
      radioOptions: [
        { name: 'number_of_days_from_office', value: '0', displayValue: '0' },
        { name: 'number_of_days_from_office', value: '1', displayValue: '1' },
        { name: 'number_of_days_from_office', value: '2', displayValue: '2' },
        { name: 'number_of_days_from_office', value: '3', displayValue: '3' },
        { name: 'number_of_days_from_office', value: '4', displayValue: '4' },
        { name: 'number_of_days_from_office', value: '5', displayValue: '5' }
      ]
    }
  },
  computed: {
    values() {
      let advices = this.$store.getters['advices/advices']
      if (!advices) {
        advices = {}
      }
      return advices
    }
  },
  methods: {
    handleInput({ value, name }) {
      this.$store.commit('advices/setFourthPage', { value, name })
    },
    onSubmit() {
      const identification = this.$store.getters['identificaiton/identification']
      const questionnaire = this.$store.getters['questionnaire/questionnaire']
      const vaccination = this.$store.getters['vaccination/vaccination']
      const advices = this.$store.getters['advices/advices']

      const mergedObject = (...objects) => {
        return objects.reduce((acc, obj) => {
          Object.entries(obj).forEach(([key, value]) => {
            if (key === 'antibodies') {
              if (Object.values(value).some((v) => v != null && v !== '')) {
                acc[key] = value
              }
            } else if (value && Object.keys(value).length !== 0) {
              acc[key] = value
            }
          })
          return acc
        }, {})
      }

      let result = mergedObject(identification, questionnaire, vaccination, advices)
      this.$store.dispatch('advices/submit', result)
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