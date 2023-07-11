<script>
  import London from '$lib/assets/images/london.jpg'
  import UKFlag from '$lib/assets/images/UKFlag.png'
</script>

<div class="card h-fit w-full overflow-hidden image-full" data-theme="light">
  <figure><img alt='city' src='{London}' /></figure>
  <div class="card-body">
    <div class='flex justify-between h-full'>
      <div class='h-full flex flex-col justify-between'>
        <div>
          <h5 class="card-title mb-2">Station Information</h5>
          <h2 class="card-headline">London</h2>
          <p>United Kingdom</p>
          <div class='w-12 mt-0.5'>
            <img alt='flag' src='{UKFlag}' />
          </div>
        </div>

        <div>
          <p class='text-xl'>Heathrow Airport</p>
          <h5 class="card-title">Terminal 1</h5>
        </div>

        <div>
          <h5 class="card-title">Hotel Information</h5>
          <p class='text-xl'>Sheraton Hotel, Heathrow Area</p>
        </div>
      </div>

      <div class='text-right'>
        <h5 class="card-title">Partly Cloudy</h5>
        <h2 class="card-headline mt-2">18&deg;C</h2>

        <h2 class="text-xl my-4">UTC +1</h2>
      </div>
    </div>
  </div>
</div>
