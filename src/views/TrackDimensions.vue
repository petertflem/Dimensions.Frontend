<template>
  <div class="track-dimensions">
    <h1>Track dimensions</h1>

    <p>
      Hello, dear {{usersName}}!
    </p>

    <Suspense>
      <template #default>
        <TrackedDimensions />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>

  </div>
</template>

<script>
import { getUserAsync } from '@/queries/getUser';
import TrackedDimensions from '@/components/TrackedDimensions.vue';

export default {
  name: 'TrackDimension',
  components: {
    TrackedDimensions,
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    this.user = await getUserAsync();
  },
  computed: {
    usersName() {
      return this.user ? this.user.name : '[fetching your beautiful name...]';
    },
  },
};
</script>
