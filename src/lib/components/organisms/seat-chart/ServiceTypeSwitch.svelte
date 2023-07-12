<script>
  import { CutleryIcon, WineGlassIcon } from "$icons";
  import { MENU } from "$lib/constants";

  export let activeType
  export let activeTab
  export let onTypeClick = () => null
  export let onKeyClick = () => null

  const labels = {
    wine: 'Wine', spirits: 'Spirits', hotDrinks: 'Hot drinks', coldDrinks: 'Cold drinks',
  }

  const ICONS = {
    food: WineGlassIcon,
    drinks: CutleryIcon,
  }
</script>

<button class='bg-base-200 bg-opacity-40 backdrop-blur rounded-full border border-base-100 p-2'
     on:click={onTypeClick}>
  <svelte:component this='{ICONS[activeType]}' />
</button>

<div class='tabs tabs-boxed bg-base-200 bg-opacity-40 backdrop-blur rounded-full'>
  {#each Object.keys(MENU.business[activeType]) as key}
    <button on:click={() => onKeyClick(key)}
         class='tab !rounded-full text-base-content' class:tab-active={key === activeTab}>
      {labels[key] || key}
    </button>
  {/each}
</div>
