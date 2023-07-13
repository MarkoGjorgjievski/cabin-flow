<script>
  import { page } from "$app/stores";
  import { getCabin } from "$hooks";
  import { CONFIGURATION } from "$lib/constants";
  import { createAcronymObject } from "../../../../hooks";
  import ZoneContainersTemplate from "../../../../lib/components/templates/ZoneContainersTemplate.svelte";
  import { MENU } from "../../../../lib/constants";

  export let data;

  const cabin = getCabin($page);

  let serviceZones = [];
  Object.values(CONFIGURATION[cabin].positions).map(position => position.cabin.map(cabin => serviceZones.push(cabin)));
  const services = createAcronymObject(MENU.economy.food);
</script>

<ZoneContainersTemplate {data} {serviceZones} {cabin} options='{services[data.service].options}' />

