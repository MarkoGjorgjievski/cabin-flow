<script>
  import { Divider, Toggle } from "$atoms";
  import { BusinessMealListItem } from '$organisms';
  import { MENU } from "$lib/constants";

  let showDescription = false;
  let editMode = true;
</script>

<div class='flex flex-col items-end pt-2'>
  <Toggle bind:checked='{editMode}' labelOff='Edit mode' />
  <Toggle bind:checked='{showDescription}' labelOff='Meal description' />
</div>

<div class='h-fit py-4 flex gap-2'>
  {#each Object.entries(MENU.business.food) as [key, service]}
    <div class='flex flex-col w-full gap-4'>
      <h6 class='text-xs uppercase pl-1'>{key}</h6>
      <div class='h-full flex flex-col gap-4 w-full'>
        {#each Object.values(service) as item}
          <h2 class='pl-1 font-normal'>{item.label}</h2>
          {#each item.options as option, i}
            <BusinessMealListItem option='{option}' id='{i+1}' {showDescription} {editMode} slug='{item.slug}' counter />
          {/each}
          <Divider lastHidden />
        {/each}
      </div>
    </div>
    <Divider vertical lastHidden />
  {/each}
</div>
