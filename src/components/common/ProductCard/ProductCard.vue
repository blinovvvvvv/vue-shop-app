<script setup lang="ts">
import { toRefs } from 'vue'
import { Categories } from '../Filter/filter.store'

interface ProductCardProps {
	id: number
	category: Categories
	images: string[]
	tags: string[]
	name: string
	price: number
}

const props = defineProps<ProductCardProps>()
const { images, name, price, id } = toRefs(props)
</script>

<template>
	<RouterLink :to="'/product/' + id" class="card">
		<img
			class="img"
			width="300"
			:src="images?.[0]"
			:alt="name"
			loading="lazy"
		/>
		<p class="name">{{ name }}</p>
		<span class="price">{{ price }}$</span>
	</RouterLink>
</template>

<style scoped>
.card {
	@apply max-w-[300px] flex flex-col gap-3 items-start;
}

.name {
	@apply font-medium text-lg;
}

.price {
	@apply font-semibold text-xl;
}

.img {
	@apply rounded-xl;
}
</style>
