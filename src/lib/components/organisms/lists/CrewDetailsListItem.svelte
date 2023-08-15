<script>
    import clsx from "clsx";
    import Person from '$lib/assets/images/person.jpeg'
  
    export let crew = null
    export let selected = false;
</script>

<div class={clsx("flex w-full items-center p-2 rounded-xl", selected && 'bg-base-300')}>
    <img alt='cabin crew' class={clsx('rounded-full w-12 h-12')} src='{Person}' />
    <div class="flex justify-between w-full">
        <div class="flex flex-col ml-2 text-left">
            <div class='font-medium '>{crew.firstName} {crew.lastName}</div>
            <div>{crew.id}</div>
        </div>
        <div class="flex flex-col text-right">
            <div class='font-medium'>{crew.position ? crew.position : '-'}</div>
            <div>
                {#if crew.languages.length}
                    {crew.languages.join(', ')}
                {/if}
            </div>
        </div>
    </div>
</div>