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
const jumpSeatPositions = derived([cabinCrew, jumpSeats], ([$cabinCrew, $jumpSeats]) => {
    $jumpSeats.forEach(row => row.forEach(seat => {
        if (seat.crew.length) {
            $cabinCrew[seat.rank].find(crew => seat.crew[0].id === crew.id).position = seat.position
        }
    }))
      
    Object.values($cabinCrew).forEach(value => {
        if (!value.crew.length) {
            value.position = null;
        }
    });

    return $cabinCrew
});

export { cabinCrew, jumpSeats, jumpSeatPositions }