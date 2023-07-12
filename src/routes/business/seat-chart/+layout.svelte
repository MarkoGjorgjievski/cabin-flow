<script>
  import SeatingMap from "../../../lib/components/organisms/SeatingMap.svelte";

  export let data
</script>

<header class='flex justify-between'>
<h1>Seat chart</h1>

  <ul>
    <li>
      <a class='btn' href='/business/seat-chart/FWD/left'>FWD/left</a>
      <a class='btn' href='/business/seat-chart/FWD/right'>FWD/right</a>
      <a class='btn' href='/business/seat-chart/AFT/left'>AFT/left</a>
      <a class='btn' href='/business/seat-chart/AFT/right'>AFT/left</a>
    </li>
  </ul>
</header>


<div class='flex w-full'>
  <SeatingMap />
  <slot />
</div>
