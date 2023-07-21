<script>

  import { MENU } from "$lib/constants";
  import { Button, Divider } from "$atoms";
  import { OptionLabel } from "$molecules";

  export let activeType;
  export let options;
  export let addOption;
  export let filterOption;
</script>

{#each Object.entries(MENU.business[activeType]) as [key, service]}
  {#each Object.values(service) as item}
    <h2 class='pl-1 text-sm font-normal'>{item.label}</h2>
    <div class='flex flex-wrap w-full gap-1'>
      {#each item.options as option, i}
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
