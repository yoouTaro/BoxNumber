export function boxNumber(number) {
  let result = "";
  let numFives = Math.floor(number / 5);

  for (let i = 0; i < numFives; i++) {
    result += "5.svg,";
  }

  let remainder = number % 5;
  if (remainder > 0) {
    result += `${remainder}.svg,`;
  }
  return result.trim();
}
