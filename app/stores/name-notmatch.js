export const useNameStore = defineStore("name", () => {
	const myName = ref("foo");
	return {
		myName,
	};
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useNameStore, import.meta.hot));
}
