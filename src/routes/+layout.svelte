<script>
  import '../app.css';
  import PlaneIcon from "../lib/components/atoms/icons/PlaneIcon.svelte";
</script>

<nav class='h-screen w-fit fixed top-0 flex h-full flex-col gap-2 justify-between bg-base-200 p-2'>
  <ul>
    <li><a href='/'><PlaneIcon /></a></li>
  </ul>
  <ul>
    <li><a href='/'><PlaneIcon /></a></li>
    <li>
      <a href='/positions'>
        <PlaneIcon />
      </a>
    </li>

    <!--    <Divider />-->
    <hr />

    <li>
      <a href='/business/meals/FWD'>
        <PlaneIcon />
      </a>
    </li>
    <li>
      <a href='/business/zones/FWD'>
        <PlaneIcon />
      </a>
    </li>
    <!-- This is supposed to be: first zone, first position -> zones, position [0]   -->
    <li>
      <a href='/business/seat-chart/FWD/left'>
        <PlaneIcon />
      </a>
    </li>

    <!--    <Divider />-->
    <hr />

    <li>
      <a href='/economy/meals/options'>
        <PlaneIcon />
      </a>
    </li>
    <li>
      <a href='/economy/zones/service'>
        <PlaneIcon />
      </a>
    </li>
    <li>
      <a href='/economy/360'>
        <PlaneIcon />
      </a>
    </li>
  </ul>

  <ul>
    <li>
      <a><PlaneIcon /></a>
    </li>
    <!--    <ThemeSwitcher />-->
  </ul>
</nav>

<div class='ml-16 p-4 h-full min-h-full bg-base-200/10'>
  <slot />
</div>
