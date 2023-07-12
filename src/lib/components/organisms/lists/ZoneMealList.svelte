<script>
  import clsx from "clsx";
  import { Divider } from "$atoms";
  import { MealOption } from "$molecules";
  import { SpecialMealList } from "$organisms";

  export let editable = false;
  export let showSpecialMeals = false;
  export let hideQuantity = false;
  export let total = 0;
  export let options = [];
  export let title;
  export let rows;
  export let passengerNumber = 40;
  export let buttonLabel = 'Edit';
  export let cabin = 'economy';
  export let services;
  export let counter;

  let editMode = false
</script>

<div class={clsx("card w-full h-fit shadow-lifted relative")}>
  <div class='card-body'>
    <div>
      <div class='flex justify-between'>
        {#if title}<h5 class='card-title'>{title}</h5>{/if}
        {#if editable}
          {#if editMode}
            <button class='btn btn-xs btn-primary' on:click={() => editMode = !editMode}>Save</button>
          {:else}
            <button class='btn btn-xs btn-ghost' on:click={() => editMode = !editMode}>{buttonLabel}</button>
          {/if}
        {/if}
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
              <MealOption {option} {hideQuantity} size='small' cabin='business' />
            {/each}
          {/each}
        {/each}
      </div>
    {/if}

    {#if cabin === 'economy'}
      <div class='flex flex-col justify-between'>
        <div class='flex flex-col gap-2'>
          {#each options as option}
            <MealOption option={{...option, title: false }} {hideQuantity} size='small' counter={editMode && counter} />
          {/each}
        </div>
      </div>
    {/if}

    {#if showSpecialMeals}
      <SpecialMealList />
    {/if}
    <div>
      <Divider />
      <div class='flex justify-between pt-2'>
        <p>Total meals</p>
        <span>{total}</span>
      </div>
    </div>
  </div>
</div>
