<script>
  import { page } from "$app/stores";
  import { SPECIAL_MEALS } from "$lib/constants";
  import { OptionLabel } from "$molecules";
  import { slide } from 'svelte/transition'

  export let cabin
  export let title

  let show = false
  $: $page.url.pathname, show = false
</script>

{#if show}
  <div class='absolute top-0 left-0 w-full bg-base-300 menu px-0 py-4 shadow-border rounded-box h-full' transition:slide>
    <div class='h-full overflow-y-auto px-4 flex flex-col gap-1 scrollbar'>
      <div class='sticky top-0 w-full bg-base-300 pb-2 z-20'>
        <h5 class='card-title'>{title}</h5>
      </div>
      <div class='z-10 flex flex-col gap-2 flex-1'>
        {#each SPECIAL_MEALS as option}
          <OptionLabel {option} showQuantity />
        {/each}
      </div>
      <div class='sticky bottom-0 w-full bg-base-300 z-20'>
        <button class='btn btn-block flex justify-between mt-2 btn-primary {show ? "btn-error" : "btn-ghost" }' on:click={() => show = !show}>
          <span>Special meals</span>
          <span>34</span>
        </button>
      </div>
    </div>
  </div>
{/if}

<button class='btn flex justify-between mt-2 btn-primary {show ? "btn-error" : "btn-primary" }' on:click={() => show = !show}>
  <span>Special meals</span>
  <span>34</span>
</button>


