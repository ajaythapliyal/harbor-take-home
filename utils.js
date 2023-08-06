import ethereum from "./public/icons/Ethereum.png";
import polygon from "./public/icons/Polygon.png";

export const RUNNING_STATE = "RUNNING";
export const PENDING_STATE = "PENDING";
export const STOPPED_STATE = "STOPPED";

export const isSettled = (status) => ![PENDING_STATE].includes(status);

export const blockchainIconMapper = {
  ethereum: ethereum,
  polygon: polygon,
};

export function timeDifference(previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = Date.now() - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months";
  } else {
    return Math.round(elapsed / msPerYear) + " years";
  }
}
