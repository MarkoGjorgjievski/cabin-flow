<script>
  import { OptionCounter } from "$molecules";
  import { OptionLabel } from "../../molecules";

  export let option;
  export let showDescription;
  export let editMode = false;
  export let range = false;
  export let galley = false;
</script>

<div class='w-full max-w-[298px]'>
  <div class='flex border border-base-300 bg-base-300 rounded-lg overflow-hidden h-full'>
    <div class='bg-base-200 rounded-lg p-3 w-full flex flex-col h-full'>
      <div class='flex flex-col gap-2 w-full font-medium flex-1'>
        <h4 class='font-normal'>{option.title}</h4>
        {#if option?.description && showDescription}
          <p class='opacity-60 text-sm p-1'>{option?.description}</p>
        {/if}
      </div>

      <div class='divider my-1'></div>

      <OptionLabel {option} {range}  />
    </div>

    <OptionCounter {editMode} id='{option.id}' count={option.quantity[galley]} />
  </div>
</div>
