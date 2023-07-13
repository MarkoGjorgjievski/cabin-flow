<script>
  import { PageTitle } from "$organisms";
  import { CONFIGURATION } from "$lib/constants";
</script>

<PageTitle title='Meals' tabs='{CONFIGURATION.economy.galleys}' direction='col' />

<slot />
