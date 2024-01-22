type DebounceFunction = <F extends (...args: any[]) => any>(
  func: F,
  delay: number
) => (...args: Parameters<F>) => void;

export const debounce: DebounceFunction = (func, delay) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<typeof func>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
