<script>
  import { SeatChartItem } from "$organisms";

  const seats = [
    { food: [], drinks: [] },
    { food: [], drinks: [] },
    { food: [], drinks: [] },
  ];

  function handleDnd(e, i, type) {
    seats[i][type] = e.detail.items;
  }
</script>

<div class='seat-chart-zone flex flex-col-reverse gap-4 w-full'>
  <div class='flex flex-row-reverse gap-4'>
    {#each seats as items, row}
      <SeatChartItem {seats} {row} {handleDnd} />
    {/each}
  </div>
  <div class='flex flex-row-reverse gap-4'>
    {#each seats as items, row}
      <SeatChartItem {seats} {row} {handleDnd} />
    {/each}
  </div>
  <div class='flex flex-row-reverse gap-4'>
    {#each seats as items, row}
      <SeatChartItem {seats} {row} {handleDnd} />
    {/each}
  </div>
  <div class='flex flex-row-reverse gap-4'>
    {#each seats as items, row}
      <SeatChartItem {seats} {row} {handleDnd} />
    {/each}
  </div>
</div>

<style>
  .seat-chart-zone {
      min-height: calc(100% - 268px);
      max-height: fit-content;
  }
</style>
