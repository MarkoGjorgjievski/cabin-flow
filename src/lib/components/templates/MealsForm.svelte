<script>
  import { Toggle, Button } from "$atoms";
  import { createEventDispatcher } from 'svelte'
  import { applyAction, enhance } from '$app/forms';

  export let galley;
  export let showDescription = false;
  export let editMode = false;

  const dispatch = createEventDispatcher();

  const handleEdit = () => dispatch('edit', { editMode: true })
  const handleSave = () => dispatch('save', { editMode: false })
  const handleDescription = () => dispatch('toggle', { showDescription: showDescription })

  $: showDescription, handleDescription();
</script>

<form method='POST' use:enhance={() => async ({ result }) => await applyAction(result)}>
  <div class='flex justify-between w-full'>
    <h2>{galley} galley</h2>
    {#if editMode}
      <Button state='primary' on:click={handleSave}>Save quantity</Button>
    {:else}
      <Button state='ghost' type='submit' on:click={handleEdit}>Edit quantity</Button>
    {/if}
  </div>

  <div class='flex justify-end mt-1'>
    <Toggle bind:checked='{showDescription}' labelOff='Meal description' />
  </div>

  <slot />
</form>
