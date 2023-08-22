import { generatePassengers, getZonesByPosition, passengerLoad, passengerSeatingConfig, seatingConfig, splitArrayDataByMaxLength, zoneConfig } from "./useZone"

/**  Consider this approach  **/

export const useConfig = (configuration) => {
    const cabin = (configuration) => {
        const seating = seatingConfig(configuration)
        const passengerList = generatePassengers(configuration, seating)
        const load = passengerLoad(passengerList)

        const passengerSeating = passengerSeatingConfig(configuration, seating, passengerList)

        // const zonesSplitByQuantity = splitArrayDataByMaxLength(passengerSeating)
        // const zones = zoneConfig(zonesSplitByQuantity);
        // const zoneRows = getZonesByPosition(configuration, zones);

        return {
            seating,
            passengerList,
            load,

            // zonesSplitByQuantity,
            // zones,
            // zoneRows
        }
    }

    const economy = cabin(configuration.economy);
    const business = cabin(configuration.business);

    return {
        economy,
        business,
    }
}
