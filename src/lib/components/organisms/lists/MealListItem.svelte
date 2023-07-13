<script>
  import { OptionCounter } from "$molecules";
  import { OptionLabel } from "../../molecules";

  export let option;
  export let showDescription;
  export let editMode = false;
  export let range = false
</script>

<div>
  <div class='flex shadow-border bg-base-100 rounded-lg overflow-hidden'>
    <div class='bg-base-100 shadow-soft rounded-lg p-3 w-full'>
      <div class='flex flex-col gap-2 w-full font-medium'>
        <h4 class='font-normal'>{option.title}</h4>
      </div>

      <div class='divider my-1'></div>

      <OptionLabel {option} {range}  />
    </div>

    <OptionCounter {editMode} />
  </div>

  {#if option?.description && showDescription}
    <p class='opacity-60 text-sm p-1'>{option?.description}</p>
  {/if}
</div>
