<script>
  import clsx from "clsx";

  export let vertical = false;
  export let lastHidden = false;
</script>

<div class={clsx("divider", vertical && 'divider-horizontal', lastHidden && 'last:hidden')}>
  <slot />
</div>
