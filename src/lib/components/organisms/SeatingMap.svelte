<script>
  import { calculations, getDividers, passengerSeating, seatingConfig } from "$hooks";
  import { Seat, GalleyIndicator } from "$molecules";
  import { RowDividerDnd } from "$organisms";
  import { getContext } from "svelte";

  export let cabin = 'economy';

  const config = getContext('config');
  const seating = seatingConfig(config);
  const calcs = calculations(config);
  const pax = passengerSeating(config)

  /** onConsider
   * consider the output so that the crew order is consistent (sorted)
   * - e.g. first is ['L1', 'R5A'] then ['L2', 'R2A'],
   * if they get swapped, swap them back
   */

  let zones = [{ row: 0, id: 0, crew: ['L1', 'R5A'] }, { row: 4, id: 4, crew: ['L2', 'R2A'] }];
  let startingRows = [0, 4];
  let dividers = getDividers(seating, zones);

  const handleDnd = (e, i) => {
    dividers[i] = e.detail.items;
    return true;
  };
</script>

<div class='relative'>
  <div class='w-full flex flex-col sticky top-4'>
    {#each pax as row, i}
      <div class='w-fit flex flex-col'>
        {#if config.rowGapAfter.includes(config.rowStart + i)}
          <div class='h-8'>EXIT</div>
        {/if}
        <GalleyIndicator rowNumber='{i}' {cabin} position='beforeRow' />

        <RowDividerDnd items='{dividers[i]}' handleDnd='{e => handleDnd(e, i)}' />

        <div class='flex w-fit gap-1'>
          {#each row as zone}
            <div class='flex w-fit gap-1'>
              {#each zone as seat}
                <Seat seat={seat} cabin='{cabin}' />
              {/each}
            </div>
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
