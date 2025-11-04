<template>
	<div>
		<h1> store import page</h1>

		{{ colorStore.colorAndNumber }} <br />
		{{ numberStore.numberAndColor }}
	</div>
</template>

<script setup>
const colorStore = useColorStore();
const numberStore = useNumberStore();
</script>
