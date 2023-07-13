<script>
  import { JUMP_SEATS, CREW } from "$lib/constants";
  import { CrewJumpSeatsDnd, CrewPositionsDnd } from "$organisms";

  const { CP, FO, ...cabinCrew } = CREW;

  let tempCrewMembers = { ...cabinCrew }

  const handleJumpSeatsDnd = (e, i, j) => {
    JUMP_SEATS[i][j].crew = e.detail.items;
  }

  const handleCrewDnd = (e, position) => {
    tempCrewMembers[position] = e.detail.items;
  }
</script>

<div class='flex gap-6 h-full'>
  <CrewJumpSeatsDnd handleDnd='{handleJumpSeatsDnd}' jumpSeats='{JUMP_SEATS}' />
  <CrewPositionsDnd handleDnd='{handleCrewDnd}' crew='{tempCrewMembers}' />
</div>
