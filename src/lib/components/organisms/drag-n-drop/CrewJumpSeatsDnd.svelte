<script>
import { CrewCard } from '$molecules';
import { flip } from 'svelte/animate';
import { fade } from 'svelte/transition';
import clsx from 'clsx';
import { send, receive } from '$templates/crew-positions/crossfade.js';

export let jumpSeats = [];
export let activeRow = null;
export let activeSeat = null;
export let handleCrossfade = (i, j) => null;
</script>

<div class="w-fit h-full flex flex-col gap-4 p-2 bg-base-300 rounded-xl">
  {#each jumpSeats as row, i}
    <div class="flex w-full h-full gap-4">
      {#each row as jumpSeat, j (jumpSeat)}
        <section>
          <div class="flex gap-4 w-full h-full">
            {#if !jumpSeat.rank}
              <div class="position-zone w-20 position-zone-empty"></div>
            {:else if jumpSeat.crew.length}
              {#each jumpSeat.crew as crew (crew)}
                <button
                  class="{clsx('position-zone w-20', activeSeat === jumpSeat.position && 'border border-info')}"
                  on:click="{() => handleCrossfade(i, j)}"
                  animate:flip>
                  <CrewCard firstName="{crew.firstName}" size="small" selected="{activeSeat === jumpSeat.position}" />
                </button>
              {/each}
            {:else}
              <button
                class="{clsx('position-zone w-20', activeSeat === jumpSeat.position && 'border border-info')}"
                on:click="{() => handleCrossfade(i, j)}">
                <h2>{jumpSeat.position}</h2>
              </button>
            {/if}
          </div>
        </section>
      {/each}
    </div>
  {/each}
</div>
