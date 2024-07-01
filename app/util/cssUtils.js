// Color variables for use in themes object
const white = "rgba(245, 245, 245, 1)";
const black = "rgba(45, 49, 54, 1)";
const aqua = "rgba(72, 169, 166, 1)";
const orange = "rgba(254, 144, 0, 1)";

// Themes object, for accessing from state
export const themes = {
  dark: {
    textColor: white,
    backgroundColor: black,
    highlightColor: { clockOn: orange, clockOff: aqua },
    secondaryHighlightColor: orange,
    boxShadowColor: black,
  },
  light: {
    textColor: black,
    backgroundColor: white,
    highlightColor: { clockOn: orange, clockOff: aqua },
    secondaryHighlightColor: orange,
  },
};

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