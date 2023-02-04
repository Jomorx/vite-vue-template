import { createPinia } from "pinia";
// 持久化插件

import { useCountStore } from "./countStore";
export const pinia = createPinia();

export interface IAppStore {
	countStore: ReturnType<typeof useCountStore>;
}

const appStore: IAppStore = {} as IAppStore;

/**
 * @description 注册app状态库，store总入口
 */
export const registerStore = () => {
	appStore.countStore = useCountStore();
};

export default appStore;
