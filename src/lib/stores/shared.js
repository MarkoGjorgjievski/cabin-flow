import { JUMP_SEATS, CREW } from "$lib/constants";
import { writable } from "svelte/store";

const { CP, FO, ...crew } = CREW;

const cabinCrew = writable(crew);
const jumpSeats = writable(JUMP_SEATS);

export { cabinCrew, jumpSeats }