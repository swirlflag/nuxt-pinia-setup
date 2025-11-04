<template>
	<div> main {{ nameStore.myName }}</div>
</template>

<script setup>
const nameStore = useNameStore();
</script>
