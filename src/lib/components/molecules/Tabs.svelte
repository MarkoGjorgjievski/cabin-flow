<script>
  import clsx from "clsx";
  import { page } from "$app/stores";
  import { tabFlexDirection, tabSize } from "$system/tab";

  export let tabs = []
  export let size = 'medium'
  export let direction = 'row'
</script>

<div class={clsx("tabs items-center tabs-boxed w-fit h-fit", [tabFlexDirection.get(direction), tabSize.get(size)])}>
  {#each tabs as tab}
    <a href='{tab.slug}'><span class="tab {size} capitalize" class:tab-active={$page.url.pathname.includes(tab.slug)}>{tab.label}</span></a>
  {/each}
</div>
