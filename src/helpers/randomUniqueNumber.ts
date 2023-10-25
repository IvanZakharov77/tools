export default function randomUniqueNumber(from, to, n) {
  let result = [...Array(to - from + 1).keys()]
    .map((i) => i + from) // range
    .reduce(
      (arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr),
      []
    ) // shuffle
    .slice(0, n); // slice n

  return result

}