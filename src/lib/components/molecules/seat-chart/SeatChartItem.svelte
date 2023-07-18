<script>
  import { slide } from "svelte/transition";
  import { v4 as uuidv4 } from 'uuid';
  import { Button } from "../../atoms";
  import SeatChartDisplay from "./SeatChartDisplay.svelte";
  import SeatChartMenu from "./SeatChartMenu.svelte";

  export let seats;
  export let row;

  let mealOptions = [];
  let activeType = null;
  let activeId = null;

  let dontDisturb = false;
  let mealDelay = false;

  const handleDnd = () => dontDisturb = !dontDisturb

  const onSwipe = () => activeType = null

  const handleOptionPickerClick = (type, id) => {
    activeType = type;
    activeId = id;
  };

  const addOption = (option) => {
    const id = uuidv4();

    let meal;
    meal = mealOptions.find(item => item.id === activeId);

    if (!activeId) {
      mealOptions = [...mealOptions, { food: null, drinks: null, id }];
      meal = mealOptions.at(-1);
    }

    if (meal[activeType]) {
      return addOption(option);
    }

    activeId = null;
    meal[activeType] = option;
    mealOptions = mealOptions;
  };

  const filterOptionType = (option, type) => {
    const meal = mealOptions.find(item => item.id === option.id);
    meal[type] = null;
    mealOptions = mealOptions;
  };

  const filterOption = (option) => {
    const meal = mealOptions.find(item => item[activeType]?.id === option.id);
    meal[activeType] = null;
    mealOptions = mealOptions;
  };
</script>

<div class='flex flex-col rounded-box bg-base-300 w-fit'>
  <div class='card w-full flex-1 overflow-hidden bg-base-300'>
    <div class='relative border border-base-300'>
      <div class='flex w-full gap-3 p-4'>
        <h4 class='text-2xl opacity-60 font-normal'>2A</h4>
        <div class='h-8 flex flex-1 items-center leading-4'>
          <h4 class='font-medium'><span class='font-light'>MR</span> John Smith Jean</h4>
        </div>
        <span class='badge badge-xs py-1 h-4 bg-orange-100 text-orange-800'>Gold</span>
      </div>

      <SeatChartMenu
        options={mealOptions}
        {activeType}
        {addOption}
        {filterOption}
        {onSwipe}
      />

      <SeatChartDisplay
        options='{mealOptions}'
        {handleOptionPickerClick}
        {filterOptionType}
        {handleDnd}
      />

      {#if dontDisturb}
        <div class='z-10 absolute bottom-0 h-[228px] w-full bg-base-200 rounded-box p-2 flex flex-col gap-2 backdrop-blur-xl overflow-y-auto' transition:slide>
          <div class='flex flex-col h-full w-full items-center justify-center'>
            <span class='badge uppercase font-medium opacity-70'>Do Not Disturb</span>
          </div>
          <span class='absolute bottom-2 right-2'>
            <Button on:click={handleDnd} size='small' state='ghost'>
              DND OFF
            </Button>
          </span>
        </div>
      {/if}
    </div>
  </div>
</div>
