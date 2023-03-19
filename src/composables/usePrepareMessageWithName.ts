import { MaybeRef } from '~/types';
import useUserStore from '~/store/user';

const usePrepareMessageWithName = (propMessage: MaybeRef<string | string[]> | Readonly<object>, propKey?: string) => {
  const userStore = useUserStore();
  const message = useProp(propMessage, propKey);
  return computed(() => {
    const params = { userName: useUpperFirst(userStore.userName) };
    if (isArray(message.value)) {
      return message.value.map((str) => createStringFromTemplate(str, params));
    }
    return createStringFromTemplate(message.value, params);
  });
};

export default usePrepareMessageWithName;
