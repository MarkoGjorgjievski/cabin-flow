<script>
  import { setContext } from "svelte";
  import { MENU, CONFIGURATION } from "$lib/constants";

  setContext('menu', MENU.economy)
  setContext('config', CONFIGURATION.economy)
</script>

<slot />
