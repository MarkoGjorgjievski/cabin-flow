<script>
  import { getContext } from "svelte";
  import { Button, Divider } from "$atoms";
  import { OptionLabel } from "$molecules";

  export let activeType;
  export let options;
  export let addOption;
  export let filterOption;

  const menu = getContext('menu')
</script>

{#each menu[activeType] as service}
  {#each service.categories as category}
    <h2 class='pl-1 text-sm font-normal'>{category.label}</h2>
    <div class='flex flex-wrap w-full gap-1'>
      {#each category.options as option, i}
        {#if options.find(item => item[activeType]?.id === option.id)}
          <span class='flex items-center'>
            <OptionLabel {option} filter onFilter='{() => filterOption(option)}' />
          </span>
        {:else}
          <Button naked on:click={() => addOption(option)}>
            <OptionLabel {option} />
          </Button>
        {/if}
      {/each}
    </div>
    <Divider lastHidden />
  {/each}
{/each}
