<script setup lang="ts"></script>

<template>
	<div class="welcome">
		<h1 class="heading">POPULAR SHOES COLLECTION</h1>
		<p class="slogan">
			Find everything you need to look and feel your best, and shop the latest
			fashion and lifestyle products
		</p>
	</div>
</template>

<style scoped>
.welcome {
	@apply mx-auto text-center mt-14 flex flex-col gap-5;
}

.heading {
	@apply text-5xl font-bold;
}

.slogan {
	@apply text-lg text-[#c2c2c2] font-medium max-w-xl mx-auto;
}
</style>
