<script>
  import { setContext } from "svelte";
  import { MENU, CONFIGURATION } from "$lib/constants";

  setContext('menu', MENU.business)
  setContext('config', CONFIGURATION.business)
</script>

<slot />
