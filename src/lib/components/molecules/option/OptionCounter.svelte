<script>
  import { PlusSmallIcon, MinusSmallIcon, ChevronUp } from "$icons";
import ChevronDown from "$icons/ChevronDown.svelte";

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
  <div class='flex flex-col w-fit h-full justify-center items-center '>
    <button class='btn btn-ghost btn-sm opacity-70 {!editMode && "invisible"}' on:click={increment} type='button'>
      <ChevronUp size={4} />
    </button>

    <span class='text-center text-lg px-1'>{count}</span>
    <input type='number' name={id} class='hidden text-center text-lg' bind:value={count} />

    <button class='btn btn-ghost btn-sm opacity-70 {!editMode && "invisible"}' on:click={decrement} type='button'>
      <ChevronDown size={4} />
    </button>
  </div>
</div>
