import allData from "./Wine-Data.json";

export function calculateMeanOfFlavanoids(alcoholValue) {
  const filteredData = allData.filter((obj) => obj.Alcohol === alcoholValue);

  if (filteredData.length === 0) {
    return null;
  }

  const flavanoidsValues = filteredData.map((obj) =>
    parseFloat(obj.Flavanoids)
  );
  const sum = flavanoidsValues.reduce((acc, value) => acc + value, 0);
  const mean = sum / flavanoidsValues.length;
  return mean.toFixed(3);
}

export const calculateMedian = (alcoholValue) => {
  const flavanoidsForAlcohol = allData
    .filter((obj) => obj.Alcohol === alcoholValue)
    .map((obj) => obj.Flavanoids)
    .sort((a, b) => a - b);

  const middleIndex = Math.floor(flavanoidsForAlcohol.length / 2);

  if (flavanoidsForAlcohol.length % 2 === 0) {
    // For even number of elements, average the middle two values
    return (
      (flavanoidsForAlcohol[middleIndex - 1] +
        flavanoidsForAlcohol[middleIndex]) /
      2
    );
  } else {
    // For odd number of elements, return the middle value
    return flavanoidsForAlcohol[middleIndex].toFixed(3);
  }
};

export function calculateMode(alcoholValue) {
  // Filter the data for the specified alcohol value
  const filteredData = allData.filter((obj) => obj.Alcohol === alcoholValue);

  // Create a frequency count of Flavanoids values
  const frequencyCount = {};

  filteredData.forEach((obj) => {
    const flavanoids = obj.Flavanoids;
    frequencyCount[flavanoids] = (frequencyCount[flavanoids] || 0) + 1;
  });

  // Find the mode(s) based on the highest frequency count
  const maxCount = Math.max(...Object.values(frequencyCount));
  const modeValues = Object.entries(frequencyCount)
    .filter(([, count]) => count === maxCount)
    .map(([flavanoids]) => parseFloat(flavanoids));
  if (modeValues.length) return modeValues.join(",");
  return modeValues;
}
