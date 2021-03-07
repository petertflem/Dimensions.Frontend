<template>
  <div class="measure-need-fulfillment">
    <h1>Measure the fulfillment of your needs</h1>

    <p>
      Hello, dear {{usersName}}!
    </p>

    <p v-if="!needs">Loading in your fantastic needs...</p>
    <ul v-else>
      <li v-for="need in needs" :key="need.id">
        <MeasureNeedFulfillmentSlider
          :need="need"
          v-model.number="measurements[need.id]" />
      </li>
    </ul>

  <button @click="handleSaveNeedsClickAsync">Save needs</button>

  </div>
</template>

<script>
import { getUserAsync } from '@/queries/getUser';
import { getNeedsAsync } from '@/features/needs/queries/getNeeds';

import MeasureNeedFulfillmentSlider from '@/features/needs/components/MeasureNeedFulfillmentSlider.vue';

export default {
  name: 'MeasureNeedFulfillment',
  components: {
    MeasureNeedFulfillmentSlider,
  },
  data() {
    return {
      user: null,
      needs: null,
      measurements: {},
    };
  },
  async created() {
    this.user = await getUserAsync();
    this.needs = await getNeedsAsync();

    this.initializeMeasurementsObject();
  },
  computed: {
    usersName() {
      return this.user ? this.user.name : '[fetching your beautiful name...]';
    },
  },
  methods: {
    async handleSaveNeedsClickAsync() {
      console.log(this.measurements);
    },
    initializeMeasurementsObject() {
      this.needs.forEach((x) => {
        this.measurements[x.id] = 0;
      });
    },
  },
};
</script>
