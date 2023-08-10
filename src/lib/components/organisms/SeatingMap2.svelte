<script>
    import clsx from "clsx";
    import { Button } from "$atoms";
    import { ChevronDown, ChevronUp } from "$icons";
    import { Seat } from "$molecules";

    export let meal
    export let zones
    export let cabin = 'economy';

    const handleZoneShift = (direction, zone) => {
        console.log(direction, zones)
    }
</script>

<div class='relative'>
    <div class='w-full flex flex-col sticky top-4 gap-1'>
        {#if zones}
        {#each zones as zone, i}
        <div class={clsx('flex flex-col gap-1 p-2 rounded-xl border relative bg-opacity-5', i % 2 === 0 ? 'bg-info border-info/40' : 'bg-secondary border-secondary/40', i == 0 && 'mb-6', i == zones.length - 1 && 'mt-6', i > 0 && i < zones.length - 1 && 'my-6')}>
            {#if i > 0}
            <span class='absolute -top-6 left-1/2 -translate-x-1/2 {i % 2 === 0 ? 'text-info' : 'text-secondary'}'>
                <Button size='smaller' state='ghost' on:click={() => handleZoneShift('up', i)}><ChevronUp size={4} /></Button>
            </span>
            {/if}
            {#each zone as side, j}
            <div class='w-fit flex gap-1'>
                {#each side as row, k}
                    <div class='w-fit flex'>
                        <div class='flex w-fit gap-1'>
                            {#each row as seat}
                                <Seat seat={seat.seat} passenger={seat.passenger} cabin='{cabin}' />
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
            {/each}
            {#if i !== zones.length - 1}
            <span class='absolute -bottom-6 left-1/2 -translate-x-1/2 {i % 2 === 0 ? 'text-info' : 'text-secondary'}'>
                <Button size='smaller' state='ghost' on:click={() => handleZoneShift('down', i)}><ChevronDown size={4} /></Button>
            </span>
            {/if}
        </div>
        {/each}
        {/if}
    </div>
</div>
