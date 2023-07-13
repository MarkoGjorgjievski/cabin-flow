<script>
  import { PageTitle } from "$organisms";
  import { CONFIGURATION } from "$lib/constants";

  /*** Derive this from zones ***/
  const zones = Object.values(CONFIGURATION.business.positions).reduce((acc, curr) => {
    const tabObj = curr.cabin.map(zone => zone.map(position => ({ label: position, slug: position })));
    return [...acc, ...tabObj];
  }, []);
</script>

<div class='sticky top-4 z-10'>
  <PageTitle title='Seat Chart' stackedTabs='{zones}'  />
</div>

<slot />
