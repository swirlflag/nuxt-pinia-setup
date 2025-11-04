export const useColorStore = defineStore("color", () => {
	const numberStore = useNumberStore();
	const myColor = ref("blue");
	const colorAndNumber = computed(() => {
		return `${myColor.value} / ${numberStore.myNumber}`;
	});
	return {
		myColor,
		colorAndNumber,
	};
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useColorStore, import.meta.hot));
}
