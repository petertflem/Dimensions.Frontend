import { ref, readonly } from 'vue';

const dimensionsStore = ref(null);

/**
 * Mocking client-server processing
 */
const mockedDimensions = [
  {
    id: 1,
    tracker: 'slider',
    text: {
      title: 'Criticism and praise',
      low: 'Criticism',
      high: 'Praise',
    },
  },
  {
    id: 1,
    tracker: 'slider',
    text: {
      title: 'Dreams',
      low: 'Left them alone',
      high: 'Followed them!',
    },
  },
];

async function fetchUserFromApiAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedDimensions);
    }, 500);
  });
}

export async function getDimensionsAsync() {
  if (dimensionsStore.value !== null) {
    return dimensionsStore.value;
  }

  const dimensions = await fetchUserFromApiAsync();
  dimensionsStore.value = readonly(dimensions);

  return dimensionsStore.value;
}
