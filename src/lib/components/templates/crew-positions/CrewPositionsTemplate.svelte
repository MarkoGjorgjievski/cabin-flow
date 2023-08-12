<script>
  import { CrewJumpSeatsDnd, CrewPositionsDnd } from "$organisms";
  import { cabinCrew, jumpSeats } from "$lib/stores/shared";

  let activeCrew = null
  let activeRank = null
  let activeRow = null
  let activeSeat = null

  const updateStores = () => {
    $jumpSeats[activeRow][activeSeat].crew.push(activeCrew);
    $cabinCrew[activeRank] = $cabinCrew[activeRank].filter(cc => cc.id !== activeCrew.id);

    $jumpSeats = $jumpSeats
    $cabinCrew = $cabinCrew

    activeCrew = null
    activeRank = null
    activeRow = null
    activeSeat = null
  }

  const onSeatSelect = (row, seat) => {
    if (!row && !seat) {
      activeRow = row
      activeSeat = seat
    } else {
      if (activeRow !== row || activeSeat !== seat) {
        activeRow = row
        activeSeat = seat
      } else {
        activeRow = null
        activeSeat = null
      }
    }

    if (activeRow !== null && activeSeat !== null && activeCrew !== null && !$jumpSeats[activeRow][activeSeat].crew.length) {
      return updateStores()
    }
    if ($jumpSeats[activeRow][activeSeat].crew.length) {
      console.log(4)
      activeCrew = $jumpSeats[activeRow][activeSeat].crew[0]
      activeRank = $jumpSeats[activeRow][activeSeat].rank
      activeRow = null
      activeSeat = null
      return
    }
  }

  const onCrewSelect = (rank, crew) => {
    if (activeCrew?.id === crew.id) {
      activeCrew = null
      activeRank = null
    } else {
      activeCrew = crew
      activeRank = rank
    }

    if (activeCrew) {
      if (activeCrew.id === crew.id && activeRank === rank && activeRow !== null && activeSeat !== null) {
        console.log('here')
        return updateStores()
      }
    }
  }

  $: $jumpSeats, $cabinCrew
</script>

<div class='flex gap-6 h-full'>
  <CrewJumpSeatsDnd handleCrossfade='{onSeatSelect}' jumpSeats='{$jumpSeats}' {activeRow} {activeSeat} />
  <CrewPositionsDnd handleCrossfade='{onCrewSelect}' crew='{$cabinCrew}' activeId={activeCrew?.id} />
</div>
