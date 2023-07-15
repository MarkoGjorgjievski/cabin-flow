<script>
  import clsx from "clsx";
  import { badgeBorderColor, badgeColor } from "$system/badge";
  import { Badge } from "../../atoms";
  import OptionRange from "./OptionRange.svelte";

  export let option;
  export let quantity = 40;
  export let showQuantity;
  export let size;
  export let range;
</script>

<div class={clsx('flex items-center justify-between p-2 border rounded-lg relative mix-blend-hard-light', showQuantity || range ? 'w-full' : 'w-fit', [badgeColor.get(option.color)], [badgeBorderColor.get(option.color)])}>
  <div class='flex items-center gap-2 justify-between w-full flex-1'>
    <Badge color={option.color} label={option.label} className='label-badge bg-opacity-0' />
    {#if Number.isInteger(quantity) && showQuantity}<span class='w-fit text-right'>{quantity}</span>{/if}
  </div>
  {#if range}
    <OptionRange value='{quantity}' />
  {/if}
</div>
