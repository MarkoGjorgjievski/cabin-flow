<script>
  import { getContext } from "svelte";

  export let rowNumber
  export let cabin = 'economy'
  export let position = 'beforeRow'

  const { rowStart, galleys } = getContext('config');
</script>

{#each galleys as galley}
  {#if galley[position] - rowStart === rowNumber}
    <div class='flex w-full items-center justify-center py-3 my-3 uppercase font-medium bg-base-200 rounded-lg'>Galley</div>
  {/if}
{/each}
