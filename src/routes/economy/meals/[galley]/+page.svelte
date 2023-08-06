<script>
  import { page } from "$app/stores";
  import { Button, Toggle } from "$atoms";
  import { enhance, applyAction } from '$app/forms';
  import { MealListItem } from "$organisms";

  export let data;

  let showDescription = false;
  let editMode = false;

  const handleEdit = () => editMode = true;

  $: $page.url.pathname, editMode = false
</script>

<form method='POST' use:enhance={() => async ({ result }) => await applyAction(result)}>
  <div class='flex justify-between w-full'>
    <h2 class='capitalize'>{data.galley}</h2>
    {#if editMode}
      <Button state='primary' type='submit'>Save quantity</Button>
    {:else}
      <Button state='ghost' disabled='{data.galley === "total"}' on:click={handleEdit}>Edit quantity</Button>
    {/if}
  </div>

  <div class='flex justify-end mt-1'>
    <Toggle bind:checked='{showDescription}' labelOff='Meal description' />
  </div>

  <div class='flex justify-between gap-4 py-4 h-fit'>
    {#each data.meals as service}
      <div class='flex flex-col gap-4 w-full'>
        <h6 class='text-xs uppercase pl-1'>{service.label}</h6>
        <div class='w-full flex flex-col gap-4'>
          {#each service.options as option, i}
            <MealListItem {option} {showDescription} range='{!!editMode}' {editMode}
                          count='{option.quantity[data.galley]}' />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</form>
