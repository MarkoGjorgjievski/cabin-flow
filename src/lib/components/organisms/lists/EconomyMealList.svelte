<script>
  import { Divider } from "$atoms";
  import { MealsForm } from "$templates";
  import { MealListItem } from "$organisms";
  import { getContext } from "svelte";

  export let galley;

  let showDescription = false;
  let editMode = false;

  const { food } = getContext('menu')

  $: galley, editMode = false
</script>

<MealsForm
  {showDescription} {editMode} {galley}
  on:edit='{e => editMode = e.detail.editMode}'
  on:save='{e => editMode = e.detail.editMode}'
  on:toggle='{e => showDescription = e.detail.showDescription}'
/>

<div class='flex justify-between gap-4 py-4 h-fit'>
  {#each food as service}
    <div class='flex flex-col gap-4 w-full'>
      <h6 class='text-xs uppercase pl-1'>{service.name}</h6>
      <div class='w-full flex flex-col gap-4'>
        {#each service.options as option, i}
          <MealListItem {option} id='{i+1}' slug='{service.acronym}' {showDescription} range='{!!editMode}' {editMode} />
        {/each}
      </div>
    </div>
  {/each}
</div>

<Divider />

<h2 class='py-4'>Total</h2>

<div class='flex justify-between gap-4 h-fit pb-16'>
  {#each food as service}
    <div class='flex flex-col gap-4 w-full'>
      <h6 class='text-xs uppercase pl-1'>{service.name}</h6>
      <div class='w-full flex flex-col gap-4'>
        {#each service.options as option, i}
          <MealListItem {option} id='{i+1}' slug='{service.acronym}' {showDescription} />
        {/each}
      </div>
    </div>
  {/each}
</div>
