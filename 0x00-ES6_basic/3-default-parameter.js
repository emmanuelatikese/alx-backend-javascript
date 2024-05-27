function getSumOfHoods(initialNumber,
  expansion1989 = 89,
  expansion2019 = 19) {
  return (initialNumber
    + (expansion1989 !== 89 ? expansion1989 : 89)
    + (expansion2019 !== 19 ? expansion2019 : 19));
}
export default getSumOfHoods;
