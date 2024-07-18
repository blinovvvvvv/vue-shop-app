<script setup lang="ts">
import Container from './components/Container.vue'
import Header from './components/header/Header.vue'
</script>

<template>
	<Container>
		<Header />
		<RouterView />
	</Container>
</template>

<style scoped></style>
