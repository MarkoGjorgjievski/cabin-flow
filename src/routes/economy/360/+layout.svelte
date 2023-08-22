<script>
  import { getContext } from "svelte";
  import { Modals, closeModal } from 'svelte-modals'
  import { PageTitle } from "$organisms";
  import { Badge } from "$atoms";
  import { OptionLabel } from "$molecules";

  const { food } = getContext('menu');
  const { galleys } = getContext('config');
</script>

<PageTitle title='360&deg;' />

<div class="alert alert-warning mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>Page In Progress</span>
</div>

<div class='flex flex-col gap-4 w-full'>
  <div class='card w-full'>
    <div class='card-body flex flex-row justify-between'>
      <div class='card-title'>Top of decent</div>
      <Badge rounded='medium' size='extra-large' state='primary'>15:35</Badge>
    </div>
  </div>

  <div class='flex gap-4 mb-4'>
    {#each food as service}
      <div class='card w-full max-w-[33vw]'>
        <div class='card-body flex flex-row justify-between w-full'>
          <div class='w-full flex flex-col gap-4 justify-between w-full'>
            <h2 class='card-headline'>{service.acronym}</h2>
            <div>
              <div class='flex flex-col mb-2'>
                <label class='text-xs pb-0.5 opacity-60'>Start heating</label>
                <Badge rounded='medium' size='large' state='base-200' label='15:00' />
              </div>
              <div class='flex flex-col'>
                <label class='text-xs pb-0.5 opacity-60'>Start service</label>
                <Badge rounded='medium' size='large' state='primary'>15:35</Badge>
              </div>
            </div>
          </div>
          <div class='w-full flex flex-col gap-1'>
            <label class='text-xs pb-1 opacity-60'>Heating times</label>
            {#each service.options as option}
              <OptionLabel showQuantity {option} />
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <PageTitle direction='col' tabs='{galleys}' title='Galleys' />

  <slot />
</div>

<Modals>
  <div
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
  ></div>
</Modals>
