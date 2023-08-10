<script>
  import { page } from "$app/stores";
import { Button } from "$atoms";
  import { SPECIAL_MEALS } from "$lib/constants";
  import { OptionLabel } from "$molecules";
  import { slide } from 'svelte/transition'

  export let title = ''
  export let specialMeals = []

  let show = false
  $: $page.url.pathname, show = false
</script>

{#if show}
  <div class='absolute top-0 left-0 w-full bg-base-300 z-10 menu px-0 py-4 shadow-border rounded-box h-full' transition:slide>
    <div class='h-full overflow-y-auto px-4 flex flex-col gap-1 scrollbar'>
      <div class='sticky top-0 w-full bg-base-300 pb-2 z-20'>
        <h5 class='card-title'>{title}</h5>
      </div>
      <div class='z-10 flex flex-col gap-2 flex-1'>
        {#each specialMeals as meal}
          <div>{meal.seat} {meal.passenger.name}</div>
          <OptionLabel option={meal.passenger.specialMeal} showQuantity />
        {/each}
      </div>
      <div class='sticky bottom-0 w-full bg-base-300 z-20 pt-4'>
        <Button size='small' width='full' on:click={() => show = !show}>
          Close
        </Button>
      </div>
    </div>
  </div>
{/if}

<Button on:click={() => show = !show} outlined size='small' state='neutral' width='full' self='start'>
    <span class='flex-1 text-left'>Special meals</span>
    <span>{specialMeals.length}</span>
</Button>
