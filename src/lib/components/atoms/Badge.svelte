<script>
  import clsx from "clsx";
  import { badgeColor, badgeMaxWidth, badgeSize, badgeState } from "$system/badge";
  import { shape } from "$system/common";

  export let color = ''
  export let label
  export let size = 'medium'
  export let className = ''
  export let maxWidth = ''
  export let rounded = ''
  export let state = ''
</script>

<div class={clsx('badge', className, [badgeColor.get(color), badgeSize.get(size), badgeMaxWidth.get(maxWidth), shape.get(rounded), badgeState.get(state)])}>
  {#if label}{label}{:else}<slot />{/if}
</div>
