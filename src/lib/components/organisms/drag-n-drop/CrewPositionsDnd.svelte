<script>
import { Divider } from '$atoms';
import { PageTitle } from '$organisms';
import CrewDetailsListItem from '$organisms/lists/CrewDetailsListItem.svelte';

export let crew = null;
export let activeId = null;
export let handleCrossfade = (rank, crew) => null;
</script>

<div class="w-full h-full overflow-y-auto p-4 rounded-xl scrollbar">
  <PageTitle title="Cabin crew positions" />
  {#each Object.entries(crew) as [rank, batch]}
    <div class="w-full">
      <Divider>{rank}</Divider>
      <section class="h-full min-h-[52px] w-full flex flex-col gap-4">
        {#each batch as crew (crew)}
          <button class="w-full" on:click="{() => handleCrossfade(crew)}">
            <CrewDetailsListItem {crew} selected="{activeId === crew.id}" />
          </button>
        {/each}
      </section>
    </div>
  {/each}
</div>
