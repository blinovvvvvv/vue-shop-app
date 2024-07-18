<script setup lang="ts">
const headerItems = ['Men', 'Women', 'Kids', 'Apparel']
</script>

<template>
	<header class="header">
		<ul>
			<li v-for="link in headerItems" :key="link">
				{{ link }}
			</li>
		</ul>
	</header>
</template>

<style scoped>
.header {
}
</style>
