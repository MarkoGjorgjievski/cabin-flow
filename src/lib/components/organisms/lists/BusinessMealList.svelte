<script>
  import { Divider, Toggle } from "$atoms";
  import { MealListItem } from '$organisms';
  import { MENU } from "$lib/constants";
  import { Button } from "../../atoms";

  export let galley

  let showDescription = false;
  let editMode = false

  $: galley, editMode = false
</script>

<div class='flex justify-between w-full'>
  <h2>{galley} galley</h2>
  {#if editMode}
    <Button state='primary' on:click={() => editMode = false}>Save quantity</Button>
    {:else}
    <Button state='ghost' on:click={() => editMode = true}>Edit quantity</Button>
  {/if}
</div>

<div class='fixed bottom-12 right-16 z-10 backdrop-blur px-2 m-2 rounded-full bg-base-200/50'>
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
            <MealListItem option='{option}' id='{i+1}' {showDescription} {editMode} slug='{item.slug}' />
          {/each}
          <Divider lastHidden />
        {/each}
      </div>
    </div>
    <Divider vertical lastHidden />
  {/each}
</div>
