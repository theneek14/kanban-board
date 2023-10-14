import { priorityMap } from "../data/data";

export const groupHandlerUtil = (
    element,
    setShowFilterContainer,
    setSelectedGrouping,
    setLocalStorageItem,
    setDisplayState,
    tickets,
    getNameById,
    groupTicketsByProperty,
) => {
    setShowFilterContainer(false);
    setSelectedGrouping(element.target.value);
    setLocalStorageItem("selectedgrouping", element.target.value);
    if (element.target.value === "user") {
        const ticketsGroupedByName = groupTicketsByProperty(
            "userId",
            tickets
        );
        Object.keys(ticketsGroupedByName).forEach(function (key) {
            var newkey = getNameById(key);
            ticketsGroupedByName[newkey] = ticketsGroupedByName[key];
            delete ticketsGroupedByName[key];
        });

        setDisplayState(ticketsGroupedByName);
        setLocalStorageItem("currentstate", ticketsGroupedByName);
    } else if (element.target.value === "status") {
        const ticketsGroupedByStatus = groupTicketsByProperty(
            "status",
            tickets
        );
        setDisplayState(ticketsGroupedByStatus);
        setLocalStorageItem("currentstate", ticketsGroupedByStatus);
    } else if (element.target.value === "priority") {
        const ticketsGroupedByPriority = groupTicketsByProperty(
            "priority",
            tickets
        );

        Object.keys(ticketsGroupedByPriority).forEach(function (key) {
            var newkey = priorityMap[key];
            ticketsGroupedByPriority[newkey] =
                ticketsGroupedByPriority[key];
            delete ticketsGroupedByPriority[key];
        });
        setDisplayState(ticketsGroupedByPriority);
        setLocalStorageItem("currentstate", ticketsGroupedByPriority);
    }
};