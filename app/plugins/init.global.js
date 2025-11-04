export default defineNuxtPlugin(() => {
	const colorStore = useColorStore();
	const numberStore = useNumberStore();
	console.log("init global call store:::", colorStore.colorAndNumber, numberStore.numberAndColor);
});
