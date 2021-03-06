<template>
  <div>
    <h2>{{dimension.text.title}}</h2>
    {{dimension.text.low}}
    <input v-model="value" type="range" min="1" max="100" />
    {{dimension.text.high}}
    <div>Today's score: {{value}}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'DimensionTrackerSlider',
  props: {
    dimension: Object,
  },
  setup() {
    return {
      value: ref(50),
    };
  },
};
</script>
