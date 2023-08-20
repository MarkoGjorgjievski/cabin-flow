<script>
  import { passengerLoad } from "$lib/stores/economy";
  import { businessPassengerLoad } from "$lib/stores/business";
</script>

<div class="card w-full border border-base-300 overflow-hidden">
  <div class="card-body">
<!--    <h5 class="card-title">Passenger Information</h5>-->
    <table class="table table-pin-rows rounded-lg overflow-hidden">
      <!-- head -->
      <thead>
      <tr>
        <th>Cabin</th>
        <th>JC</th>
        <th>EY</th>
      </tr>
      </thead>
      <tbody>

      <tr>
        <th>Infants</th>
        <td>1</td>
        <td>4</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>Children</th>
        <td>0</td>
        <td>6</td>
      </tr>
      <!-- row 4 -->
      <tr>
        <th>WCR</th>
        <td>0</td>
        <td>1</td>
      </tr>
      </tbody>
      <thead>
      <tr>
        <th>Privilege Club</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>Silver</th>
        <td>0</td>
        <td>8</td>
      </tr>
      <tr>
        <th>Gold</th>
        <td>1</td>
        <td>3</td>
      </tr>
      <tr>
        <th>Platinum</th>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <th>Emerald</th>
        <td>2</td>
        <td>0</td>
      </tr>
      </tbody>
      <thead>
      <tr>
        <th>Load</th>
        <th>{$businessPassengerLoad}</th>
        <th>{$passengerLoad}</th>
      </tr>
      </thead>
      <thead>
      <tr class='border-none'>
        <th>Capacity</th>
        <th>42</th>
        <th>293</th>
      </tr>
      </thead>
    </table>
  </div>
</div>
