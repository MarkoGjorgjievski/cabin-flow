<script>
  import { createAcronymObject, getServiceZones } from "$hooks";
  import { ZoneContainersTemplate } from "$templates";
  import { getContext } from "svelte";

  export let data;

  const { food } = getContext('menu')
  const services = createAcronymObject(food);

  const cabin = 'economy';
  const { positions } = getContext('config')
  const serviceZones = getServiceZones(positions)
</script>

<ZoneContainersTemplate {data} {serviceZones} {cabin} options='{services[data.service].options}' />

