<script>
  import { Divider } from "$atoms";
  import { SpecialMealList } from "$organisms";

  export let title;
  export let upperCorner;
  export let rows;
  export let passengerNumber = 40;
</script>

<div class="card w-full h-fit relative">
  <div class='card-body'>
    <div class='flex justify-between'>
      <h5 class='card-title'>{title}</h5>
      <h6 class='text-sm opacity-60'>{upperCorner}</h6>
      <!--{#if rows && passengerNumber}-->
      <!--  <div class='flex justify-between text-sm opacity-60 w-full my-2 py-1 border-y border-base-300'>-->
      <!--    <div class='w-full'>{rows}</div>-->
      <!--    <div class='w-fit'>{passengerNumber}</div>-->
      <!--  </div>-->
      <!--{/if}-->
    </div>

    <slot />

    <!--{#if cabin === 'economy'}-->
    <!--  <div class='flex flex-col justify-between'>-->
    <!--    <div class='flex flex-col gap-2'>-->
    <!--      {#each options as option}-->
    <!--        <OptionLabel {option} showQuantity />-->
    <!--      {/each}-->
    <!--    </div>-->
    <!--  </div>-->
    <!--{/if}-->

    <SpecialMealList {title} />
    <div>
      <Divider />
      <div class='flex justify-between pt-2'>
        <p>Total meals</p>
        <span>0</span>
      </div>
    </div>
  </div>
</div>
