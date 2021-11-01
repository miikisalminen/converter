/*
    SUPER UGLY WAY TO HANDLE CALCULATIONS
*/

export const distCalc = (dist1, dist2, input) => {
  // Unit to unit
  if (dist1 === dist2) {
    return input;
  }

  // Meter to feet
  if (dist1 === "m" && dist2 === "ft") {
    const result = input * 3.281;
    return result.toFixed(3);
  }
  // Meter to kilometer
  if (dist1 === "m" && dist2 === "km") {
    const result = input / 1000;
    return result.toFixed(3);
  }
  // Meter to mile
  if (dist1 === "m" && dist2 === "mi") {
    const result = input / 1609;
    return result.toFixed(3);
  }

  // Feet to meter
  if (dist1 === "ft" && dist2 === "m") {
    const result = input / 3.281;
    return result.toFixed(3);
  }
  // Feet to kilometer
  if (dist1 === "ft" && dist2 === "km") {
    const result = input / 3281;
    return result.toFixed(3);
  }
  // Feet to mile
  if (dist1 === "ft" && dist2 === "mi") {
    const result = input / 5280;
    return result.toFixed(3);
  }

  // Kilometer to meter
  if (dist1 === "km" && dist2 === "m") {
    const result = input * 1000;
    return result.toFixed(3);
  }
  // Kilometer to ft
  if (dist1 === "km" && dist2 === "ft") {
    const result = input * 3281;
    return result.toFixed(3);
  }
  // Kilometer to mi
  if (dist1 === "km" && dist2 === "mi") {
    const result = input / 1.609;
    return result.toFixed(3);
  }

  // Mile to meter
  if (dist1 === "mi" && dist2 === "m") {
    const result = input * 1609;
    return result.toFixed(3);
  }
  // Mile to ft
  if (dist1 === "mi" && dist2 === "ft") {
    const result = input * 5280;
    return result.toFixed(3);
  }
  // Mile to km
  if (dist1 === "mi" && dist2 === "km") {
    const result = input * 1.609;
    return result.toFixed(3);
  }
};

export const wgtCalc = (wgt1, wgt2, input) => {
  // Unit to unit
  if (wgt1 === wgt2) {
    return input;
  }
  // kg to lb
  if (wgt1 === "kg" && wgt2 === "lb") {
    const result = input * 2.205;
    return result.toFixed(3);
  }
  // kg to g
  if (wgt1 === "kg" && wgt2 === "g") {
    const result = input * 1000;
    return result.toFixed(3);
  }

  // lb to kg
  if (wgt1 === "lb" && wgt2 === "kg") {
    const result = input / 2.205;
    return result.toFixed(3);
  }
  // lb to g
  if (wgt1 === "lb" && wgt2 === "g") {
    const result = input * 454;
    return result.toFixed(3);
  }

  // g to kg
  if (wgt1 === "g" && wgt2 === "kg") {
    const result = input / 1000;
    return result.toFixed(3);
  }
  // g to lb
  if (wgt1 === "g" && wgt2 === "lb") {
    const result = input / 454;
    return result.toFixed(3);
  }
};

export const tempCalc = (temp1, temp2, input) => {
  // Unit to unit
  if (temp1 === temp2) {
    return input;
  }
  // c to f
  if (temp1 === "c" && temp2 === "f") {
    const result = input * 1.8 + 32;
    return result.toFixed(3);
  }
  // c to k
  if (temp1 === "c" && temp2 === "k") {
    const result = parseFloat(input) + 273.15;
    return result.toFixed(3);
  }
  // f to c
  if (temp1 === "f" && temp2 === "c") {
    const result = (input - 32) / 1.8;
    return result.toFixed(3);
  }
  // f to k
  if (temp1 === "f" && temp2 === "k") {
    const result = (input - 32) / 1.8 + 273.15;
    return result.toFixed(3);
  }
  // k to c
  if (temp1 === "k" && temp2 === "c") {
    const result = input - 273.15;
    return result.toFixed(3);
  }
  // k to f
  if (temp1 === "k" && temp2 === "f") {
    const result = (input - 273.15) * 1.8 + 32;
    return result.toFixed(3);
  }
};
