import { browser } from '$app/environment';
import { splitArrayDataByMaxLength } from '$hooks';
import { fromLocalStorage, toLocalStorage } from '$hooks/localStorage';
import { useZone } from '$hooks/useZone';
import { CONFIGURATION } from '$lib/constants';
import { writable } from 'svelte/store';

const { load, passengerSeating } = useZone(CONFIGURATION.business)

const businessPassengerLoad = writable(fromLocalStorage('businessLoad', load));
toLocalStorage(businessPassengerLoad, 'businessLoad');

const businessPassengerGrid = writable(fromLocalStorage('businessZones', passengerSeating));
toLocalStorage(businessPassengerGrid, 'businessZones');

export { businessPassengerLoad, businessPassengerGrid };