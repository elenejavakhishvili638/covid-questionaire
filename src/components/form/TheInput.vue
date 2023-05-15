<template>
  <div class="flex flex-col">
    <label class="mt-47 text-black font-bold text-[22px] mb-2" for="first_name"> {{ label }}</label>
    <Field
      class="w-513 h-50 border-[0.8px] border-black bg-transparent placeholder:text-lg placeholder:font-normal placeholder:text-black pl-5 outline-0"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      @input="handleInput($event.target.value, name)"
      :value="value"
    />
  </div>
</template>

<script>
import { Field } from 'vee-validate'

export default {
  components: { Field },
  props: ['name', 'placeholder', 'type', 'value', 'label'],
  methods: {
    handleInput(value, name) {
      this.$emit('input', { name, value })
    }
  }
}
</script>