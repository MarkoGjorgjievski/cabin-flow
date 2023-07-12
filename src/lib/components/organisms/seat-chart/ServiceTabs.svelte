<script>
  import { MENU } from "$lib/constants";

  export let activeType;
  export let activeTab;
  export let activeSubTab;
  export let onClick = () => null;
</script>

<div>
  {#each Object.entries(MENU.business[activeType]) as [key, value]}
    {#if activeTab === key}
      <div class='tabs tabs-boxed bg-base-200 bg-opacity-40 backdrop-blur rounded-full border border-base-100'>
        {#each Object.values(value) as type}
        <span class:tab-active={activeSubTab === type.label} class='tab !rounded-full text-base-content'
              on:click={() => onClick(type)}>{type.label}</span>
        {/each}
      </div>
    {/if}
  {/each}
</div>
