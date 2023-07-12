<script>
  import { Divider } from "$atoms";
  import { ChevronRight } from "$icons";
  import { Counter, LabelBadge } from "$molecules";

  export let option;
  export let showDescription;
  export let editMode = false;
  export let counter = false;
</script>

<div>
  <div class='flex shadow-border bg-base-100 rounded-lg overflow-hidden'>
    <div class='bg-base-100 shadow-soft rounded-lg p-3 w-full'>
      <div class='flex flex-col gap-2 w-full font-medium'>
        <h4 class='font-normal'>{option.title}</h4>
      </div>

      <Divider my='{0.5}' />

      <div class='flex justify-between gap-2 w-full items-center text-sm'>
        <p class='opacity-60'>Label</p>
        <div class='flex gap-2 items-center'>
          <LabelBadge color='{option.color}' label='{option.label}' />
          <ChevronRight size='{4}' />
        </div>
      </div>
    </div>

    {#if counter}
      <Counter {editMode} />
    {/if}
  </div>

  {#if option?.description && showDescription}
    <p class='opacity-60 text-sm p-1'>{option?.description}</p>
  {/if}
</div>
