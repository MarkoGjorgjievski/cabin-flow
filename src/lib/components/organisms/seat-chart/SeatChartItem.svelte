<script>
  import { Divider, Toggle } from "$atoms";
  import {
    ArrowUpRight,
    BellAlertIcon,
    ClockIcon,
    CutleryIcon,
    ChatBubbleIcon,
    SparklingWaterIcon,
    StillWaterIcon,
    WineGlassIcon
  } from "$icons";
  import { LabelBadge, MealOption } from "$molecules";
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import { slide } from "svelte/transition";


  export let seats;
  export let row;
  export let handleDnd;
  export let delay = false;
  export let dontDisturb = false;

  let hoursSpan;
  let minutesSpan;

  let hours = 10;
  let minutes = 59;

  // if (hoursSpan && minutesSpan) {
  //   setInterval(() => {
  //     if(hours > 0){
  //       hours--
  //     }
  //     if (minutes > 0) {
  //       minutes--
  //     } else {
  //       minutes = 59
  //     }
  //     hours.style.setProperty('--value', hoursSpan)
  //     minutes.style.setProperty('--value', minutesSpan)
  //   }, 1000)
  // }

  // TODO: Refactor
</script>


<div class='card bg-base-100 shadow-border-sm max-w-sm w-0 flex-1 overflow-hidden'>
  <div class='card-body gap-1 relative'>
    <div class='flex w-full gap-3'>
      <h4 class='text-2xl opacity-60 font-normal'>{row + 1 + 'A'}</h4>
      <div class='h-8 flex flex-1 items-center leading-4'>
        <h4 class='font-medium'><span class='font-light'>MR</span> John Smith Jean
          {#if row === 2}{'van Dam'}{/if}
        </h4>
      </div>
      <span class='badge badge-xs py-1 h-4 bg-orange-100 text-orange-800'>Gold</span>
    </div>
    <Divider my='0' />
    <div class='flex flex-col w-full gap-1'>
      <div class='flex items-center w-full gap-4 pl-1 rounded-lg'>
        <ArrowUpRight />
        <div class='grid grid-cols-5 w-full flex-1 items-center gap-2'>
          <div class='overflow-x-auto w-full col-span-3'>
            <div class='flex w-full h-8 px-0.5 gap-1 border-2 border-error/20 border-dashed rounded-md'
                 on:consider={e => handleDnd(e, row, 'drinks')}
                 on:finalize={e => handleDnd(e, row, 'drinks')}
                 use:dndzone={{ items: seats[row].drinks, type: 'drinks' }}>
              {#each seats[row].drinks as item (item.id)}
                <span animate:flip class='flex items-center'>
                  <LabelBadge label='{item.label}' color='{item.color}' />
                </span>
              {/each}
            </div>
          </div>
          <div class='flex items-center col-span-2 justify-between'>
            <div class='opacity-70'>
              <StillWaterIcon />
            </div>
            <Toggle size='small' state='success' />
            <div class='text-success'>
              <SparklingWaterIcon />
            </div>
          </div>
        </div>
      </div>
      <div class='flex items-center w-full gap-4 pl-1 rounded-lg'>
        <CutleryIcon />
        <div class='overflow-x-auto w-full'>
          <div class='flex w-full h-14 px-0.5 gap-1 border-2 border-info/20 border-dashed rounded-md'
               on:consider={e => handleDnd(e, row, 'food')}
               on:finalize={e => handleDnd(e, row, 'food')}
               use:dndzone={{ items: seats[row].food, type: 'food' }}>
            {#each seats[row].food as item (item.id)}
                <span animate:flip class='flex items-center'>
                  <MealOption option={{ ...item, title: false }} hideQuantity />
                </span>
            {/each}
          </div>
        </div>
      </div>
      <div class='flex items-center w-full gap-4 pl-1 rounded-lg'>
        <WineGlassIcon />
        <div class='overflow-x-auto w-full'>
          <div class='flex w-full h-8 px-0.5 gap-1 border-2 border-error/20 border-dashed rounded-md'
               on:consider={e => handleDnd(e, row, 'drinks')}
               on:finalize={e => handleDnd(e, row, 'drinks')}
               use:dndzone={{ items: seats[row].drinks, type: 'drinks' }}>
            {#each seats[row].drinks as item (item.id)}
                <span animate:flip class='flex items-center'>
                  <LabelBadge label='{item.label}' color='{item.color}' />
                </span>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <Divider my='0' />

    {#if dontDisturb}
      <div class='absolute top-12 left-0 backdrop-blur-xl w-full h-44' transition:slide>
        <div class='flex flex-col h-full w-full items-center justify-center'>
          <span class='badge uppercase font-medium opacity-70'>Do Not Disturb</span>
        </div>
      </div>
    {/if}

    <div class='relative w-full flex items-center justify-between opacity-70'>
      <div class='w-full flex items-center gap-1'>
        <div class='flex items-center'>
          <button class='btn btn-xs btn-ghost relative' on:click={() => delay = !delay}>
            <span class='relative w-fit'>
              <span class='absolute -bottom-0.5 -right-0.5 bg-base-100 rounded-full'><ClockIcon size='4' /></span>
              <CutleryIcon />
            </span>
          </button>
          {#if row === 0}
            <span class='countdown text-sm text-primary bg-base-200 p-1 mt-0.5 rounded'>
                <span style='--value:10;' bind:this={hoursSpan}></span>:<span style='--value:59;'
                                                                              bind:this={minutesSpan}></span>
            </span>
          {/if}
        </div>
        <div class='flex items-center'>
          <button class='btn btn-xs btn-ghost' on:click={() => delay = !delay}>
            <BellAlertIcon />
          </button>
          {#if row === 0}
            <span class='countdown text-sm text-primary bg-base-200 p-1 mt-0.5 rounded'>
              <span style='--value:10;' bind:this={hoursSpan}></span>:<span style='--value:59;'
                                                                            bind:this={minutesSpan}></span>
            </span>
          {/if}
        </div>
        <button class='btn btn-xs btn-ghost indicator' on:click={() => delay = !delay}>
          {#if row === 0}<span class='indicator-item badge badge-sm badge-primary left-2 font-light'>1</span>{/if}
          <ChatBubbleIcon />
        </button>
      </div>
      <button class='btn btn-xs {dontDisturb ? "btn-outline btn-error" : "btn-ghost" }'
              on:click={() => dontDisturb = !dontDisturb}>DND
      </button>
    </div>
  </div>
</div>
