<script>
  import '../global.css';
  import { page } from "$app/stores";
  import clsx from "clsx";
  import { Divider } from "$atoms";
  import {
    PlaneIcon,
    ListIcon,
    CakeIcon,
    RectangleGroupIcon,
    ClipboardIcon,
    ArrowsSquare
  } from "$atoms/icons";
  import { IPad } from "$templates";
</script>

<IPad>
<div id='app' data-theme="dark" class='scrollbar flex w-full bg-gradient-to-tr from-base-200/30 via-200/50 to-base-200/20'>
  <div class='p-1 flex flex-col items-center justify-center sticky top-0'>
  <nav class='w-fit flex h-fit flex-col gap-2 justify-between bg-base-300 p-1 rounded-xl'>
    <ul>
      <li class={clsx($page.url.pathname === '/' && "bg-primary text-primary-content")}><a href='/'><PlaneIcon /></a></li>
      <li class={clsx($page.url.pathname.includes('positions') && "bg-primary text-primary-content")}><a  href='/positions'><ListIcon /></a></li>

      <Divider />

      <li class={clsx($page.url.pathname.includes('/business/meals') && "bg-primary text-primary-content")}><a href='/business/meals/FWD'><CakeIcon /></a></li>
      <li class={clsx($page.url.pathname.includes('/business/zones') && "bg-primary text-primary-content")}><a href='/business/zones'><RectangleGroupIcon /></a>
      </li>

      <!-- This is supposed to be: first zone, first position-> zones, position [0]   -->
      <li class={clsx($page.url.pathname.includes('/business/seat-chart') && "bg-primary text-primary-content")}><a href='/business/seat-chart/FWD/L1'><ClipboardIcon /></a></li>
      <Divider />

      <li class={clsx($page.url.pathname.includes('/economy/meals') && "bg-primary text-primary-content")}><a href='/economy/meals/MID'><CakeIcon /></a></li>
      <li class={clsx($page.url.pathname.includes('/economy/zones') && "bg-primary text-primary-content")}><a href='/economy/zones/HB'><RectangleGroupIcon /></a></li>
      <li class={clsx($page.url.pathname.includes('/economy/360') && "bg-primary text-primary-content")}><a href='/economy/360/MID'><ArrowsSquare /></a></li>
    </ul>
  </nav>

  </div>

  <div class='p-4 h-full min-h-full w-full relative'>
    <slot />
  </div>
</div>
</IPad>


