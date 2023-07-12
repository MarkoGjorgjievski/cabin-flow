<script>
  import { CONFIGURATION } from "$lib/constants";

  export let rowNumber
  export let cabin = 'economy'
  export let position = 'beforeRow'
</script>

{#each CONFIGURATION[cabin].galleys as galley}
  {#if galley[position] - CONFIGURATION[cabin].rowStart === rowNumber}
    <div class='flex w-full items-center justify-center py-3 my-3 uppercase opacity-50 font-medium bg-base-200 rounded-lg'>Galley</div>
  {/if}
{/each}
