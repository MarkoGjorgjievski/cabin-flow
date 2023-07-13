<script>
  import { MENU } from "$lib/constants";
  import { CONFIGURATION } from "../../../constants";
  import { Button } from "../../atoms";
  import { MealListItem, PageTitle } from "../index";

  export let galley

  let editMode = false
  $: galley, editMode = false
</script>

<PageTitle title='Galleys' tabs='{CONFIGURATION.economy.galleys}' direction='col' />

<div class='flex justify-end w-full'>
  {#if editMode}
    <Button state='primary' on:click={() => editMode = false}>Save quantity</Button>
  {:else}
    <Button state='ghost' on:click={() => editMode = true}>Edit quantity</Button>
  {/if}
</div>

<div class='flex justify-between gap-4'>
  {#each MENU.economy.food as service}
    <div class='w-full flex flex-col gap-4'>
      {#each service.options as option, i}
        <MealListItem {option} id='{i+1}' slug='{service.acronym}' range='{!!editMode}' {editMode} />
      {/each}
    </div>
  {/each}
</div>
