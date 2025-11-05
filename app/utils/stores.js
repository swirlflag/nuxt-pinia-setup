import { useNumberStore as call_useNumberStore } from "~/stores/number";
import { useColorStore as call_useColorStore } from "~/stores/color";

export const useColorStore = () => call_useColorStore();
export const useNumberStore = () => call_useNumberStore();

export const stores = {
	useColorStore: call_useColorStore,
	useNumberStore: call_useNumberStore,
};

export default stores;
