<template>
  <div class="flex flex-col mt-[47px]">
    <label class="text-black font-bold text-[22px] mb-2">{{ label }}</label>
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
export default {
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