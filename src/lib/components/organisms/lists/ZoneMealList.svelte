<script>
  import { Divider } from "$atoms";
  import { SpecialMealList } from "$organisms";
  import clsx from "clsx";

  export let title;
  export let upperCorner;
  export let rows = [];
  export let specialMeals = [];
  export let totalMeals = 0
  export let totalOccupants = 0
  export let passengerNumber = 40;
  export let border = 'border-none';
</script>

<div class={clsx("card w-full h-fit relative border", border)}>
  <div class='card-body'>
    <div class='flex justify-between'>
      <h5 class='card-title'>{title}</h5>
      <h6 class='text-sm opacity-60'>{upperCorner}</h6>
    </div>

    <slot />

    <Divider my={0} />
    <SpecialMealList {title} {specialMeals} />
    <div>
      <Divider my={0} />
      <div class='flex justify-between pt-2'>
        <p>Total meals</p>
        <span>{totalMeals}</span>
      </div>
      <div class='flex justify-between text-xs opacity-50'>
        <p>Total occupants</p>
        <span class='{clsx(totalOccupants > totalMeals && 'text-warning')}'>{totalOccupants}</span>
      </div>
    </div>
  </div>
</div>
