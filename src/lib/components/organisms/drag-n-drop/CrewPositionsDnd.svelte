<script>
  import { Divider } from "$atoms";
  import { CrewCard } from "$molecules";
  import { PageTitle } from "$organisms";
  import { flip } from 'svelte/animate';
  import { send, receive } from '$templates/crew-positions/crossfade.js'

  export let crew = null
  export let activeId = null
  export let handleCrossfade = (rank, crew) => null
</script>

<div class='w-full h-full overflow-y-auto p-4 border border-base-200 rounded-xl shadow-lifted-lg bg-base-300 scrollbar'>
  <PageTitle title='Cabin crew positions' />
  {#each Object.entries(crew) as [rank, batch]}
    <div class='w-full'>
      <Divider>{rank}</Divider>
      <section class='h-full min-h-[52px] w-full flex flex-wrap gap-4'>
        {#each batch as crew (crew)}
          <button in:receive|global={{ key: crew }} out:send|global={{ key: crew }} animate:flip on:click={() => handleCrossfade(rank, crew)}>   
            <CrewCard {...crew} selected={activeId === crew.id} />
          </button>
        {/each}
      </section>
    </div>
  {/each}
</div>
