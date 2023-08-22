<script>
  import { Divider } from "$atoms";
  import { OptionLabel } from "$molecules";
  import { businessMealQuantity } from '$lib/stores/businessMeals.js'

  export let services;
  export let position;
  export let galley;

  const round = [Math.ceil, Math.floor]
</script>

<div class='flex flex-col gap-2 justify-between w-full h-80 px-0.5 overflow-y-auto scrollbar'>
  {#each services as service, i}
    <Divider>{service.label}</Divider>
    {#each service.categories as category, j}
      <h6 class='text-xs uppercase pt-2 pl-1'>{category.label}</h6>
      {#each category.options as option, k}
        <OptionLabel {option} quantity='{round[position]($businessMealQuantity[galley][i][j][k]/2)}' showQuantity />
      {/each}
    {/each}
  {/each}
</div>
