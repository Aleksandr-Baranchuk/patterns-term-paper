import { MaybeRef } from '~/types';

const setCountWithMin = (count: number, current: MaybeRef<number>, min = 0) => {
  const currentCount = count + unref(current);
  return currentCount < min ? min : currentCount;
};

export default setCountWithMin;
