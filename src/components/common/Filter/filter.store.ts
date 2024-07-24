import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Filters = 'jordan' | 'air-max' | 'air-force'

export const useFilterStore = defineStore('filter', () => {
	const filter = ref<Filters>('jordan')

	return {
		filter,
	}
})
