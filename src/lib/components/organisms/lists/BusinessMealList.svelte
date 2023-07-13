<script>
  import { MENU } from "../../../constants";
  import { Divider } from "../../atoms";
  import MealsTemplate from "../../templates/MealsTemplate.svelte";
  import { MealListItem } from "../index";

  export let galley;

  let showDescription = false;
  let editMode = false;

  $: galley, editMode = false
</script>

<MealsTemplate
  {showDescription} {editMode} {galley}
  on:edit='{e => editMode = e.detail.editMode}'
  on:save='{e => editMode = e.detail.editMode}'
  on:toggle='{e => showDescription = e.detail.showDescription}'
/>

<div class='h-fit pt-4 pb-12 flex gap-2'>
  {#each Object.entries(MENU.business.food) as [key, service]}
    <div class='flex flex-col w-full gap-4'>
      <h6 class='text-xs uppercase pl-1'>{key}</h6>
      <div class='h-full flex flex-col gap-4 w-full'>
        {#each Object.values(service) as item}
          <h2 class='pl-1 font-normal'>{item.label}</h2>
          {#each item.options as option, i}
            <MealListItem option='{option}' id='{i+1}' {showDescription} {editMode} slug='{item.slug}' />
          {/each}
          <Divider lastHidden />
        {/each}
      </div>
    </div>
    <Divider vertical lastHidden />
  {/each}
</div>
