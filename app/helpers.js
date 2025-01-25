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

// export const nonTailwindColors = {
//   light: {
//     text: 'hsl(223, 7.4% 19.8%)',
//     clockOn: 'hsl(34, 100%, 49.8%)',
//     clockOff: 'hsl(179, 41.1%, 46.7%)',
//     editing: 'hsl(270deg 41.1% 46.7%)',
//   },
//   dark: {
//     text: 'hsl(0, 0% 96.1%)',
//     clockOn: 'hsl(34, 100%, 49.8%)',
//     clockOff: 'hsl(179, 41.1%, 46.7%)',
//     editing: 'hsl(270deg 41.1% 46.7%)',
//   },
//   retro: {
//     text: 'hsl(197, 37% 24%)',
//     clockOn: 'hsl(12, 76%, 61%)',
//     clockOff: 'hsl(173, 58%, 39%)',
//     editing: 'hsl(43, 74%, 66%)',
//   },
//   olive: {
//     text: 'hsl(83, 90% 94%)',
//     clockOn: 'hsl(15, 62%, 40%)',
//     clockOff: 'hsl(162, 27%, 19%)',
//     editing: 'hsl(4, 80%, 65%)',
//   },
//   grape: {
//     text: 'hsl(286, 70% 97%)',
//     clockOn: "hsl(273, 43%, 65%)",
//     clockOff: "hsl(245, 72%, 59%)",
//     editing: "hsl(249, 93%, 83%)",
//   },
// }