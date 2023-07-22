<script>
  import { getContext } from "svelte";
  import { PageTitle } from "$organisms";

  const { galleys } = getContext('config');
</script>

<PageTitle title='Meals' tabs='{galleys}' direction='col' />
<slot />
