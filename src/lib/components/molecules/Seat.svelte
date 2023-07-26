<script>
  import clsx from "clsx";
  import { seatType } from "$system/miscellaneous";
  import { getContext } from "svelte";

  export let seat;
  export let cabin = 'economy';

  const { ghostSeats, aisleAfterSeat } = getContext('config');
</script>

<div class={clsx(aisleAfterSeat.includes(seat.at(-1)) && 'pr-4')}>
  <div class={clsx([seatType.get(cabin)], ghostSeats.includes(seat) && 'invisible', 'aircraft-seat',)}>{seat}</div>
</div>
