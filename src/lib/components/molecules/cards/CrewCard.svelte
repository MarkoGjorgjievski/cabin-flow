<script>
  import clsx from "clsx";
  import Person from '$lib/assets/images/person.jpeg'

  export let firstName = '';
  export let lastName = '';
  export let languages = [];
  export let size = 'medium'
  export let selected = false

  const cardSize = new Map([
    ['small', 'w-20 py-0.5 px-2 text-sm h-fit'],
    ['medium', 'w-28 py-2 px-4 h-fit'],
  ])
</script>

{#if firstName}
  <div
    class={clsx(cardSize.get(size), 'crew-card bg-base-300 border border-base-100 rounded-lg flex flex-col justify-center items-center shadow-border', selected && 'border-info')}>
    <img alt='cabin crew' class={clsx('rounded-full', size === 'small' && 'w-12 h-12')} src='{Person}' />
    <div class='leading-5 text-center py-0.5'>
    <h5 class='mt-1'>{firstName}</h5>
    {#if lastName}<h5>{lastName}</h5>{/if}
    </div>
    {#if languages.length}
      {#each languages as lang}
        <p class='text-xs'>{lang}</p>
      {/each}
    {/if}
  </div>
{/if}
