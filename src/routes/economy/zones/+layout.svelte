<script>
  import { PageTitle } from "$organisms";
  import { MENU } from "$lib/constants";

  const tabs = MENU.economy.food.map(service => ({ slug: service.acronym, label: service.acronym }));
</script>

<PageTitle title='Zones' {tabs} />

<slot />
