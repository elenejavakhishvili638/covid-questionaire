<template>
  <div class="flex flex-col mt-[47px]">
    <the-label>{{ label }}</the-label>
    <textarea
      :name="name"
      class="bg-transparent border-[0.8px] outline-none mt-[20px]"
      :value="value"
      @input="handleInput"
      rows="8"
    />
  </div>
</template>

<script>
import TheLabel from '../../components/form/TheLabel.vue'

export default {
  components: { TheLabel },
  props: ['value', 'label', 'name'],
  methods: {
    handleInput(event) {
      this.$emit('input', {
        value: event.target.value,
        name: this.name
      })
    }
  }
}
</script>