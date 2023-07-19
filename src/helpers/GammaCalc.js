import allData from "./Wine-Data.json";

export function calculateMeanOfGamma(alcoholValue) {
  const filteredData = allData.filter((obj) => obj.Alcohol === alcoholValue);

  if (filteredData.length === 0) {
    return null;
  }

  const gammaValues = filteredData.map(
    (obj) => (obj.Ash * obj.Hue) / obj.Magnesium
  );

  const sum = gammaValues.reduce((acc, value) => acc + value, 0);
  const mean = sum / gammaValues.length;

  return mean.toFixed(3);
}

export function calculateMedianOfGamma(alcoholValue) {
  const filteredData = allData.filter((obj) => obj.Alcohol === alcoholValue);

  if (filteredData.length === 0) {
    return null;
  }

  const gammaValues = filteredData.map(
    (obj) => (obj.Ash * obj.Hue) / obj.Magnesium
  );
  gammaValues.sort((a, b) => a - b);

  const middleIndex = Math.floor(gammaValues.length / 2);
  let median;

  if (gammaValues.length % 2 === 0) {
    // If the number of values is even, take the average of the two middle values
    median = (gammaValues[middleIndex - 1] + gammaValues[middleIndex]) / 2;
  } else {
    // If the number of values is odd, take the middle value
    median = gammaValues[middleIndex];
  }

  return median.toFixed(3);
}
export function calculateModeOfGamma(alcoholValue) {
  const filteredData = allData.filter((obj) => obj.Alcohol === alcoholValue);

  if (filteredData.length === 0) {
    return null; // Return null if no data found for the given alcohol value
  }

  const gammaValues = filteredData.map(
    (obj) => (obj.Ash * obj.Hue) / obj.Magnesium
  );

  // Calculate the mode of gammaValues
  const mode = calculateMode(gammaValues);

  return mode.toFixed(3);
}

export function calculateMode(arr) {
  const frequency = {};
  let maxCount = 0;
  let mode;

  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      mode = num;
    }
  }

  return mode;
}
