<script>
import { getDividers, getNonEmptyIndexes } from "$hooks";
import { seatingConfig, useConfig } from "$hooks/useConfig";

  import { Seat, GalleyIndicator } from "$molecules";
  import { RowDividerDnd } from "$organisms";
  import { getContext } from "svelte";

  export let cabin = 'economy';

  const config = getContext('config');
  const seating = seatingConfig(config);
  const { zoneRows } = useConfig(config);

  let dividers = getDividers(seating, zoneRows);

  const handleConsider = (e, i) => {
    dividers[i] = e.detail.items;
    return true;
  };

  const handleFinalize = (e, i) => {
    dividers[i] = e.detail.items;
    return true;
  };
</script>

<div class='relative'>
  <div class='w-full flex flex-col sticky top-4'>
    {#each seating as row, i}
      <div class='w-fit flex flex-col'>
        {#if config.rowGapAfter.includes(config.rowStart + i)}
          <div class='h-8'>EXIT</div>
        {/if}
        
        <GalleyIndicator rowNumber='{i}' {cabin} position='beforeRow' />

        <RowDividerDnd items='{dividers[i]}' handleConsider='{e => handleConsider(e, i)}' handleFinalize='{e => handleFinalize(e, i)}' />

        <div class='flex w-fit gap-1'>
          {#each row as seat}
            <Seat seat={seat} cabin='{cabin}' />
          {/each}
        </div>

        {#if config.rowEnd - config.rowStart === i}
          <RowDividerDnd />
        {/if}

        <GalleyIndicator rowNumber='{i}' {cabin} position='afterRow' />
      </div>
    {/each}
  </div>
</div>
