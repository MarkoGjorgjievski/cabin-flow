<script>
import { onMount } from 'svelte';
import { register } from 'swiper/element/bundle';
import { enhance, applyAction } from '$app/forms';
import { page } from '$app/stores';
import 'swiper/css';
import {
  businessMealQuantity,
  totalBusinessMealsPerOption,
} from '$lib/stores/businessMeals.js';
import { Divider, Button, Toggle } from '$atoms';
import { MealListItem } from '$organisms';

export let data;

onMount(() => register());
let container;
$: container?.initialize();

let showDescription = false;
let editMode = false;

const updateCount = (count, galley, i, j, k) => {
  if (galley !== 'total') {
    $businessMealQuantity[galley][i][j][k] = count;
  }
};

$: data.galley === 'total' && (editMode = false);
</script>

<div>
  <div class="flex justify-between w-full">
    <h2 class="capitalize">{data.galley}</h2>
    {#if editMode}
      <Button state="primary" on:click="{() => (editMode = false)}">Stop editing</Button>
    {:else}
      <Button state="ghost" disabled="{data.galley === 'total'}" on:click="{() => (editMode = true)}"
        >Edit quantity</Button>
    {/if}
  </div>

  <div class="flex justify-end mt-1">
    <Toggle bind:checked="{showDescription}" labelOff="Meal description" />
  </div>

  <div class="w-[926px] pb-4">
    <swiper-container
      class="horizontal-swiper h-auto"
      pagination="true"
      space-between="16"
      auto-height="true"
      bind:this="{container}"
      init="false">
      {#each data.food as service, i (service)}
        <swiper-slide class="h-fit pb-10">
          <div class="h-fit min-h-[540px]">
            <h6 class="text-xs font-medium uppercase pl-1 py-4">{service.label}</h6>
            {#each service.categories as category, j (category)}
              <h2 class="pl-1 font-normal pb-4">{category.label}</h2>
              <div class="flex flex-wrap w-full gap-4">
                {#each category.options as option, k (option)}
                  <MealListItem
                    option="{option}"
                    showDescription="{showDescription}"
                    editMode="{editMode}"
                    count="{data.galley === 'total'
                      ? $totalBusinessMealsPerOption[i][j][k]
                      : $businessMealQuantity[data.galley][i][j][k]}"
                    i="{i}"
                    j="{j}"
                    k="{k}"
                    updateCount="{updateCount}"
                    galley="{data.galley}" />
                {/each}
              </div>
              <Divider lastHidden />
            {/each}
          </div>
        </swiper-slide>
      {/each}
    </swiper-container>
  </div>
</div>
