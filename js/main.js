document.querySelector("h1").addEventListener("click", () => {
  console.log("You clicked me 👌👌👌");
});

const fruitsBasket = ["apple", "banana", "pear", "apple", "apple"];

// Imperative countApples
const countApples = (_array) => {
  let appleCount = 0;

  for (let fruit of _array) {
    if (fruit === "apple") {
      appleCount += 1;
    }
  }
  return appleCount;
};
// Declarative countApples
const countApples02 = (array) =>
  array.filter((item) => item === "apple").length;

const appleCounts = countApples(fruitsBasket);
const appleCounts02 = countApples02(fruitsBasket);
console.log(appleCounts);
console.log(appleCounts02);

/**
 * Gets the first fruit from an array of fruits
 * @param {Array} fruits Array of fruits
 * @returns {String} Name of the first fruit */

function getFirstFruit(fruits) {
  return fruits[0];
}

const firsFruit = getFirstFruit(fruitsBasket);
console.log(firsFruit);
