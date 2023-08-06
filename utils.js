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
