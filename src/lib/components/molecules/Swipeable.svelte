<script>
  import { swipe } from 'svelte-gestures';
  import { slide } from "svelte/transition";

  export let trigger = false
  export let onSwipe = () => null
</script>

{#if trigger}
  <div use:swipe={{ timeframe: 500, minSwipeDistance: 50, touchAction: 'pan-y' }} on:swipe={onSwipe} class='z-10 absolute bottom-0 h-[228px] w-full bg-base-200 rounded-box p-2 scrollbar flex flex-col gap-2 backdrop-blur-xl overflow-y-auto' transition:slide>
    <div class='h-2 flex items-center justify-center'>
      <div class='h-1 bg-gray-800 w-12 rounded-full self-center cursor-pointer'></div>
    </div>
    <slot />
  </div>
{/if}
