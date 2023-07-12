<script>
  import clsx from "clsx";
  import { page } from "$app/stores";
  import { getDividers, seatingConfig } from "$hooks";
  import { CONFIGURATION } from "$lib/constants";
  import { Seat, GalleyIndicator } from "$molecules";
  import { RowDividerDnd } from "$organisms";

  const cabin = $page.route.id.split('/')[1];

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
    return true
  };

  const containerDirection = cabin === 'economy' ? 'flex-col' : 'flex-col-reverse'
  const rowDirection = cabin === 'economy' ? 'flex-row' : 'flex-row-reverse'
</script>

<div class={clsx(containerDirection, 'w-full flex')}>
  {#each config as row, i}
    <div class={clsx(containerDirection, 'w-fit flex')}>
      <GalleyIndicator rowNumber='{i}' {cabin} position='beforeRow' />

      {#if CONFIGURATION[cabin]?.ghostRow - CONFIGURATION[cabin].rowStart !== i}

        <RowDividerDnd items='{dividers[i]}' handleDnd='{e => handleDnd(e, i)}' />

        <div class={clsx(rowDirection, 'flex w-fit gap-2')}>
          {#each row as seat}
            <Seat seat={seat} cabin='{cabin}' />
          {/each}
        </div>

        <!--{#if CONFIGURATION[cabin].rowEnd - CONFIGURATION[cabin].rowStart === i}-->
        <!--  <RowDividerDnd  />-->
        <!--{/if}-->
      {/if}

      <GalleyIndicator rowNumber='{i}' {cabin} position='afterRow' />
    </div>
  {/each}
</div>
