<script>
  import { SPECIAL_MEALS } from "$lib/constants";
  import { MealOption } from "$molecules";
  import { slide } from 'svelte/transition'

  let show = false
</script>

{#if show}
  <div class='absolute top-24 left-0 w-full h-80 bg-base-100' transition:slide>
    <div class='h-full overflow-y-auto px-4 flex flex-col gap-1'>
        {#each SPECIAL_MEALS as option}
          <MealOption option='{{...option, title: false }}'/>
        {/each}
    </div>
  </div>
{/if}

<button class='btn btn-outline flex justify-between mt-2 btn-primary {show ? "btn-outline btn-error" : "btn-ghost" }' on:click={() => show = !show}>
  <span>Special meals</span>
  <span>34</span>
</button>


