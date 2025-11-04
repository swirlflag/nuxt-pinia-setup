<template>
	<div>
		<h1> PAGE number</h1>
		<div> numberStore.numberAndColor: {{ numberStore.numberAndColor }} </div>
		<div>
			<input type="number" v-model="form.number" />
			<button @click="onClickChangeNumber"> change number </button>
		</div>
	</div>
</template>
<script setup>
const form = reactive({
	number: 0,
});
const numberStore = useNumberStore();

const onClickChangeNumber = () => {
	numberStore.myNumber = form.number;
};
</script>
