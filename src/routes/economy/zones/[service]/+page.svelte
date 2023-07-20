<script>
  import { page } from "$app/stores";
  import { getCabin, createAcronymObject, getServiceZones } from "$hooks";
  import { MENU } from "$lib/constants";
  import { ZoneContainersTemplate } from "$templates";

  export let data;

  const cabin = getCabin($page);
  const serviceZones = getServiceZones(cabin)
  const services = createAcronymObject(MENU.economy.food);
</script>

<ZoneContainersTemplate {data} {serviceZones} {cabin} options='{services[data.service].options}' />

