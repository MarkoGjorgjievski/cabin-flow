<script>
  import { getServiceZones } from "$hooks";
  import { ZoneContainersTemplate } from "$templates";
  import { getContext } from "svelte";

  const cabin = 'business'
  const { positions } = getContext('config')
  const serviceZones = getServiceZones(positions)
</script>

<ZoneContainersTemplate {serviceZones} {cabin} />
