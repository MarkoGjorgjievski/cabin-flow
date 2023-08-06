import { browser } from '$app/environment';
import { useConfig } from '$hooks/useConfig';
import { useZone } from '$hooks/useZone';
import { CONFIGURATION } from '$lib/constants';
import { writable } from 'svelte/store';

const { load, passengerSeating } = useZone(CONFIGURATION.economy)

const initialLoad = browser ? window.localStorage.getItem('load') ?? load : load;
const initialSeating = browser ? window.localStorage.getItem('zones') ?? passengerSeating : passengerSeating;
 
const passengerLoad = writable(initialLoad);
const passengerGrid = writable(initialSeating);
 
passengerLoad.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('theme', value);
    }
});

passengerGrid.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('theme', value);
    }
});

export { passengerLoad, passengerGrid };
