<script>
  import { Badge } from "$atoms";

  export let color = 'white'
  export let label
  export let size = 'medium'
</script>

<Badge
  {color}
  {label}
  {size}
  maxWidth={size}
  className='label-badge'
/>
