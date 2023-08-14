<script>
  import { CrewJumpSeatsDnd, CrewPositionsDnd } from "$organisms";
  import { cabinCrew, jumpSeats, jumpSeatPositions } from "$lib/stores/shared";
  import CrewCard from "$molecules/cards/CrewCard.svelte";

  let activeCrew = null
  let activeRank = null
  let activeRow = null
  let activeSeat = null

  const updateJumpSeatStore = (row, seat) => {
    $jumpSeats[row][seat].crew.push(activeCrew);
    $jumpSeats = $jumpSeats
  }

  const updateCrewStore = (rank, crew) => {
    console.log('crew')
    $cabinCrew[rank].find(cc => cc.id == crew.id).position = $jumpSeats[activeRow][activeSeat].position
    $cabinCrew = $cabinCrew
  }

  const occupiedSeat = (row, seat) => {
    activeRow = row
    activeSeat = seat
    activeCrew = $jumpSeats[activeRow][activeSeat].crew[0]
    activeRank = $jumpSeats[activeRow][activeSeat].rank
  }

  const onCrewSelect = (rank, crew) => {
    activeCrew = crew
    activeRank = rank

    if (activeRow !== null && activeSeat !== null) {
      updateJumpSeatStore(activeRow, activeSeat)
      updateCrewStore(rank, crew)
      console.log('crew select update')
      activeCrew = null
      activeRank = null
      return
    }

    if (activeCrew == crew && activeRank == rank) {
      activeCrew = null
      activeRank = null
    }
  }

  const onSeatSelect = (row, seat) => {
    if ($jumpSeats[row][seat].crew.length) {
      occupiedSeat(row, seat)
      return
    }
    if (activeCrew) {
      updateJumpSeatStore(row, seat)
      updateCrewStore(activeRank, activeCrew)

      activeCrew = null
      activeRank = null
      return
    }
    if(row !== activeRow && activeSeat !== seat) {
      activeRow = row
      activeSeat = seat
    } else {
      activeRow = null
      activeSeat = null
    }
  }

  $: $jumpSeats, $cabinCrew
</script>

<div class='flex gap-6 h-full'>
  <CrewPositionsDnd handleCrossfade='{onCrewSelect}' crew='{$cabinCrew}' activeId={activeCrew?.id} />
  <CrewJumpSeatsDnd handleCrossfade='{onSeatSelect}' jumpSeats='{$jumpSeats}' {activeRow} {activeSeat} />
</div>
