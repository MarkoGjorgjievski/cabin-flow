<script>
  import clsx from "clsx";
  import { CONFIGURATION } from "$lib/constants";
  import { seatType } from "$system/miscellaneous";

  export let seat;
  export let cabin = 'economy';
</script>

<div>
  <div class={clsx([seatType.get(cabin)], CONFIGURATION[cabin].ghostSeats.includes(seat) && 'invisible', 'aircraft-seat')}>{seat}</div>
</div>
