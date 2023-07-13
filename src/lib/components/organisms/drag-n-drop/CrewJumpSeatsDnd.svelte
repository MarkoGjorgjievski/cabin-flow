<script>
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import { CrewCard } from "$molecules";

  export let jumpSeats = []
  export let handleDnd = () => null
</script>

<div class='w-fit h-full flex flex-col gap-4'>
  {#each jumpSeats as row, i}
    <div class='flex w-full h-full gap-4'>
      {#each row as position, j}
        <div class='flex gap-4 w-full h-full'>
          <section
             class='h-full w-full flex'
             on:consider={e => handleDnd(e, i, j)}
             on:finalize={e => handleDnd(e, i, j)}
             use:dndzone={{ items: position.crew, type: position.type }}
          >
            {#if position.crew.length}
              <div class='position-zone w-20'>
                {#each position.crew as crew (crew.id)}
                  <span animate:flip>
                    <CrewCard firstName='{crew?.firstName}' size='auto' />
                  </span>
                {/each}
              </div>
            {:else}
              <div class='position-zone w-20 {!position.seat && "position-zone-empty"}'>
                <h2>{position.seat}</h2>
              </div>
            {/if}
          </section>
        </div>
      {/each}
    </div>
  {/each}
</div>
