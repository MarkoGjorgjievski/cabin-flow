<script>
  import { swipe } from 'svelte-gestures';
  import { slide } from "svelte/transition";
  import { MENU } from "../../../constants";
  import { Button, Divider } from "../../atoms";
  import { OptionLabel } from "../index";

  export let activeType
  export let options
  export let addOption
  export let filterOption
  export let onSwipe
</script>

{#if activeType}
  <div use:swipe={{ timeframe: 500, minSwipeDistance: 50, touchAction: 'pan-y' }} on:swipe={onSwipe} class='z-10 absolute bottom-0 h-[228px] w-full bg-base-200 rounded-box p-2 flex flex-col gap-2 backdrop-blur-xl overflow-y-auto' transition:slide>
    <div class='h-2 flex items-center justify-center'>
      <div class='h-1 bg-gray-800 w-12 rounded-full self-center cursor-pointer'></div>
    </div>
    {#each Object.entries(MENU.business[activeType]) as [key, service]}
      {#each Object.values(service) as item}
        <h2 class='pl-1 text-sm font-normal'>{item.label}</h2>
        <div class='flex flex-wrap w-full gap-1'>
          {#each item.options as option, i}
            {#if options.find(item => item[activeType]?.id === option.id)}
                  <span class='flex items-center'>
                    <OptionLabel {option} filter onFilter='{() => filterOption(option)}' />
                  </span>
            {:else}
              <Button naked on:click={() => addOption(option)}>
                <OptionLabel {option} />
              </Button>
            {/if}
          {/each}
        </div>
        <Divider lastHidden />
      {/each}
    {/each}
  </div>
{/if}
