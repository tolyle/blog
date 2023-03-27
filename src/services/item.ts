export async function queryItems(page: number) {
  return fetch(`/api/items?page=${page}`).then((res) => {
    return res.json();
  });
}
