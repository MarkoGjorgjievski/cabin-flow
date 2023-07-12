<script>
  import { SeatingMap } from "../../../lib/components/organisms";
</script>

<h1>Zones</h1>

<ul>
  <li>
    <a href='FWD'>FWD</a>
    <a href='AFT'>AFT</a>
  </li>
</ul>

<div class='grid grid-cols-3'>
  <h1>Right</h1>
  <h2>Seats</h2>
  <h1>Left</h1>
</div>

<div>
<SeatingMap />
</div>
<slot />
