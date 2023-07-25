<script>
  import { Tabs } from "$molecules";

  export let tabs = [];
  export let stackedTabs = [];
  export let stackedTabsContainerClass = 'flex flex-col-reverse rounded-lg bg-base-200';
  export let direction = 'row';
  export let size = 'medium'
  export let title = 'Page Title';
</script>

<div class='flex justify-between py-4 h-fit'>
  <h1 class='backdrop-blur h-fit'>{title}</h1>
  {#if stackedTabs.length}
    <div class={stackedTabsContainerClass}>
      {#each stackedTabs as stack}
        <Tabs tabs='{stack}' {size} {direction} />
      {/each}
    </div>
  {/if}
  {#if tabs.length}
    <Tabs {tabs} {direction} />
  {/if}
</div>
