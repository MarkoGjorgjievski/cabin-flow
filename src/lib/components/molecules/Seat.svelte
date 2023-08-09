<script>
  import clsx from "clsx";
  import { seatType } from "$system/miscellaneous";
  import { badgeColor, badgeTextColor } from "$system/badge";
  import { getContext } from "svelte";

  export let seat;
  export let passenger;
  export let cabin = 'economy';

  const { ghostSeats, aisleAfterSeat } = getContext('config');
</script>


<div class={clsx(aisleAfterSeat.includes(seat.at(-1)) && 'pr-4')}>
  <div class={clsx([seatType.get(cabin)], ghostSeats.includes(seat) && 'invisible', 'aircraft-seat relative', passenger ? 'text-info/80' : 'border border-gray-600 text-gray-600 border-dashed bg-transparent')}>
    {seat}
    {#if passenger?.specialMeal}<div class={clsx('absolute -top-0.5 left-1/2 -translate-x-1/2 text-[10px] leading-none bg-base-300', badgeTextColor.get(passenger.specialMeal.color))}>{passenger.specialMeal.label}</div>{/if}
  </div>
</div>
