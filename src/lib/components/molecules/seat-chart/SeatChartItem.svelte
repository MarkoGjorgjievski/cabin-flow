<script>
  import { slide } from "svelte/transition";
  import { v4 as uuidv4 } from 'uuid';
  import { Button } from "$atoms";
  import { SeatChartMenu, SeatChartDisplay, Swipeable } from "$molecules";
  export let seats;
  export let row;

  let mealOptions = [];
  let activeType = null;
  let activeId = null;

  let activeTimeId = null;

  let dontDisturb = false;

  const handleDnd = () => dontDisturb = !dontDisturb
  const handleMenu = () => activeType = null
  const handleTime = () => activeTimeId = null

  const handleOptionPickerClick = (type, id) => {
    activeType = type;
    activeId = id;
  };

  const addOption = (option) => {
    const id = uuidv4();

    let meal;
    meal = mealOptions.find(item => item.id === activeId);

    if (!activeId) {
      mealOptions = [...mealOptions, { time: null, food: null, drinks: null, id }];
      meal = mealOptions.at(-1);
    }

    if (meal[activeType]) {
      return addOption(option);
    }

    activeId = null;
    meal[activeType] = option;
    mealOptions = mealOptions;
  };

  const addTime = id => {
    activeTimeId = id
  }

  const removeTime = id => {
    const meal = mealOptions.find(item => item.id === id);
    meal.time = null
    mealOptions = mealOptions;
  }

  const addTiming = time => {
    const meal = mealOptions.find(item => item.id === activeTimeId);
    meal.time = time
    mealOptions = mealOptions;
    activeTimeId = null;
  }

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

      <Swipeable trigger='{activeType}' onSwipe='{handleMenu}'>
        <SeatChartMenu
          options={mealOptions}
          {activeType}
          {addOption}
          {filterOption}
        />
      </Swipeable>

      <Swipeable trigger='{activeTimeId}' onSwipe='{handleTime}'>
        <button on:click={() => addTiming('30 min')}>30 min</button>
        <button on:click={() => addTiming('45 min')}>45 min</button>
        <button on:click={() => addTiming('1h')}>1h</button>
        <button on:click={() => addTiming('2h')}>2h</button>
        <button on:click={() => addTiming('3h')}>3h</button>
        <button on:click={() => addTiming('4h')}>4h</button>
        <button on:click={() => addTiming('Next service')}>Next service</button>
        <button on:click={() => addTiming('End of flight')}>End of flight</button>
      </Swipeable>

      <SeatChartDisplay
        options='{mealOptions}'
        {handleOptionPickerClick}
        {filterOptionType}
        {handleDnd}
        {addTime}
        {removeTime}
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
