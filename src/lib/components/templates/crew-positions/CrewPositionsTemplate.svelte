<script>
import { CrewJumpSeatsDnd, CrewPositionsDnd } from '$organisms';
import { cabinCrew, jumpSeats } from '$lib/stores/shared';
import { writable } from 'svelte/store';

const position = writable(null);
const crew = writable(null);
const prevPosition = writable(null);

const onSeatSelect = (row, seat) => {
  if ($jumpSeats[row][seat].crew.length) {
    if ($jumpSeats[row][seat].crew[0]?.id === $crew?.id) {
      $crew = null
      return
    }
    $prevPosition = $jumpSeats[row][seat].position;
    $crew = $jumpSeats[row][seat].crew[0];

    console.log($crew?.position, $position)
    return
  }

  if ($position === $jumpSeats[row][seat].position) {
    console.log('tuj li sam 1')

    $position = null;
  } else {
    console.log('tuj li sam 2')
    $position = $jumpSeats[row][seat].position;
  }
};

console.log($position)

const onCrewSelect = cc => {
  if (cc.id !== $crew?.id) {
    $crew = cc;

    if ($crew.position) {
      $prevPosition = $crew.position
    } else {
      $prevPosition = null
    }
    return
  }
  if (cc.id === $crew?.id) {
    $crew = null
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

$: console.log($prevPosition)
</script>

<div class="flex gap-6 h-full">
  <CrewPositionsDnd handleCrossfade="{onCrewSelect}" crew="{$cabinCrew}" activeId="{$crew?.id}" />
  <CrewJumpSeatsDnd handleCrossfade="{onSeatSelect}" jumpSeats="{$jumpSeats}" activeSeat="{$position || $crew?.position}" />
</div>
