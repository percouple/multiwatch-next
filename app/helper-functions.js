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

export const nonTailwindColors = {
  light: {
    clockOn: 'hsl(34, 100%, 49.8%)',
    clockOff: 'hsl(179, 41.1%, 46.7%)',
    editing: 'hsl(270deg 41.1% 46.7%)',
  },
  dark: {
    clockOn: 'hsl(34, 100%, 49.8%)',
    clockOff: 'hsl(179, 41.1%, 46.7%)',
    editing: 'hsl(270deg 41.1% 46.7%)',
  },
  retro: {
    clockOn: 'hsl(12, 76%, 61%)',
    clockOff: 'hsl(173, 58%, 39%)',
    editing: 'hsl(43, 74%, 66%)',
  },
}