<script>
  import { page } from "$app/stores";
  import { getCabin, getServiceZones } from "$hooks";
  import { ZoneContainersTemplate } from "$templates";

  const cabin = getCabin($page);
  const serviceZones = getServiceZones(cabin)
</script>

<ZoneContainersTemplate {serviceZones} {cabin} />
