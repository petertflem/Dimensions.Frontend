<template>
  <div>
    <h2>{{need.text.title}}</h2>
    {{need.text.low}}

    <input
      type="range"
      min="1"
      max="100"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    {{need.text.high}}
    <div>Today's score: {{modelValue}}</div>
  </div>
</template>

<script>
export default {
  name: 'MeasureNeedFulfillmentSlider',
  props: {
    need: Object,
    modelValue: Number,
  },
  emits: ['update:modelValue'],
};
</script>
