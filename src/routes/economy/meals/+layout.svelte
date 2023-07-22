<script>
  import { PageTitle } from "$organisms";
  import { getContext } from "svelte";

  const { galleys } = getContext('config');
</script>

<PageTitle title='Meals' tabs='{galleys}' direction='col' />

<slot />
