<template>
  <div>
    <form-layout page="1">
      <div class="w-1520 flex justify-between">
        <div>
          <Form class="mb-[111px]" @submit="onSubmit">
            <div class="flex flex-col">
              <label class="mt-47 text-black font-bold text-[22px] mb-2" for="first_name">
                სახელი*
              </label>
              <input
                class="w-513 h-50 border-[0.8px] border-black bg-transparent placeholder:text-lg placeholder:font-normal placeholder:text-black pl-5 outline-0"
                id="first_name"
                name="first_name"
                placeholder="იოსებ"
                type="text"
              />
            </div>
            <div class="flex flex-col">
              <label class="mt-47 text-black font-bold text-[22px] mb-2" for="last_name">
                გვარი*
              </label>
              <input
                class="w-513 h-50 border-[0.8px] border-black bg-transparent placeholder:text-lg placeholder:font-normal placeholder:text-black pl-5 outline-0"
                id="last_name"
                name="last_name"
                placeholder="ჯუღაშვილი"
                type="text"
              />
            </div>
            <div class="flex flex-col">
              <label class="mt-47 text-black font-bold text-[22px] mb-2" for="email">
                მეილი*
              </label>
              <input
                class="w-513 h-50 border-[0.8px] border-black bg-transparent placeholder:text-lg placeholder:font-normal placeholder:text-black pl-5 outline-0"
                id="email"
                name="email"
                placeholder="იოსებ"
                type="email"
              />
            </div>

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
import { Form } from 'vee-validate'

export default {
  components: { FormLayout, Form },
  computed: {
    values() {}
  },
  methods: {}
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