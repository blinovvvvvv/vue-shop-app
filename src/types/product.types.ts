import { Categories } from '../components/common/Filter/filter.store'

export interface Product {
	category: Categories
	created_at: string
	description: string
	id: number
	images: string[]
	name: string
	size: string[]
	tags: string[]
	price: number
}
