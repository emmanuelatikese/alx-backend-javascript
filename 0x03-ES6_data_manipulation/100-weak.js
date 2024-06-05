const weakMap = new WeakMap();
const queryAPI = (endpoint) => {
  const t = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, t + 1);
  if (t >= 4) throw new Error('Endpoint load is high');
};
export { weakMap, queryAPI };
