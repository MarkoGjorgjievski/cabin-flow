import { browser } from '$app/environment';
import { splitArray, splitArrayDataByMaxLength } from '$hooks';
import { fromLocalStorage, toLocalStorage } from '$hooks/localStorage';
import { useZone } from '$hooks/useZone';
import { CONFIGURATION } from '$lib/constants';
import { writable } from 'svelte/store';

const { load, passengerSeating } = useZone(CONFIGURATION.economy)

const passengerLoad = writable(fromLocalStorage('economyLoad', load));
toLocalStorage(passengerLoad, 'economyLoad');

const passengerGrid = writable(fromLocalStorage('economyZones', passengerSeating));
toLocalStorage(passengerGrid, 'economyZones');

const mainServiceSplit = writable(splitArrayDataByMaxLength(passengerSeating))
const minorServiceSplit = writable(splitArray(passengerSeating))

export { passengerLoad, passengerGrid, mainServiceSplit, minorServiceSplit };
