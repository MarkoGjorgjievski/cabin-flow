import { derived } from 'svelte/store'

const identity = x => x

export function mapReduce(store, mapFn = identity, initialValue = 0) {
	return derived(store, $store => {
		return $store.reduce((acc, x) => acc + mapFn(x), initialValue)
	})
}