<script>
  import { PageTitle } from "$organisms";
  import { getContext } from "svelte";

  const { positions } = getContext('config');

  /*** Derive each position from zones (each zone) ***/
  const zones = Object.values(positions).reduce((acc, curr) => {
    const tabObj = curr.cabin.map(zone => zone.map(position => ({ label: position, slug: position })));
    return [...acc, ...tabObj];
  }, []);
</script>

<div class='sticky top-4 z-10'>
  <PageTitle title='Seat Chart' stackedTabs='{zones}'  />
</div>

<slot />
