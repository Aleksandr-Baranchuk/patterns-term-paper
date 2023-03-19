import { MaybeRef } from '~/types';

const useProp = (props: object | MaybeRef<any>, key?: any, defaultValue?: any) => {
  return computed(() => {
    const val = unref(props);
    if (key) {
      return useGet(props, key, defaultValue);
    }
    return val || defaultValue;
  });
};

export default useProp;
