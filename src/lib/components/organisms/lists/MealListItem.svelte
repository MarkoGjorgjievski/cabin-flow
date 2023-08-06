<script>
  import { OptionLabel, OptionCounter } from "$molecules";
  import { passengerLoad } from "$lib/stores/economy.js";


  export let option;
  export let showDescription;
  export let editMode = false;
  export let range = false;
  export let count = null;

  let el
</script>

<div class='w-full max-w-[298px]'>
  <div class='flex border border-base-300 bg-base-300 rounded-lg overflow-hidden h-full'>
    <div class='bg-base-200 rounded-lg p-3 w-full flex flex-col h-full'>
      <div class='flex flex-col gap-2 w-full font-medium flex-1'>
        <h4 class='font-normal'>{option.title}</h4>
        {#if option?.description && showDescription}
          <p class='opacity-60 text-sm p-1'>{option?.description}</p>
        {/if}
      </div>

      <div class='divider my-1'></div>

      <OptionLabel {option} {range} bind:count={count}>
        {#if range}
          <input type='range' min='0' max={$passengerLoad} bind:this={el} bind:value={count} class='range bg-inherit w-full h-full absolute bottom-0 left-0 mix-blend-soft-light rounded-lg' />
        {/if}
      </OptionLabel>
    </div>

    <OptionCounter {editMode} id='{option.id}' count={count} onIncrement='{() => el?.stepUp(+1)}' onDecrement='{() => el?.stepUp(-1)}'  />
  </div>
</div>
