<script>
  import { PlusSmallIcon, MinusSmallIcon } from "$icons";

  export let count = 0;
  export let editMode = true;

  const decrement = () => {
    if (count <= 0) {
      return;
    }
    count -= 1;
  };
</script>

<div>
  <div class='flex flex-col w-fit h-full justify-between items-center'>
    <button class='btn btn-ghost btn-sm {!editMode && "invisible"}' on:click={() => count += 1}>
      <PlusSmallIcon />
    </button>
    <span class='text-center text-lg'>{count}</span>
    <button class='btn btn-ghost btn-sm {!editMode && "invisible"}' on:click={decrement}>
      <MinusSmallIcon />
    </button>
  </div>
</div>
