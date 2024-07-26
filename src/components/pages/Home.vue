<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { supabase } from '../../db/supabase'
import { Product } from '../../types/product.types'
import { useFilterStore } from '../common/Filter/filter.store'
import Filter from '../common/Filter/Filter.vue'
import ProductCard from '../common/ProductCard/ProductCard.vue'

const items = ref<Product[]>([])

const store = useFilterStore()

const getData = async () => {
	const { data } = await supabase.from('shoes').select()
	if (data) items.value = data
}

onMounted(() => {
	getData()
})
</script>

<template>
	<div class="welcome">
		<h1 class="heading">POPULAR SHOES COLLECTION</h1>
		<p class="slogan">
			Find everything you need to look and feel your best, and shop the latest
			fashion and lifestyle products
		</p>
		<Filter />
		<div class="list">
			<ProductCard
				v-for="card in items.filter(i => i.category === store.filter)"
				:category="card.category"
				:id="card.id"
				:images="card.images"
				:name="card.name"
				:tags="card.tags"
				:price="card.price"
				:key="card.id"
			/>
		</div>
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
	@apply text-lg text-[#c2c2c2] font-medium max-w-xl mx-auto mb-6;
}

.list {
	@apply pt-6 pb-10 grid grid-cols-4 gap-6 gap-y-12;
}
</style>
