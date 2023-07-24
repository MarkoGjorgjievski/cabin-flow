<script>
  import { PlusSmallIcon, MinusSmallIcon } from "$icons";

  export let count = 0;
  export let id = '';
  export let editMode = true;

  export let onIncrement = () => null
  export let onDecrement = () => null

  const increment = () => {
    count++;
    onIncrement()
  };

  const decrement = () => {
    if (count <= 0) {
      return;
    }
    count -= 1;
    onDecrement()
  };
</script>

<div>
  <div class='flex flex-col w-fit h-full justify-between items-center'>
    <button class='btn btn-ghost btn-sm {!editMode && "invisible"}' on:click={increment} type='button'>
      <PlusSmallIcon />
    </button>

    <span class='text-center text-lg'>{count}</span>
    <input type='number' name={id} class='hidden text-center text-lg' bind:value={count} />

    <button class='btn btn-ghost btn-sm {!editMode && "invisible"}' on:click={decrement} type='button'>
      <MinusSmallIcon />
    </button>
  </div>
</div>
