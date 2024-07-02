// CSS tools
// Change opacity of last digit of rgba format
export const shadow = (rgba, degree) => {
  let rgbaArray = rgba.split("");
  rgbaArray.splice(17, 1, degree);
  return rgbaArray.join("");
};

// Lowers each rgba value by the degree passed, ignoring opacity
export const darken = (rgba, degree) => {
  rgba = rgba.slice(5, rgba.length - 2);
  const nums = rgba.split(", ");
  const result = nums.map((num) => {
    return num - degree < 0 ? 0 : num - degree;
  });
  return `rgba(${result[0]}, ${result[1]}, ${result[2]}, 1)`;
};