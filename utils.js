export const RUNNING_STATE = "RUNNING";
export const PENDING_STATE = "PENDING";
export const STOPPED_STATE = "STOPPED";

export const isSettled = (status) => ![PENDING_STATE].includes(status);
