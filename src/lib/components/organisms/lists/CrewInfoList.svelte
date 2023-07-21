<script>
  import { CREW } from "$lib/constants";
  import { CrewInfoListItem } from "$organisms";

  const { F1, F2, ...restCrew } = CREW
</script>

<div class='card w-full border border-base-300 overflow-hidden'>
  <div class='card-body'>
<!--    <h5 class='card-title'>Crew compliment</h5>-->

    <ul class='w-full divide-y divide-base-100 border-b border-base-100'>
      {#each Object.entries(restCrew) as [position, value]}
        {#each value as details}
          <li>
            <CrewInfoListItem {position} {details} />
          </li>
        {/each}
      {/each}
    </ul>
  </div>

  <a href='/positions' class='w-full pb-4 text-center link'>See all</a>
</div>
