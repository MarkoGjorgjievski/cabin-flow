<script>
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

  export let items = [];
  export let handleDnd = () => null
</script>


<section
  class='py-1 min-h-[1rem] w-full'
  on:consider={handleDnd}
  on:finalize={handleDnd}
  use:dndzone={{items}}
>
  {#each items as item (item.id)}
    <div animate:flip class='flex items-center'>
      <div class='divider w-full'>{`${items[0].crew[0]} - ${items[0].crew[1]}`}</div>
    </div>
  {/each}
</section>
