<script>
  import { TRIGGERS, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
  import { MealOption } from "$molecules";
  import { DndZone } from "$organisms";

  export let items;
  export let itemComponent = MealOption
  export let className
  export let dropFromOthersDisabled
  export let type

  let shouldIgnoreDndEvents = false;

  function handleDndConsider(e) {
    console.warn(`got consider ${JSON.stringify(e.detail, null, 2)}`);
    const { trigger, id } = e.detail.info;
    if (trigger === TRIGGERS.DRAG_STARTED) {
      console.warn(`copying ${id}`);
      const idx = items.findIndex(item => item.id === id);
      const newId = `${id}_copy_${Math.round(Math.random() * 100000)}`;
      // the line below was added in order to be compatible with version svelte-dnd-action 0.7.4 and above
      e.detail.items = e.detail.items.filter(item => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME]);
      e.detail.items.splice(idx, 0, { ...items[idx], id: newId });
      items = e.detail.items;
      shouldIgnoreDndEvents = true;
    } else if (!shouldIgnoreDndEvents) {
      items = e.detail.items;
    } else {
      items = [...items];
    }
  }

  function handleDndFinalize(e) {
    console.warn(`got finalize ${JSON.stringify(e.detail, null, 2)}`);
    if (!shouldIgnoreDndEvents) {
      items = e.detail.items;
    } else {
      items = [...items];
      shouldIgnoreDndEvents = false;
    }
  }
</script>

<DndZone onDrop='{handleDndFinalize}' onConsider='{handleDndConsider}' {items} {itemComponent} {className} {dropFromOthersDisabled} {type}  />
