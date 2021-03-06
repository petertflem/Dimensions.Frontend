/**
 * Mocking client-server processing
 */

async function fetchUserFromApiAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

export async function saveDimensionsAsync() {
  // where to get dimensions from?

  await fetchUserFromApiAsync();
}
