<script>
  import clsx from "clsx";
  import { toggleSize, toggleState } from "$system/toggle";

  export let checked = false
  export let labelOff = ''
  export let labelOn = ''
  export let size = 'medium'
  export let state = 'primary'
</script>

<div class="form-control">
  <label class="label cursor-pointer w-fit">
    {#if labelOff}
      <span class="label-text pr-1">{labelOff}</span>
    {/if}
    <input type="checkbox" class={clsx("toggle", [toggleState.get(state),toggleSize.get(size)])} bind:checked={checked} />
    {#if labelOn}
      <span class="label-text pl-1">{labelOn}</span>
    {/if}
  </label>
</div>
