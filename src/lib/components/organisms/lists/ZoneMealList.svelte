<script>
  import clsx from "clsx";
  import { Divider } from "$atoms";
  import { OptionLabel } from "$molecules";
  import { SpecialMealList } from "$organisms";

  export let total = 0;
  export let options = [];
  export let title;
  export let rows;
  export let passengerNumber = 40;
  export let cabin = 'economy';
  export let services;
</script>

<div class={clsx("card w-full h-fit shadow-lifted relative")}>
  <div class='card-body'>
    <div>
      <div class='flex justify-between'>
        {#if title}<h5 class='card-title'>{title}</h5>{/if}
      </div>
      {#if rows && passengerNumber}
        <div class='flex justify-between text-sm opacity-60 w-full my-2 py-1 border-y border-base-300'>
          <div class='w-full'>{rows}</div>
          <div class='w-fit'>{passengerNumber}</div>
        </div>
      {/if}
    </div>

    {#if cabin === 'business'}
      <div class='flex flex-col gap-2 justify-between w-full h-80 px-0.5 overflow-y-auto scrollbar'>
        {#each Object.entries(services) as [key, service]}
          <Divider>{key}</Divider>
          {#each Object.values(service) as item}
            <h6 class='text-xs uppercase pt-2 pl-1'>{item.label}</h6>
            {#each item.options as option, i}
              <OptionLabel {option} showQuantity />
            {/each}
          {/each}
        {/each}
      </div>
    {/if}

    {#if cabin === 'economy'}
      <div class='flex flex-col justify-between'>
        <div class='flex flex-col gap-2'>
          {#each options as option}
            <OptionLabel {option} showQuantity />
          {/each}
        </div>
      </div>
    {/if}

    <SpecialMealList {cabin} {title} />
    <div>
      <Divider />
      <div class='flex justify-between pt-2'>
        <p>Total meals</p>
        <span>{total}</span>
      </div>
    </div>
  </div>
</div>
