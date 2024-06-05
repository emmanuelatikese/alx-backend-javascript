export default function hasValuesFromArray(set1, arr) {
  return new Set(arr).isSubsetOf(set1);
}
