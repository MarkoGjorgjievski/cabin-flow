<script>
  import { SERVICE_TYPES, MENU } from "$lib/constants";
  import { DndCopy, ServiceTabs, ServiceTypeSwitch } from "$organisms";

  const { FOOD, DRINKS } = SERVICE_TYPES;

  let activeType = FOOD;
  let activeTab = Object.keys(MENU.business[activeType])[0];
  let activeSubTab = Object.values(Object.values(MENU.business[activeType])[0])[0].label;
  let options = Object.values(Object.values(MENU.business[activeType])[0])[0].options;

  const onTypeClick = type => {
    activeType = type;
    activeTab = Object.keys(MENU.business[type])[0];
    activeSubTab = Object.values(MENU.business[activeType][activeTab])[0].label;
    options = Object.values(MENU.business[activeType][activeTab])[0].options;
  };

  const onKeyClick = (key) => {
    activeTab = key;
    activeSubTab = Object.values(MENU.business[activeType][key])[0].label;
    options = Object.values(MENU.business[activeType][key])[0].options;
  };

  const onValueClick = type => {
    options = type.options;
    activeSubTab = type.label;
  };

  function handleDndConsider(e) {
    console.log(e);
  }

  function handleDndFinalize(e) {
    console.log(e);
  }
</script>


<div class='flex flex-col gap-2 sticky bottom-4 mt-6'>
  <div class='w-full flex justify-end'>
    <div class='overflow-x-auto gap-2 bg-base-200 bg-opacity-40 backdrop-blur px-1  py-0.5 rounded-md'>
      <DndCopy className='flex gap-2 w-full' dropFromOthersDisabled='{true}' items='{options}' type='{activeType}' />
    </div>
  </div>

  <div class='flex items-center justify-between gap-2'>
    <div class='flex gap-4 items-center'>
      <ServiceTypeSwitch
        {activeTab}
        {activeType}
        {onKeyClick}
        onTypeClick='{() => onTypeClick(activeType === FOOD ? DRINKS : FOOD)}'
      />
    </div>

    <ServiceTabs
      {activeType}
      {activeTab}
      {activeSubTab}
      onClick='{onValueClick}'
    />
  </div>
</div>
