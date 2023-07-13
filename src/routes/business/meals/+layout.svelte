<script>
  import { PageTitle } from "$organisms";
  import { CONFIGURATION } from "$lib/constants";
</script>

<PageTitle title='Meals' tabs='{CONFIGURATION.business.galleys}' direction='col-reverse' />
<slot />
