<script>
  import '../app.css';
  import { page } from "$app/stores";
  import { tick } from "svelte";
  import Divider from "../lib/components/atoms/Divider.svelte";
  import {
    LogoIcon,
    PlaneIcon,
    ListIcon,
    CakeIcon,
    RectangleGroupIcon,
    ClipboardIcon, ArrowsSquare
  } from "../lib/components/atoms/icons";
</script>

<nav class='h-screen w-fit fixed top-0 flex h-full flex-col gap-2 justify-between bg-base-200 p-2'>
  <ul>
    <li><a href='/'><LogoIcon /></a></li>
  </ul>
  <ul>
    <li class:bg-primary={$page.url.pathname === '/'}><a href='/'><PlaneIcon /></a></li>
    <li class:bg-primary={$page.url.pathname.includes('positions')}><a  href='/positions'><ListIcon /></a></li>

    <Divider />

    <li class:bg-primary={$page.url.pathname.includes('/business/meals')}><a href='/business/meals/FWD'><CakeIcon /></a></li>
    <li class:bg-primary={$page.url.pathname.includes('/business/zones')}><a href='/business/zones/FWD'><RectangleGroupIcon /></a>
    </li>

    <!-- This is supposed to be: first zone, first position-> zones, position [0]   -->
    <li class:bg-primary={$page.url.pathname.includes('/business/seat-chart')}><a href='/business/seat-chart/FWD/left'><ClipboardIcon /></a></li>

    <Divider />

    <li class:bg-primary={$page.url.pathname.includes('/economy/meals')}><a href='/economy/meals/options'><CakeIcon /></a></li>
    <li class:bg-primary={$page.url.pathname.includes('/economy/zones')}><a href='/economy/zones/service'><RectangleGroupIcon /></a></li>
    <li class:bg-primary={$page.url.pathname.includes('/economy/360')}><a href='/economy/360'><ArrowsSquare /></a></li>
  </ul>

  <ul>
    <li><a><PlaneIcon /></a></li>
    <!--    <ThemeSwitcher />-->
  </ul>
</nav>

<div class='ml-16 p-4 h-full min-h-full bg-base-200/10'>
  <slot />
</div>
