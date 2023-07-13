<script>
  export let title = 'Card title'
  export let subtitle
  export let headline = 'Card headline'
  export let className = ''
</script>

<div class="card w-full {className}">
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <h2 class="card-headline">{headline}</h2>
    {#if subtitle}<p>{subtitle}</p>{/if}
  </div>
</div>
