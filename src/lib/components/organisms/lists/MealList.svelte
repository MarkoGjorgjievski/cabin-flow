<script>
  import { Divider } from "$atoms";
  import { OptionLabel } from "$molecules";

  export let services;
  export let position;
  export let galley;

  const round = [Math.ceil, Math.floor]
</script>

<div class='flex flex-col gap-2 justify-between w-full h-80 px-0.5 overflow-y-auto scrollbar'>
  {#each services as service}
    <Divider>{service.label}</Divider>
    {#each service.categories as category}
      <h6 class='text-xs uppercase pt-2 pl-1'>{category.label}</h6>
      {#each category.options as option, i}
        <OptionLabel {option} quantity='{round[position](option.quantity[galley]/2)}' showQuantity />
      {/each}
    {/each}
  {/each}
</div>
