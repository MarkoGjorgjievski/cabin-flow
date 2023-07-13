<script>
  import clsx from 'clsx';
  import { buttonSize, buttonState, buttonShape } from '$system/button';
  import { dropShadow, shape, _width, alignSelf } from '$system/common';

  export let type = 'button';
  export let size = 'medium';
  export let state = 'primary';
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
</script>

<button
  type="{type}"
  id="{id}"
  class="{!naked &&
    clsx(
      'btn',
      `gap-${gap}`,
      [buttonSize.get(size)],
      [buttonState.get(state)],
      [buttonShape.get(shape)],
      [dropShadow.get(shadow)],
      [shape.get(rounded)],
      [_width.get(width)],
      [alignSelf.get(self)],
      outlined && 'btn-outline',
      isLoading && 'loading',
      disabled && 'btn-disabled',
      'whitespace-nowrap',
    )}"
  disabled="{disabled}"
  on:click>
  <slot />
</button>
