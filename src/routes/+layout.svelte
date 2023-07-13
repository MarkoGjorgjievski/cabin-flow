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
  import IPad from "../lib/components/templates/ipad/IPad.svelte";
</script>

<IPad>
<div id='app' data-theme="cupcake" class='scrollbar flex w-full'>
  <nav class='w-fit sticky top-0 flex h-full flex-col gap-2 justify-between bg-base-200 p-2'>
    <div class='pt-2'>
        <a class='flex flex-col leading-0 text-xs text-center items-center font-medium text-primary' href='/'>
          <p>Cabin</p>
          <p>Flow&trade;</p>
        </a>
    </div>
    <ul>
      <li class={clsx($page.url.pathname === '/' && "bg-primary text-primary-content")}><a href='/'><PlaneIcon /></a></li>
      <li class={clsx($page.url.pathname.includes('positions') && "bg-primary text-primary-content")}><a  href='/positions'><ListIcon /></a></li>

      <Divider />

      <li class={clsx($page.url.pathname.includes('/business/meals') && "bg-primary text-primary-content")}><a href='/business/meals/FWD'><CakeIcon /></a></li>
      <li class={clsx($page.url.pathname.includes('/business/zones') && "bg-primary text-primary-content")}><a href='/business/zones/FWD'><RectangleGroupIcon /></a>
      </li>

      <!-- This is supposed to be: first zone, first position-> zones, position [0]   -->
      <li class={clsx($page.url.pathname.includes('/business/seat-chart') && "bg-primary text-primary-content")}><a href='/business/seat-chart/FWD/L1'><ClipboardIcon /></a></li>
      <Divider />

      <li class={clsx($page.url.pathname.includes('/economy/meals') && "bg-primary text-primary-content")}><a href='/economy/meals/MID'><CakeIcon /></a></li>
      <li class={clsx($page.url.pathname.includes('/economy/zones') && "bg-primary text-primary-content")}><a href='/economy/zones/HB'><RectangleGroupIcon /></a></li>
      <li class={clsx($page.url.pathname.includes('/economy/360') && "bg-primary text-primary-content")}><a href='/economy/360'><ArrowsSquare /></a></li>
    </ul>
    <ul>
      <li><a>
<!--        <ThemeSwitcher />-->
      </a></li>
    </ul>
  </nav>

  <div class='p-4 h-full min-h-full bg-base-200/10 w-full relative'>
    <slot />
  </div>
</div>
</IPad>
