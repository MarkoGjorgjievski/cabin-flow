<script>
  import { Card, StationInfoCard } from "$molecules";
  import { CrewInfoList, PassengerInfoTable } from "$organisms";
</script>

<h1 class='py-4'>Flight Information</h1>

<div class='flex flex-col gap-4 h-fit pb-4'>
  <div class='flex gap-4'>
    <Card title='B787-8' headline='QR 001' subtitle='7h 35min' className='shadow-border' />
    <Card title='07:00,  21.07.23' headline='DOH' subtitle='Doha, Qatar' className='shadow-border' />
    <Card title='16:00,  21.07.23' headline='LHR' subtitle='London, UK' className='shadow-border' />
  </div>

  <div class='flex gap-4'>
    <div class='flex flex-col gap-4 w-full'>
      <PassengerInfoTable />
    </div>
    <div class='flex flex-col gap-4 w-full'>
      <StationInfoCard />
      <CrewInfoList />
    </div>
  </div>
</div>
