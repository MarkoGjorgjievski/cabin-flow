<script>
  import { onMount } from "svelte";
  import { register } from 'swiper/element/bundle';
  import { enhance, applyAction } from '$app/forms'
  import { page } from "$app/stores";
  import 'swiper/css';

  import { Divider, Button, Toggle  } from "$atoms";
  import { MealListItem } from "$organisms";

  export let data

  onMount(() => register())

  let showDescription = false;
  let editMode = false;
  let container

  const handleEdit = () => editMode = true

  $: container?.initialize();
  $: $page.url.pathname, editMode = false
</script>

<form method='POST' use:enhance={() => async ({ result }) => await applyAction(result)}>
  <div class='flex justify-between w-full'>
    <h2>{data.galley} galley</h2>
    {#if editMode}
      <Button state='primary' type='submit'>Save quantity</Button>
    {:else}
      <Button state='ghost' on:click={handleEdit}>Edit quantity</Button>
    {/if}
  </div>

  <div class='flex justify-end mt-1'>
    <Toggle bind:checked='{showDescription}' labelOff='Meal description' />
  </div>

  <div class='w-[926px] pb-4'>
    <swiper-container class='horizontal-swiper h-auto' pagination='true' space-between='16' auto-height='true' bind:this={container} init='false'>
      {#each data.food as service (service)}
        <swiper-slide class='h-fit pb-10'>
          <div class='h-fit min-h-[540px]'>
            <h6 class='text-xs font-medium uppercase pl-1 py-4'>{service.label}</h6>
            {#each service.categories as category (category)}
              <h2 class='pl-1 font-normal pb-4'>{category.label}</h2>
              <div class='flex flex-wrap w-full gap-4'>
                {#each category.options as option (option)}
                  <MealListItem option='{option}' {showDescription} {editMode} galley='{data.galley}' />
                {/each}
              </div>
              <Divider lastHidden />
            {/each}
          </div>
        </swiper-slide>
      {/each}
  </swiper-container>
  </div>
</form>
