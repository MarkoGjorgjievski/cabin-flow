<script>
  import { page } from "$app/stores";
  import { getCabin } from "$hooks";
  import { CONFIGURATION } from "$lib/constants";
  import ZoneContainersTemplate from "../../../../lib/components/templates/ZoneContainersTemplate.svelte";

  export let data;

  const cabin = getCabin($page)
  $: serviceZones = CONFIGURATION[cabin].positions[data.zone].cabin;
</script>

<ZoneContainersTemplate {data} {serviceZones} {cabin} />
