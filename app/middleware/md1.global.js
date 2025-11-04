export default defineNuxtRouteMiddleware(async (to, from) => {
	const colorStore = useColorStore();
	const numberStore = useNumberStore();
	console.log("global middleware call store:::", colorStore.colorAndNumber, numberStore.numberAndColor);
});
