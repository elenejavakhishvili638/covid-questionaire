<template>
  <div class="flex flex-col">
    <label v-if="label" class="mt-47 text-black font-bold text-[22px] mb-2"> {{ label }}</label>
    <Field
      class="w-513 h-50 border-[0.8px] border-black bg-transparent placeholder:text-lg placeholder:font-normal placeholder:text-black pl-5 outline-0"
      :id="name"
      :name="name"
      :rules="validate"
      :placeholder="placeholder"
      :type="type"
      :parent="parent"
      @input="handleInput($event.target.value)"
      :value="value"
    />
    <ErrorMessage class="text-[#F15524] text-base mt-[6px] ml-[20px]" :name="name" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'

export default {
  components: { Field, ErrorMessage },
  props: ['name', 'placeholder', 'type', 'value', 'label', 'validate', 'parent'],
  methods: {
    handleInput(value) {
      this.$emit('input', { value, name: this.name, parent: this.parent })
    }
  }
}
</script>