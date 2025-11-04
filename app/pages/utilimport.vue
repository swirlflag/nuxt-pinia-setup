<template>
	<div>
		<h1> utils import page</h1>

		{{ colorStore.colorAndNumber }} <br />
		{{ numberStore.numberAndColor }}
	</div>
</template>

<script setup>
const colorStore = stores.useColorStore();
const numberStore = stores.useNumberStore();
</script>
