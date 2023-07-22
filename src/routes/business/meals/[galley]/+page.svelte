<script>
  import { getContext, onMount } from "svelte";
  import { page } from "$app/stores";
  import { register } from 'swiper/element/bundle';
  import 'swiper/css';

  import { Divider } from "$atoms";
  import { MealListItem } from "$organisms";
  import { MealsTemplate } from "$templates";

  export let data

  const { food } = getContext('menu')

  onMount(() => register())

  let showDescription = false;
  let editMode = false;
  let container


  $: container?.initialize();
  $: $page.url.pathname, editMode = false
</script>

<MealsTemplate
  {showDescription} {editMode} galley={data.galley}
  on:edit='{e => editMode = e.detail.editMode}'
  on:save='{e => editMode = e.detail.editMode}'
  on:toggle='{e => showDescription = e.detail.showDescription}'
/>

<div class='w-[926px] pb-4 parent'>
  <swiper-container class='horizontal-swiper h-auto' pagination='true' space-between='16' auto-height='true' bind:this={container} init='false'>
    {#each Object.entries(food) as [key, service]}
      <swiper-slide class='h-fit pb-10'>
        <div class='h-fit min-h-[540px]'>
          <h6 class='text-xs font-medium uppercase pl-1 py-4'>{key}</h6>
          {#each Object.values(service) as item}
            <h2 class='pl-1 font-normal pb-4'>{item.label}</h2>
            <div class='flex flex-wrap w-full gap-4'>
              {#each item.options as option, i}
                <MealListItem option='{option}' {showDescription} {editMode} />
              {/each}
            </div>
            <Divider lastHidden />
          {/each}
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>
