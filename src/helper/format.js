import moment from "moment";

/**
 * Format given total second to string "HH:MM:SS" using moment dependency
 *
 * @param {number} totalSecond - total second to be formatted
 * @returns {string} - formatted string
 */
function formattingTime(totalSecond) {
  const duration = moment.duration(totalSecond, "seconds");
  const hours = duration.hours().toString().padStart(2, "0");
  const minutes = duration.minutes().toString().padStart(2, "0");
  const seconds = duration.seconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

export { formattingTime };
