import { browser } from '$app/environment';
import { useZone } from '$hooks/useZone';
import { CONFIGURATION } from '$lib/constants';
import { writable } from 'svelte/store';

const { load, passengerSeating } = useZone(CONFIGURATION.economy)

// const initialLoad = browser ? window.localStorage.getItem('load') ?? load : load;
// const initialSeating = browser ? window.localStorage.getItem('zones') ?? passengerSeating : passengerSeating;
 
// const passengerLoad = writable(initialLoad);
// const passengerGrid = writable(initialSeating);

const passengerLoad = writable(load);
const passengerGrid = writable(passengerSeating);
 
// passengerLoad.subscribe((value) => {
//     if (browser) {
//         window.localStorage.setItem('load', value);
//     }
// });

// passengerGrid.subscribe((value) => {
//     if (browser) {
//         window.localStorage.setItem('zones', value);
//     }
// });

export { passengerLoad, passengerGrid };
