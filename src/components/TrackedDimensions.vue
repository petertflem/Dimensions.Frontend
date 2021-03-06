<template>
  <ul>
    <li v-for="dimension in dimensions" :key="dimension.id">
      <DimensionTrackerSlider :dimension="dimension" />
    </li>
  </ul>

  <button @click="saveDimensions">Save dimensions</button>
</template>

<script>
import DimensionTrackerSlider from '@/components/DimensionTrackerSlider.vue';
import { getDimensionsAsync } from '@/queries/getDimensions';
import { saveDimensionsAsync } from '@/commands/saveDimensions';

export default {
  name: 'DimensionTrackers',
  components: {
    DimensionTrackerSlider,
  },
  async setup() {
    const dimensions = await getDimensionsAsync();

    return {
      dimensions,
    };
  },
  methods: {
    async saveDimensions() {
      await saveDimensionsAsync();
      console.log('saved!');
    },
  },
};
</script>
