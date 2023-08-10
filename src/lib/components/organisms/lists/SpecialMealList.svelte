<script>
  import { page } from "$app/stores";
  import { Button } from "$atoms";
  import { sortTotalSpecialMeals } from "$hooks";
  import { OptionLabel } from "$molecules";
  import { slide } from 'svelte/transition'

  export let title = ''
  export let specialMeals = []

  let show = false
  let activeTab = 'list'

  const sorted = sortTotalSpecialMeals(specialMeals);

  $: $page.url.pathname, show = false
</script>

{#if show}
  <div class='absolute top-0 left-0 w-full bg-base-300 z-10 menu px-0 py-4 shadow-border rounded-box h-full' transition:slide>
    <div class='h-full overflow-y-auto px-4 flex flex-col gap-1 scrollbar'>
      <div class='sticky top-0 w-full bg-base-300 pb-2 z-20'>
        <h5 class='card-title'>{title}</h5>
        <div class='tabs tabs-boxed tabs-sm mt-2'>
          <button class='tab tab-sm flex-1' class:tab-active={activeTab === 'list'} on:click={() => activeTab = 'list'}>List</button>
          <button class='tab tab-sm flex-1' class:tab-active={activeTab === 'total'} on:click={() => activeTab = 'total'}>Total</button>
        </div>
      </div>
      <div class='z-10 flex flex-col gap-2 flex-1'>
        {#if activeTab === 'list'}
          {#each specialMeals as spot}
            <div class='flex justify-between w-full items-center'>
              <div class='w-full'>{spot.seat} {spot.passenger.name}</div>
              <span class='w-fit'><OptionLabel option={spot.passenger.specialMeal} /></span>
            </div>
          {/each}
        {/if}
        {#if activeTab === 'total'}
          {#each sorted as spot}
            <OptionLabel option={spot.specialMeal} quantity={spot.passengers.length} showQuantity />
          {/each}
        {/if}
      </div>
      <div class='sticky bottom-0 w-full bg-base-300 z-20 pt-4'>
        <Button size='small' width='full' state='neutral' on:click={() => show = !show}>
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
