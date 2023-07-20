<script>
  import { PageTitle } from "$organisms";
  import { CONFIGURATION } from "$lib/constants";
  import { Badge } from "$atoms";
  import { OptionLabel } from "$molecules";

  // TODO: In progress
</script>

<PageTitle title='360&deg;' />

<div class='flex flex-col gap-4 w-full'>
<div class="card w-full">
  <div class="card-body flex flex-row justify-between">
    <div class='card-title'>Top of decent</div>
    <Badge rounded='medium' size='extra-large' state='primary'>15:35</Badge>
  </div>
</div>

<div class='flex gap-4'>
  <div class="card w-full max-w-[33vw]">
    <div class="card-body flex flex-row justify-between w-full">
      <div class='w-full flex flex-col gap-4 justify-between w-full'>
        <h2 class="card-headline">HB</h2>
        <div>
          <div class='flex flex-col mb-2'>
            <label class='uppercase text-xs pb-0.5'>Start heating</label>
            <Badge rounded='medium' size='large' state='primary' label='15:00' />
          </div>
          <div class='flex flex-col'>
            <label class='uppercase text-xs pb-0.5'>Commence</label>
            <Badge rounded='medium' size='large' state='primary'>15:35</Badge>
          </div>
        </div>
      </div>
      <div class='w-full flex flex-col gap-1'>
        <label class='uppercase text-xs pb-1'>Heating times</label>

        <OptionLabel showQuantity option='{{ label: "Eggs", color: "yellow", quantity: 20 }}' />
        <OptionLabel showQuantity option='{{ label: "Congee", color: "blue", quantity: 20 }}' />
        <OptionLabel showQuantity option='{{ label: "Noodles", color: "green", quantity: 20 }}' />
      </div>
    </div>
  </div>
  <div class="card w-full max-w-[33vw]">
    <div class="card-body flex flex-row justify-between w-full">
      <div class='w-full flex flex-col justify-between w-full'>
        <h2 class="card-headline">WS</h2>
        <div>
          <div class='flex flex-col mb-2'>
            <label class='uppercase text-xs pb-0.5'>Start heating</label>
            <Badge rounded='medium' size='large' state='primary'>15:00</Badge>
          </div>
          <div class='flex flex-col'>
            <label class='uppercase text-xs pb-0.5'>Commence</label>
            <Badge rounded='medium' size='large' state='primary'>15:35</Badge>
          </div>
        </div>
      </div>
      <div class='w-full flex flex-col gap-1'>
        <label class='uppercase text-xs pb-1'>Heating times</label>

        <OptionLabel showQuantity option='{{ label: "Tuna", color: "pink", quantity: 20 }}' />
        <OptionLabel showQuantity option='{{ label: "Veggie", color: "green", quantity: 20 }}' />
      </div>
    </div>
  </div>
  <div class="card w-full max-w-[33vw]">
    <div class="card-body flex flex-row justify-between w-full">
      <div class='w-full flex flex-col justify-between w-full'>
        <h2 class="card-headline">LD</h2>
        <div>
          <div class='flex flex-col mb-2'>
            <label class='uppercase text-xs pb-0.5'>Start heating</label>
            <Badge rounded='medium' size='large' state='primary'>18:20</Badge>
          </div>
          <div class='flex flex-col'>
            <label class='uppercase text-xs pb-0.5'>Commence</label>
            <Badge rounded='medium' size='large' state='primary'>18:55</Badge>
          </div>
        </div>
      </div>
      <div class='w-full flex flex-col gap-1'>
        <label class='uppercase text-xs pb-1'>Heating times</label>

        <OptionLabel showQuantity option='{{ label: "Chicken", color: "yellow", quantity: 20 }}' />
        <OptionLabel showQuantity option='{{ label: "Beef", color: "red", quantity: 20 }}' />
        <OptionLabel showQuantity option='{{ label: "Pasta", color: "green", quantity: 20 }}' />
      </div>
    </div>
  </div>
</div>

<PageTitle title='Galleys' tabs='{CONFIGURATION.business.galleys}' direction='col' />

<slot />
</div>
