<script setup lang="ts">
import { Filters, useFilterStore } from './filter.store'

interface FilterItem {
	name: string
	value: Filters
}

const filterItems: FilterItem[] = [
	{
		name: 'Jordan',
		value: 'jordan',
	},
	{
		name: 'Air Max',
		value: 'air-max',
	},
	{
		name: 'Air Force',
		value: 'air-force',
	},
]

const store = useFilterStore()
</script>

<template>
	<div class="row">
		<button
			v-for="item in filterItems"
			:key="item.value"
			class="button"
			:class="{ active: store.filter === item.value }"
			@click="store.filter = item.value"
		>
			{{ item.name }}
		</button>
	</div>
</template>

<style scoped>
.row {
	@apply flex items-center gap-4 mx-auto;
}

.button {
	@apply py-2 px-6 rounded-3xl border border-black font-medium hover:bg-black hover:text-white transition-colors;
}

.active {
	@apply bg-black text-white;
}
</style>
