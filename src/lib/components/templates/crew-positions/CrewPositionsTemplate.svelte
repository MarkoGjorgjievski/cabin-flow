<script>
import { CrewJumpSeatsDnd, CrewPositionsDnd } from '$organisms';
import { cabinCrew, jumpSeats } from '$lib/stores/shared';
import { writable } from 'svelte/store';

const position = writable(null);
const crew = writable(null);
const prevPosition = writable(null);

const onSeatSelect = (row, seat) => {
  if ($jumpSeats[row][seat].crew.length) {
    $prevPosition = $jumpSeats[row][seat].position;
    $crew = $jumpSeats[row][seat].crew[0];
    return;
  }

  if ($position === $jumpSeats[row][seat].position) {
    $position = null;
  } else {
    $position = $jumpSeats[row][seat].position;
  }
};

const onCrewSelect = cc => {
  $crew = cc;
  if ($crew.position) {
    $prevPosition = $crew.position
  }
};

const updateJumpSeat = () => {
  $jumpSeats.map(row =>
    row.map(seat => {
      seat.position === $position && seat.crew.push($crew);
      seat.position === $prevPosition && seat.crew.pop();
    }),
  );

  $jumpSeats = $jumpSeats;
};

const updateCrew = () => {
  Object.values($cabinCrew).map(_crew => {
    return _crew.map(cc => {
      console.log(cc.id, $crew?.id, $position)
      if (cc.id === $crew?.id) {
        cc.position = $position
      }
    })
  });

  $cabinCrew = $cabinCrew;
};

const updateGrid = () => {
  updateCrew();
  updateJumpSeat();
  $position = null;
  $crew = null;
  $prevPosition = null
};

$: if ($position && $crew) {
  updateGrid();
}

$: console.log("cabin crew",$cabinCrew)
</script>

<div class="flex gap-6 h-full">
  <CrewPositionsDnd handleCrossfade="{onCrewSelect}" crew="{$cabinCrew}" activeId="{$crew?.id}" />
  <CrewJumpSeatsDnd handleCrossfade="{onSeatSelect}" jumpSeats="{$jumpSeats}" activeSeat="{$position || $crew?.position}" />
</div>
