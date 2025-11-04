<template>
	<div>
		<h1> PAGE color</h1>
		<div> colorStore.colorAndNumber: {{ colorStore.colorAndNumber }} </div>
		<div>
			<!-- <input type="text" v-model="form.color" /> -->
			<select v-model="form.color">
				<option value="red">red</option>
				<option value="blue">blue</option>
				<option value="green">green</option>
			</select>
			<button @click="onClickChangeColor"> change color </button>
		</div>
	</div>
</template>
<script setup>
const form = reactive({
	color: "blue",
});
const colorStore = useColorStore();

const onClickChangeColor = () => {
	colorStore.myColor = form.color;
};
</script>
