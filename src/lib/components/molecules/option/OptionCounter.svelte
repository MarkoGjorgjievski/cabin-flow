<script>
  import { PlusSmallIcon, MinusSmallIcon } from "$icons";

  export let count = 0;
  export let id = ''
  export let editMode = true;

  const increment = () => {
    count++
  }

  const decrement = () => {
    if (count <= 0) {
      return;
    }
    count -= 1;
  };

  $: count
</script>

<div>
  <div class='flex flex-col w-fit h-full justify-between items-center'>
    <button type='button' class='btn btn-ghost btn-sm {!editMode && "invisible"}' on:click={increment}>
      <PlusSmallIcon />
    </button>
    <span class='text-center text-lg'>{count}</span>
    <input type='number' name='{id}' class='hidden text-center text-lg' bind:value={count} />
    <button type='button' class='btn btn-ghost btn-sm {!editMode && "invisible"}' on:click={decrement}>
      <MinusSmallIcon />
    </button>
  </div>
</div>
