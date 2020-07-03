export default function request(query) {
  return fetch("https://api.producthunt.com/v2/api/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer f20AQz3Ap7trjQyQESkDK655LXGSYgTDd0FElcccaJA`,
    },
    body: JSON.stringify({
      query,
      variables: null,
    }),
  }).then((response) => response.json());
}
