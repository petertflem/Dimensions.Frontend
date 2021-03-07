import { ref, readonly } from 'vue';

const needsStore = ref(null);

/**
 * Mocking client-server processing
 */
const mockedNeeds = [
  {
    id: 1,
    tracker: 'slider',
    text: {
      title: 'Receive praise',
      low: 'Criticism',
      high: 'Praise',
    },
  },
  {
    id: 2,
    tracker: 'slider',
    text: {
      title: 'Follow dreams and ideas',
      low: 'Left them alone',
      high: 'Followed them!',
    },
  },
];

async function fetchNeedsFromApiAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedNeeds);
    }, 500);
  });
}

export async function getNeedsAsync() {
  if (needsStore.value !== null) {
    return needsStore.value;
  }

  const needs = await fetchNeedsFromApiAsync();
  needsStore.value = readonly(needs);

  return needsStore.value;
}
