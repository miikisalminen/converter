/*
    SUPER UGLY WAY TO HANDLE CALCULATIONS
*/

export const distCalc = (dist1, dist2, input) => {
  // Unit to unit
  if (dist1 == dist2) {
    return input;
  }

  // Meter to feet
  if (dist1 == "m" && dist2 == "ft") {
    const result = input * 3.281;
    return result;
  }
  // Meter to kilometer
  if (dist1 == "m" && dist2 == "km") {
    const result = input / 1000;
    return result;
  }
  // Meter to mile
  if (dist1 == "m" && dist2 == "mi") {
    const result = input / 1609;
    return result;
  }

  // Feet to meter
  if (dist1 == "ft" && dist2 == "m") {
    const result = input / 3.281;
    return result;
  }
  // Feet to kilometer
  if (dist1 == "ft" && dist2 == "km") {
    const result = input / 3281;
    return result;
  }
  // Feet to mile
  if (dist1 == "ft" && dist2 == "mi") {
    const result = input / 5280;
    return result;
  }

  // Kilometer to meter
  if (dist1 == "km" && dist2 == "m") {
    const result = input * 1000;
    return result;
  }
  // Kilometer to ft
  if (dist1 == "km" && dist2 == "ft") {
    const result = input * 3281;
    return result;
  }
  // Kilometer to mi
  if (dist1 == "km" && dist2 == "mi") {
    const result = input / 1.609;
    return result;
  }

  // Mile to meter
  if (dist1 == "mi" && dist2 == "m") {
    const result = input * 1609;
    return result;
  }
  // Mile to ft
  if (dist1 == "mi" && dist2 == "ft") {
    const result = input * 5280;
    return result;
  }
  // Mile to km
  if (dist1 == "mi" && dist2 == "km") {
    const result = input * 1.609;
    return result;
  }
};

export const wgtCalc = (wgt1, wgt2) => {};
