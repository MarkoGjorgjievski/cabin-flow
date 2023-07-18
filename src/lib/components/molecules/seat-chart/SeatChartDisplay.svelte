<script>
  import { SERVICE_TYPES } from "$lib/constants";
  import { Button } from "$atoms";
  import { PlusSmallIcon } from "$icons";
  import { OptionLabel } from "../index";
  import SeatChartOptionPicker from "./SeatChartOptionPicker.svelte";

  export let options
  export let handleOptionPickerClick
  export let filterOptionType
  export let handleDnd

  const { FOOD, DRINKS } = SERVICE_TYPES
</script>

<div class='h-[228px] w-full bg-base-200 rounded-box p-2 flex gap-2'>
  <div class='flex flex-col gap-2 relative'>
    {#each options as option}
      <div class='flex gap-2 items-center'>
        {#if option.food || option.drinks}
          {#if option?.food}
            <OptionLabel option='{option.food}' filter onFilter='{() => filterOptionType(option, FOOD)}' />
          {:else}
            <Button on:click={() => handleOptionPickerClick(FOOD, option.id)} size='small' state='base' self='center' outlined>
              <PlusSmallIcon />
              Meal
            </Button>
          {/if}
          {#if option?.drinks}
            <OptionLabel option='{option.drinks}' filter onFilter='{() => filterOptionType(option, DRINKS)}' />
          {:else}
            <Button on:click={() => handleOptionPickerClick(DRINKS, option.id)} size='small' state='base' self='center'
                    outlined>
              <PlusSmallIcon />
              Drink
            </Button>
          {/if}
        {/if}
      </div>
    {/each}
    <div class='absolute bottom-0 w-full'>
      <div class='flex gap-2 w-full'>
      <SeatChartOptionPicker
        onDrinksClick='{() => handleOptionPickerClick(DRINKS)}'
        onFoodClick='{() => handleOptionPickerClick(FOOD)}'
        {handleDnd}
      />
      </div>
    </div>
  </div>
</div>
