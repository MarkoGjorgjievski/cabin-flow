import { useConfig } from "$hooks/useConfig2";
import { JUMP_SEATS, CREW } from "$lib/constants";
import { derived, writable } from "svelte/store";

const { CP, FO, ...crew } = CREW;

const addPositionProp = (data) => {
    for (const category in data) {
        for (const entry of data[category]) {
            entry.position = null
        }
    }

    return data
}

const crewWithPositions = addPositionProp(crew)

const cabinCrew = writable(crewWithPositions);
const jumpSeats = writable(JUMP_SEATS)

export { cabinCrew, jumpSeats }
