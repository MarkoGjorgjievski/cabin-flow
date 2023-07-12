<script>
  import clsx from "clsx";
  import { truncateString } from "$hooks";
  import { LabelBadge } from "$molecules";
  import { badgeBorderColor, badgeColor } from "$system/badge";

  export let option;
  export let quantity = 40;
  export let hideQuantity = false;
  export let size;
  export let counter;
  export let cabin = 'economy';

  let max = 230;
  let min = 0;
</script>


<div
  class={clsx('flex w-full items-center justify-between px-2 py-3 border rounded-lg my-0.5 h-12 relative', [badgeColor.get(option.color)], [badgeBorderColor.get(option.color)])}>
  {#if option.title}
    <div class='flex flex-3 w-full overflow-hidden leading-5'>
      <h4>{truncateString(option.title)}</h4>
    </div>
  {/if}

  <div class='flex items-center gap-2 justify-between w-full flex-1'>
    {#if option.label}
      <LabelBadge color={option.color} label={option.label} {size} />
    {/if}
    {#if Number.isInteger(quantity) && !hideQuantity}<span class='w-fit  text-right zzzz-10'>{quantity}</span>{/if}
  </div>
  {#if counter}
    <input type='range' min='0' max='100' bind:value={quantity}  class='range bg-inherit h-full absolute bottom-0 left-0 mix-blend-soft-light rounded-lg' />
  {/if}
</div>
