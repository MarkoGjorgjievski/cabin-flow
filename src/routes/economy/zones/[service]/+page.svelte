<script>
  import { page } from "$app/stores";
  import { getCabin, createAcronymObject } from "$hooks";
  import { CONFIGURATION, MENU } from "$lib/constants";
  import { ZoneContainersTemplate } from "$templates";

  export let data;

  const cabin = getCabin($page);

  let serviceZones = [];
  Object.values(CONFIGURATION[cabin].positions).map(position => position.cabin.map(cabin => serviceZones.push(cabin)));
  const services = createAcronymObject(MENU.economy.food);
</script>

<ZoneContainersTemplate {data} {serviceZones} {cabin} options='{services[data.service].options}' />

