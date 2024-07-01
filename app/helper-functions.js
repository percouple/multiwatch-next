
// Converts seconds to formatted time
export const secondsToTime = (secs) => {
  let years = "",
    weeks = "",
    days = "",
    hours = "",
    minutes = "",
    seconds = "";

  // yrs = seconds / 31,449,600
  if (secs >= 31449600) {
    years = Math.floor(secs / 31449600);
    secs -= years * 31449600;
  }

  // weeks = seconds / 604,800
  if (secs >= 604800) {
    weeks = Math.floor(secs / 604800);
    secs -= weeks * 604800;
  }

  // Days = seconds / 86400
  if (secs >= 86400) {
    days = Math.floor(secs / 86400);
    secs -= days * 86400;
  }

  // Hours = seconds / 3600;
  if (secs >= 3600) {
    hours = Math.floor(secs / 3600);
    secs -= hours * 3600;
  }

  if (secs >= 60) {
    minutes = Math.floor(secs / 60);
    secs -= minutes * 60;
  }

  // Format for lettered results:
  if (years) {
    if (years > 1) {
      years = `${years} years,`;
    } else {
      years = `${years} year,`;
    }
  }
  if (weeks) {
    if (weeks > 1) {
      weeks = `${weeks} weeks,`;
    } else {
      weeks = `${weeks} week,`;
    }
  }
  if (days) {
    if (days > 1) {
      days = `${days} days,`;
    } else {
      days = `${days} day,`;
    }
  }

  // Format for 00:00:00
  if (minutes <= 9) {
    minutes = `0${minutes || "0"}`;
  }
  if (secs <= 9) {
    secs = `0${secs}`;
  }
  if (hours <= 9) {
    hours = `0${hours || "0"}`;
  }

  return `${years} ${weeks} ${days} ${hours}:${minutes}:${secs} `;
};

// // Class to generate a new clock
// export class Clock {
//   constructor(userId, name, clockId) {
//     this.name = name;
//     this.userId = userId;
//     this.clockId = clockId;
//     this.lastSessionTime = 0;
//     this.todaySessionTime = 0;
//     this.lastTodaySessionTime = 0;
//     this.thisWeekTime = 0;
//     this.lastThisWeekTime = 0;
//     this.allTime = 0;
//   }
// }

// // Color variables for use in themes object
// const white = "rgba(245, 245, 245, 1)";
// const black = "rgba(45, 49, 54, 1)";
// const aqua = "rgba(72, 169, 166, 1)";
// const orange = "rgba(254, 144, 0, 1)";

// // Themes object, for accessing from state
// export const themes = {
//   dark: {
//     textColor: white,
//     backgroundColor: black,
//     highlightColor: { clockOn: orange, clockOff: aqua },
//     secondaryHighlightColor: orange,
//     boxShadowColor: black,
//   },
//   light: {
//     textColor: black,
//     backgroundColor: white,
//     highlightColor: { clockOn: orange, clockOff: aqua },
//     secondaryHighlightColor: orange,
//   },
// };

// // CSS tools
// // Change opacity of last digit of rgba format
// export const shadow = (rgba, degree) => {
//   let rgbaArray = rgba.split("");
//   rgbaArray.splice(17, 1, degree);
//   return rgbaArray.join("");
// };

// // Lowers each rgba value by the degree passed, ignoring opacity
// export const darken = (rgba, degree) => {
//   rgba = rgba.slice(5, rgba.length - 2);
//   const nums = rgba.split(", ");
//   const result = nums.map((num) => {
//     return num - degree < 0 ? 0 : num - degree;
//   });
//   return `rgba(${result[0]}, ${result[1]}, ${result[2]}, 1)`;
// };
