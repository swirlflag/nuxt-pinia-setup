import { useColorStore } from "./color";

export const useNumberStore = defineStore("number", () => {
	const myNumber = ref(0);
	const colorStore = useColorStore();
	const numberAndColor = computed(() => {
		return `${myNumber.value} / ${colorStore.myColor}`;
	});

	return {
		myNumber,
		numberAndColor,
	};
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useNumberStore, import.meta.hot));
}
