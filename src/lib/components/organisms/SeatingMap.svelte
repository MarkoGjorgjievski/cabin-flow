<script>
  import { getDividers, seatingConfig } from "$hooks";
  import { CONFIGURATION } from "$lib/constants";
  import { Seat, GalleyIndicator } from "$molecules";
  import { RowDividerDnd } from "$organisms";

  export let cabin;
  const config = seatingConfig(cabin);

  let zones = [{ row: 0, id: 0, crew: ['L1', 'R5A'] }, { row: 4, id: 4, crew: ['L2', 'R2A'] }];

  let startingRows = [0, 4];

  let dividers = getDividers(config, zones);

  /** onConsider
   * consider the output so that the crew order is consistent (sorted)
   * - e.g. first is ['L1', 'R5A'] then ['L2', 'R2A'],
   * if they get swapped, swap them back
   */

  const handleDnd = (e, i) => {
    dividers[i] = e.detail.items;
    return true;
  };
</script>

<div class='relative'>
  <div class='w-full flex flex-col sticky top-4'>
    {#each config as row, i}
      <div class='w-fit flex flex-col'>
        <GalleyIndicator rowNumber='{i}' {cabin} position='beforeRow' />

        {#if CONFIGURATION[cabin]?.ghostRow - CONFIGURATION[cabin]?.rowStart !== i}

          <RowDividerDnd items='{dividers[i]}' handleDnd='{e => handleDnd(e, i)}' />

          <div class='flex w-fit gap-2'>
            {#each row as seat}
              <Seat seat={seat} cabin='{cabin}' />
            {/each}
          </div>

          {#if CONFIGURATION[cabin].rowEnd - CONFIGURATION[cabin].rowStart === i}
            <RowDividerDnd />
          {/if}
        {/if}

        <GalleyIndicator rowNumber='{i}' {cabin} position='afterRow' />
      </div>
    {/each}
  </div>
</div>
