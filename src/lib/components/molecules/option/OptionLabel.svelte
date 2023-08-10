<script>
  import clsx from "clsx";
  import { badgeColor } from "$system/badge";
  import { Badge, Button, Divider } from "$atoms";
  import { MinusSmallIcon } from "$icons";

  export let option;
  export let quantity = 0;
  export let showQuantity = false;
  export let count = false;
  export let range = false;
  export let filter = false
  export let onFilter = () => null;
</script>

<div class='flex items-center w-full justify-between'>
<div class={clsx('flex items-center justify-between p-2 rounded-lg relative mix-blend-color-hard-light', range ? 'w-full' : 'w-fit', option.label, [badgeColor.get(option.color)])}>
  <div class='flex items-center gap-2 justify-between w-full flex-1'>
    <Badge color={option.color} label={option.label} className='label-badge bg-opacity-0' />
    {#if filter}
      <Button naked on:click={onFilter}>
        <MinusSmallIcon />
      </Button>
    {/if}
  </div>
  <slot />
</div>
{#if Number.isInteger(quantity) && showQuantity}
  <div class='w-full flex items-center'>
    <div class='divider w-full px-3 my-1'></div>
    <span class='w-fit text-right'>{quantity}</span>
  </div>
{/if}
</div>