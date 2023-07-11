<script>
  import { SunIcon, MoonIcon } from "$icons";

  export let checked = false
  export let on = SunIcon
  export let off = MoonIcon
  export let effect = 'rotate'
</script>

<label class="swap swap-{effect}">
  <input type="checkbox" bind:checked={checked}  />

  <span class='swap-on'>
    <svelte:component this='{on}' />
  </span>
  <span class='swap-off'>
        <svelte:component this='{off}' />
  </span>
</label>
