<script>
  import clsx from "clsx";
  import { seatType } from "$system/miscellaneous";
  import { getContext } from "svelte";

  export let seat;
  export let cabin = 'economy';

  const { ghostSeats } = getContext('config');
</script>

<div>
  <div class={clsx([seatType.get(cabin)], ghostSeats.includes(seat) && 'invisible', 'aircraft-seat')}>{seat}</div>
</div>
