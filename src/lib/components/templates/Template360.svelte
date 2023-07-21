<script>
  import { openModal } from 'svelte-modals';
  import Modal from "$molecules";
  import { Button } from "$atoms";
  import { SeatingMap } from "$organisms";

  function handleClick() {
    console.log("modal")
    openModal(Modal, { title: "Select passenger",  component: SeatingMap })
  }
</script>

<div class='flex gap-4 pb-4'>
  <div class='card border border-base-300 overflow-hidden w-full h-fit'>
    <div class='card-title px-4 py-3 border-b border-base-100 bg-base-200 justify-between items-center'>
      <div>Round Of Drinks</div>
      <Button size='small' on:click={handleClick}>Add</Button>
    </div>
    <div class='card-body'>
      <ul>
        <li class='w-full flex items-center justify-between'>
          <label class='opacity-60 ml-1'>LHS</label>
          <label class='opacity-60 mr-1'>RHS</label>
        </li>
        <li>
          <div class='w-full flex items-center justify-between'>
            <select class="select select-sm w-fit">
              <option>Marko</option>
              <option>Marko</option>
              <option>Marko</option>
              <option>Marko</option>
            </select>
            <select class="select select-sm w-fit">
              <option>Marko</option>
              <option>Marko</option>
              <option>Marko</option>
              <option>Marko</option>
            </select>
          </div>
        </li>
        <li>
          <div class='w-full flex items-center justify-between'>
            <select class="select select-sm w-fit">
              <option>Marko</option>
              <option>Marko</option>
              <option>Marko</option>
              <option>Marko</option>
            </select>
            <select class="select select-sm w-fit">
              <option>Marko</option>
              <option>Marko</option>
              <option>Marko</option>
              <option>Marko</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class='flex flex-col gap-4 w-full'>
    <div class='card border border-base-300 overflow-hidden w-full h-fit'>
      <div class='card-title px-4 py-3 border-b border-base-100 bg-base-200 justify-between items-center'>
        <div>Medication</div>
        <Button size='small' on:click={handleClick}>Add</Button>
      </div>
      <div class='card-body'>
        <ul>
          <li>
            <div class='flex w-full gap-3 items-center'>
              <h4 class='opacity-60'>12A</h4>
              <h4 class='font-medium flex-1'>MR John Smith</h4>
              <select class="select select-sm w-fit">
                <optgroup label="Basic FA kit">
                  <option selected>Panadol</option>
                  <option>Buccastem</option>
                </optgroup>
                <optgroup label="Emergency kit">
                  <option>Syringes</option>
                  <option>Gauze</option>
                </optgroup>
              </select>
            </div>

          </li>
          <li>
            <div class='flex w-full gap-3 items-center'>
              <h4 class='opacity-60'>12B</h4>
              <h4 class='font-medium flex-1'>MS Jean Smith</h4>
              <select class="select select-sm w-fit">
                <optgroup label="Basic FA kit">
                  <option>Panadol</option>
                  <option selected>Buccastem</option>
                </optgroup>
                <optgroup label="Emergency kit">
                  <option>Syringes</option>
                  <option>Gauze</option>
                </optgroup>
              </select>
            </div>

          </li>
        </ul>
      </div>
    </div>
    <div class='card border border-base-300 overflow-hidden w-full h-fit'>
      <div class='card-title px-4 py-3 border-b border-base-100 bg-base-200 justify-between items-center'>
        <div>Alcohol 4Ds</div>
        <Button size='small' on:click={handleClick}>Add</Button>
      </div>
      <div class='card-body'>
        <ul>
          <li>
            <div class='flex w-full gap-3 items-center'>
              <h4 class='opacity-60'>14B</h4>
              <h4 class='font-medium flex-1'>MR Marc George</h4>
            <select class="select select-sm w-fit">
              <option selected>Distract</option>
              <option>Delay</option>
              <option>Dilute</option>
              <option>Deny</option>
            </select>
            </div>
          </li>
          <li>
            <div class='flex w-full gap-3 items-center'>
              <h4 class='opacity-60'>14C</h4>
              <h4 class='font-medium flex-1'>MR George Marc</h4>
              <select class="select select-sm w-fit">
                <option>Distract</option>
                <option selected>Delay</option>
                <option>Dilute</option>
                <option>Deny</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
    ul {
        @apply divide-y divide-base-100 flex flex-col gap-2;
    }
  li {
      padding-top: .5rem;
  }
</style>
