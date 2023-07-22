<script>
  import { getContext } from "svelte";
  import { Divider } from "$atoms";
  import { MealsTemplate } from "$templates";
  import { MealListItem } from "$organisms";

  export let galley;
  export let service;

  let showDescription = false;
  let editMode = false;

  const { food } = getContext('menu')

  $: galley, editMode = false
</script>

<MealsTemplate
  {showDescription} {editMode} {galley}
  on:edit='{e => editMode = e.detail.editMode}'
  on:save='{e => editMode = e.detail.editMode}'
  on:toggle='{e => showDescription = e.detail.showDescription}'
/>

<div class='h-full w-[926px]'>
  <swiper-container class='horizontal-swiper swiper-container-h' pagination='true'>
    {#each Object.entries(food) as [key, service]}
      <swiper-slide class='overflow-y-auto'>
        {#each Object.values(service) as item}
          <h2 class='pl-1 font-normal pb-4'>{item.label}</h2>
          <div class='flex flex-wrap w-full gap-4'>
            {#each item.options as option, i}
              <MealListItem option='{option}' id='{i+1}' slug='{item.slug}' />
            {/each}
          </div>
          <Divider lastHidden />
        {/each}
      </swiper-slide>
    {/each}
  </swiper-container>
</div>
