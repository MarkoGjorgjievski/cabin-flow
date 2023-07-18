<script>
  import { Button } from "../../atoms";
  import { PlusSmallIcon } from "../../atoms/icons";

  export let id
  export let onFoodClick = () => null
  export let onDrinksClick = () => null
  export let handleDnd = () => null
</script>

<div class='flex gap-2 w-full'>
<Button on:click={onFoodClick} size='small'>
  <PlusSmallIcon />
  Meal
</Button>
<Button on:click={onDrinksClick} size='small'>
  <PlusSmallIcon />
  Drink
</Button>
<Button on:click={handleDnd} size='small' state='ghost'>
  DND
</Button>
</div>
