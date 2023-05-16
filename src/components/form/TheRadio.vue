<template>
  <div>
    <Field :name="name" :value="modelValue" :rules="validate" v-slot="{ field }">
      <input
        class="ml-[20px]"
        v-bind="field"
        :checked="isChecked"
        :id="name + value"
        :value="value"
        :type="type"
        @change="updateValue"
      />
    </Field>
    <label class="text-black font-normal text-[20px] ml-[19px]" :for="name + value">{{
      displayValue
    }}</label>
  </div>
</template>


<script>
import { Field } from 'vee-validate'

export default {
  components: { Field },
  emits: ['onInput'],
  props: ['type', 'name', 'message', 'value', 'displayValue', 'modelValue', 'validate'],
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
      this.$emit('onInput', {
        value: event.target.value,
        name: this.name
      })
    }
  },
  computed: {
    isChecked() {
      return this.value === this.modelValue
    }
  }
}
</script>

<style scoped>
input[type='radio'] {
  accent-color: #232323;
  width: 17px;
  height: 17px;
}
</style>