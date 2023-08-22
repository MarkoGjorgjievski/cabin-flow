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
  <PageTitle title='Seat Chart' stackedTabs='{zones}' />
</div>

<div class="alert alert-warning mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>Page In Progress</span>
</div>

<slot />
