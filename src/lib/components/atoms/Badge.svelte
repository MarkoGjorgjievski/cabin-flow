<script>
  import clsx from "clsx";
  import { badgeColor, badgeMaxWidth, badgeSize } from "$system/badge";

  export let color = 'white'
  export let label
  export let size = 'medium'
  export let className = ''
  export let maxWidth = ''
</script>

<div class={clsx('badge', className, [badgeColor.get(color), badgeSize.get(size), badgeMaxWidth.get(maxWidth)])}>{label}</div>
