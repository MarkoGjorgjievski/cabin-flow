<script>
  import { closeModal } from "svelte-modals";
  import { Button } from "../atoms";

  export let isOpen
  export let component;
  export let props;
  export let onConfirm = () => null;
  export let title = "title"

  const close = () => {
    onConfirm()
    closeModal()
  }
</script>

{#if isOpen}
  <div role="dialog" class="svelte-modal ">
    <div class='relative'>
    <div class="contents !scrollbar">
      <h2 class='self-start py-2'>{title}</h2>
      <svelte:component this='{component}' {...props} />
    </div>
    <div class="actions">
      <Button on:click={close}>OK</Button>
    </div>
    </div>
  </div>
{/if}

<style>
    .svelte-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 100;


        /* allow click-through to backdrop */
        pointer-events: none;
    }

    .contents {
        max-height: 70vh;
        overflow-y: auto;
        min-width: 240px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        pointer-events: auto;
        @apply bg-base-100 rounded-t-box;
    }

    h2 {
        text-align: center;
        font-size: 24px;
    }

    p {
        text-align: center;
        margin-top: 16px;
    }

    .actions {
        position: sticky;
        bottom: 0;
        right: 0;
        padding: 12px;
        display: flex;
        justify-content: flex-end;
        pointer-events: auto;
        @apply bg-base-100 rounded-b-box;
    }
</style>
