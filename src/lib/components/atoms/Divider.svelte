<script>
  import clsx from "clsx";

  export let vertical = false;
  export let lastHidden = false;
  export let my = 2;
</script>

<div class={clsx("divider", vertical && 'divider-horizontal', lastHidden && 'last:hidden', [`my-${my}`])}>
  <slot />
</div>
