const updateUniqueItems = (set) => {
  try {
    const newSet = [];
    for (const i of set.entries()) {
      newSet.push(i);
    }
    set.clear();
    newSet.forEach((x) => (x[1] === 1 ? set.set(x[0], 100) : set.set(x[0], x[1])));
  } catch (err) {
    throw new Error('Cannot process');
  }
};
export default updateUniqueItems;
