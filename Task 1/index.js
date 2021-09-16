/**
 * @param {number[]} cars
 * @param {number} k
 * @return {number}       IBA or ABB?
 */

const carParkingRoof = (cars, k) => {
  // Sorting the array to easily slide through it
  let sortedCars = cars.sort((a, b) => a - b),
    size = cars.length,
    min = sortedCars[size - 1];

  // looping the array to find the roof size we are looking for
  for (let i = 0; i < size - k + 1; i++)
    // calculating whether the new subarray has smaller range or not
    min = Math.min(min, sortedCars[i + k - 1] - sortedCars[i] + 1);

  return min;
};

// ----------------------------------------------------------------

/**
 * Finds the minimum size of the roof in the parking lot
 * @example [6, 2, 12, 7], 3
 * // returns 6
 * @returns {number} Returns the roof size.
 */

// To test the program, just change two variables below to see the result
let cars = [6, 2, 12, 7];
let k = 3;

console.log(
  `The minimum length of a roof that can cover ${k} cars is ${carParkingRoof(
    cars,
    k
  )}`
);
