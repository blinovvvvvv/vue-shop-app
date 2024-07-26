import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Categories = 'jordan' | 'air-max' | 'air-force'

export const useFilterStore = defineStore('filter', () => {
	const filter = ref<Categories>('jordan')

	return {
		filter,
	}
})
