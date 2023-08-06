<script>
    import { Button } from "$atoms";
    import { useZone } from "$hooks/useZone";
    import { ArrowSmallUp, ArrowSmallDown } from "$icons";
    import { Seat } from "$molecules";
    import clsx from "clsx";
    import { getContext } from "svelte";

    export let meal
    export let cabin = 'economy';

    const config = getContext('config');
    const { splitArrayDataByMaxLength, passengerSeating } = useZone(config);

    let zones = splitArrayDataByMaxLength(passengerSeating)

    const handleZoneShift = (direction, zone) => {
        zones = splitArrayDataByMaxLength(passengerSeating, 50)
    }
</script>

<div class='relative'>
    <div class='w-full flex flex-col sticky top-4 gap-1'>
        {#if zones}
        {#each zones as zone, i}
        <div class={clsx('flex flex-col gap-1 p-1 rounded-md border border-secondary relative', i == 0 && 'pb-6', i == zones.length - 1 && 'pt-6', i > 0 && i < zones.length - 1 && 'py-6')}>
            {#if i > 0}
            <span class='absolute top-0 left-1/2 -translate-x-1/2'>
                <Button size='smaller' state='ghost' on:click={() => handleZoneShift('up', i)}><ArrowSmallUp size={4} /></Button>
            </span>
            {/if}
            {#each zone as side, j}
            <div class='w-fit flex gap-1'>
                {#each side as row, k}
                    <div class='w-fit flex'>
                        <div class='flex w-fit gap-1'>
                            {#each row as seat}
                                <Seat seat={seat.seat} cabin='{cabin}' />
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
            {/each}
            {#if i !== zones.length - 1}
            <span class='absolute bottom-0 left-1/2 -translate-x-1/2'>
                <Button size='smaller' state='ghost' on:click={() => handleZoneShift('down', i)}><ArrowSmallDown size={4} /></Button>
            </span>
            {/if}
        </div>
        {/each}
        {/if}
    </div>
</div>
