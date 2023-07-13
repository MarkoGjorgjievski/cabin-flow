<script>
  export let details
  export let position
</script>

<div class='flex items-center w-full'>
  <img class='w-16 h-16 rounded-full' src='https://travellersworldwide.com/wp-content/uploads/2023/02/Shutterstock_1765167053.jpg' alt='cabin crew' />
  <div class='flex flex-col w-full p-4'>
    <h3>{details.firstName} {details.lastName}</h3>
    <span>{#each details.languages as lang}{lang}{/each}</span>
  </div>
  <div class='flex flex-col items-end p-4'>
    <h3>{details.id}</h3>
    <span>{position}</span>
  </div>
</div>
