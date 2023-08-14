<script>
    import clsx from "clsx";
    import Person from '$lib/assets/images/person.jpeg'
  
    export let firstName = '';
    export let lastName = '';
    export let id = 0;
    export let languages = [];
    export let size = 'small';
    export let selected = false;
</script>

<div class={clsx("flex w-full items-center p-2 rounded-xl", selected && 'bg-base-300')}>
    <img alt='cabin crew' class={clsx('rounded-full', size === 'small' && 'w-12 h-12')} src='{Person}' />
    <div class="flex flex-col ">
        <span>{firstName}</span>
        <span>{id}</span>
    </div>
</div>