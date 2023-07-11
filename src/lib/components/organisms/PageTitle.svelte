<script>
  import { Tabs } from "$molecules";

  export let tabs;
  export let stackedTabs;
  export let stackedTabsContainerClass = 'flex flex-col-reverse bg-base-200 rounded-lg';
  export let direction;
  export let size;
  export let title = 'Page Title';
</script>

<div class='flex justify-between py-4 h-fit'>
  <h1>{title}</h1>
  {#if stackedTabs}
    <div class={stackedTabsContainerClass}>
      {#each stackedTabs as stack}
        <Tabs tabs='{stack}' {size} {direction} />
      {/each}
    </div>
  {/if}
  {#if tabs}
    <Tabs {tabs} {direction} />
  {/if}
</div>
