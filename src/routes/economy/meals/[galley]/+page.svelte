<script>
  import EconomyMealList from "../../../../lib/components/organisms/lists/EconomyMealList.svelte";

  export let data
</script>

<EconomyMealList galley='{data.galley}' />
