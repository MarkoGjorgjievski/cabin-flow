<script>
import clsx from 'clsx';

export let type = 'button';
export let size = 'medium';
export let state = 'primary';
export let shape = '';
export let outlined = false;
export let disabled = false;
export let isLoading = false;
export let naked = false;
export let gap = 2;
export let shadow = '';
export let rounded = '';
export let width = '';
export let self = 'start';
export let id = '';

// const { serverError } = useApi;
// const { buttonSize, buttonState, buttonShape } = buttonStyles;
// const { dropShadow, shape: _shape, width: _width, alignSelf } = styles;
//
// $: if ($serverError) {
//   isLoading = false;
// }
</script>

<button
  type="{type}"
  id="{id}"
  class="{!naked &&
    clsx(
      'btn',
      state,
      `gap-${gap}`,
      outlined && 'btn-outline',
      isLoading && 'loading',
      disabled && 'btn-disabled',
      'whitespace-nowrap',
    )}"
  disabled="{disabled}"
  on:click>
  <slot />
</button>
