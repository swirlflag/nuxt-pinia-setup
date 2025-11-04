<template>
	<div>
		<NuxtLink to="/color">color</NuxtLink>
		<NuxtLink to="/number">number</NuxtLink>
		<NuxtLink to="/utilimport">utilimport</NuxtLink>
		<slot />
	</div>
</template>

<style scoped>
a {
	border: 1px solid #ddd;
	padding: 5px;
}
</style>
