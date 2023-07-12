<script>
  import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

  export let items;
  export let itemComponent;
  export let onDrop;
  export let onConsider;
  export let idPropertyName = "id";
  export let flipDurationMs = 300;
  export let className;
  export let dropFromOthersDisabled = false;
  export let type;

  function handleConsider(e) {
    onConsider(e);
  }

  function handleFinalize(e) {
    onDrop(e);
  }
</script>

<section class='{className}' on:consider={handleConsider} on:finalize={handleFinalize}
         use:dndzone={{ items, flipDurationMs, dropFromOthersDisabled, type }}>
  {#each items as item(item[idPropertyName])}
    <div animate:flip={{ duration: flipDurationMs }}>
      <svelte:component this={itemComponent} option={{...item, label: false }} {...item} hideQuantity />
    </div>
  {/each}
</section>
