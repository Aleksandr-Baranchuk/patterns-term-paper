import { MaybeRef } from '~/types';
import createStringFromTemplate from '~/utils/createStringFromTemplate';
import useUserStore from '~/store/user';

const usePrepareMessageWithName = (rawMessage: MaybeRef<string | string[]>) => {
  const userStore = useUserStore();
  return computed(() => {
    const message = unref(rawMessage);
    const params = { userName: useUpperFirst(userStore.userName) };
    if (isArray(message)) {
      return message.map((str) => createStringFromTemplate(str, params));
    }
    return createStringFromTemplate(message, params);
  });
};

export default usePrepareMessageWithName;
