<script>
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import { Divider } from "$atoms";
  import { CrewCard } from "$molecules";
  import { PageTitle } from "$organisms";
  
  export let crew = null
  export let handleDnd = () => null
</script>

<div class='w-full h-full overflow-y-auto p-4 border border-base-200 rounded-xl shadow-lifted-lg bg-base-100 scrollbar'>
  <PageTitle title='Cabin crew positions' />
  {#each Object.entries(crew) as [position, crewMembers]}
    <div class='w-full'>
      <Divider>{position}</Divider>
      <section
        class='h-full min-h-[52px] w-full flex flex-wrap gap-4'
        on:consider={e => handleDnd(e, position)}
        on:finalize={e => handleDnd(e, position)}
        use:dndzone={{ items: crewMembers, type: position }}>
          {#each crewMembers as crewMember (crewMember.id)}
            <span animate:flip>
              <CrewCard {...crewMember} />
            </span>
          {/each}
      </section>
    </div>
  {/each}
</div>
