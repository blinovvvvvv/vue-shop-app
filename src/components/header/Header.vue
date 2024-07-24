<script setup lang="ts">
const headerItems = ['Men', 'Women', 'Kids', 'Apparel']
</script>

<template>
	<header class="header">
		<RouterLink to="/" class="logo">Vue Shop</RouterLink>
		<ul class="links">
			<li v-for="link in headerItems" :key="link">
				<RouterLink
					class="link"
					:class="{ active: $route.path === link.toLowerCase() }"
					:to="link.toLowerCase()"
				>
					{{ link }}
				</RouterLink>
			</li>
		</ul>
		<div class="icons">
			<button>
				<i class="pi pi-search" style="font-size: 1.2rem"></i>
			</button>
			<RouterLink to="/cart">
				<i class="pi pi-shopping-cart" style="font-size: 1.4rem"></i>
			</RouterLink>
		</div>
	</header>
</template>

<style scoped>
.header {
	@apply py-8 flex items-center justify-between;
}

.links {
	@apply flex items-center gap-10;
}

.link {
	@apply font-medium text-lg text-[#8b8b8b] hover:text-black transition-colors;
}

.icons {
	@apply flex items-center gap-6;
}
</style>
