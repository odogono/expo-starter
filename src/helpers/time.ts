export const FIVE_MINUTES = 1000 * 60 * 5;
export const TEN_MINUTES = 1000 * 60 * 10;
export const THIRTY_MINUTES = 1000 * 60 * 30;
export const ONE_DAY = 1000 * 60 * 60 * 24;
export const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
export const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;
export const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;

export const INFINITY = Infinity;

/**
 * Waits for a given number of milliseconds
 * @param time Number of milliseconds to wait
 * @returns Promise that resolves after the given time
 */
export const wait = async (time: number = 1000): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });

export type TimeoutId = ReturnType<typeof setTimeout>;

/**
 * Runs a function after a given number of milliseconds
 * @param time Number of milliseconds to wait
 * @param fn Function to run
 */
export const runAfter = (time: number, fn: () => void): TimeoutId =>
  setTimeout(() => fn(), time);

export const runNextTick = (fn: () => void): void => {
  setTimeout(() => fn(), 0);
};

export const clearRunAfter = (timeoutId: TimeoutId | null | undefined) => {
  if (!timeoutId) {
    return undefined;
  }
  clearTimeout(timeoutId);
  return undefined;
};

export const runInterval = (time: number, fn: () => void): TimeoutId =>
  setInterval(fn, time);

export const clearRunInterval = (timeoutId: TimeoutId | null | undefined) => {
  if (!timeoutId) {
    return undefined;
  }
  clearInterval(timeoutId);
  return undefined;
};
