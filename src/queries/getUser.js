import { ref, readonly } from 'vue';

const userStore = ref(null);

/**
 * Mocking client-server processing
 */
const mockedUser = {
  name: 'Peter Tollnes Flem',
};

async function fetchUserFromApiAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedUser);
    }, 1000);
  });
}

export async function getUserAsync() {
  if (userStore.value !== null) {
    return userStore.value;
  }

  const user = await fetchUserFromApiAsync();
  userStore.value = readonly(user);

  return userStore.value;
}
