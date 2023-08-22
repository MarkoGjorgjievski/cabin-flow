<script>
  import { SERVICE_TYPES } from "$lib/constants";
  import { Button, Divider } from "$atoms";
  import { PlusSmallIcon, ClockIcon, MinusSmallIcon  } from "$icons";
  import { SeatChartOptionPicker, OptionLabel } from "$molecules";

  export let options;
  export let handleOptionPickerClick;
  export let filterOptionType;
  export let handleDnd;
  export let addTime;
  export let removeTime;

  const { FOOD, DRINKS } = SERVICE_TYPES;
</script>

<div class='h-[228px] w-full bg-base-200 rounded-box flex gap-2'>
  <div class='pt-2 overflow-y-auto w-full'>
    <div class='flex flex-col gap-2 pb-14'>
      {#each options as option}
        {#if option.food || option.drinks}
          <div>
            {#if option?.time}
              <div class='flex items-center w-full'>
                <span class='w-full'><Divider my='2'>{option.time}</Divider></span>
                <Button state='ghost' size='small' on:click={() => removeTime(option.id)}><MinusSmallIcon /></Button>
              </div>
            {/if}
            <div class='flex gap-2 items-center px-2'>
              {#if option?.food}
              <div class='w-fit'>
                <OptionLabel option='{option.food}' filter onFilter='{() => filterOptionType(option, FOOD)}' />
                </div>
              {:else}
                <Button on:click={() => handleOptionPickerClick(FOOD, option.id)} size='small' state='base'
                        self='center' outlined>
                  <PlusSmallIcon />
                  Meal
                </Button>
              {/if}
              {#if option?.drinks}
                <OptionLabel option='{option.drinks}' filter onFilter='{() => filterOptionType(option, DRINKS)}' />
              {:else}
                <Button on:click={() => handleOptionPickerClick(DRINKS, option.id)} size='small' state='base'
                        self='center'
                        outlined>
                  <PlusSmallIcon />
                  Drink
                </Button>
              {/if}
              {#if !option?.time}
                <button on:click={() => addTime(option.id)}>
                  <ClockIcon size='4' />
                </button>
              {/if}
            </div>
          </div>
        {/if}
      {/each}
    </div>
    <div class='absolute bottom-0 w-full bg-base-300 p-2'>
      <div class='flex gap-2 w-full'>
        <SeatChartOptionPicker
          {handleDnd}
          onDrinksClick='{() => handleOptionPickerClick(DRINKS)}'
          onFoodClick='{() => handleOptionPickerClick(FOOD)}'
        />
      </div>
    </div>
  </div>
</div>
