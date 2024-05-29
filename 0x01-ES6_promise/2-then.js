export default function handleResponseFromAPI(promise) {
  promise.then((success) => (
    {
      status: 200,
      body: success,
    }))
    .catch(() => new Error({}))
    .then(() => console.log('Got a response from the API'));
}
