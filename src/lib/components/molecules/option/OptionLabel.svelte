<script>
  import clsx from "clsx";
  import { badgeBorderColor, badgeColor } from "$system/badge";
  import { Badge } from "../../atoms";
  import OptionRange from "./OptionRange.svelte";

  export let option;
  export let quantity = 40;
  export let showQuantity;
  export let size;
  export let counter;
</script>

<div class={clsx('flex items-center justify-between p-2 border rounded-lg relative backdrop-blur bg-opacity-50', showQuantity ? 'w-full' : 'w-fit', [badgeColor.get(option.color)], [badgeBorderColor.get(option.color)])}>
  <div class='flex items-center gap-2 justify-between w-full flex-1'>
    <Badge color={option.color} label={option.label} className='label-badge backdrop-blur bg-opacity-50' />
    {#if Number.isInteger(quantity) && showQuantity}<span class='w-fit  text-right'>{quantity}</span>{/if}
  </div>
  {#if counter}
    <OptionRange value='{quantity}' />
  {/if}
</div>
