export const orderHandlerUtil = (
    element,
    setShowFilterContainer,
    setSelectedOrdering,
    setLocalStorageItem,
    displayState,
    setDisplayState
) => {
    setShowFilterContainer(false);
    setSelectedOrdering(element.target.value);
    setLocalStorageItem("selectedordering", element.target.value);
    if (element.target.value === "priority") {
        const sortTasksByPriority = (tasks) => {
            return tasks.slice().sort((a, b) => b.priority - a.priority);
        };

        const sortedData = {};

        for (const userName in displayState) {
            const userTasks = displayState[userName];
            const sortedTasks = sortTasksByPriority(userTasks);
            sortedData[userName] = sortedTasks;
        }

        setDisplayState(sortedData);
        setLocalStorageItem("currentstate", sortedData);
    } else if (element.target.value === "title") {
        const sortTasksByTitleAscending = (tasks) => {
            return tasks
                .slice()
                .sort((a, b) => a.title.localeCompare(b.title));
        };

        const sortedData = {};

        for (const userName in displayState) {
            const userTasks = displayState[userName];
            const sortedTasks = sortTasksByTitleAscending(userTasks);
            sortedData[userName] = sortedTasks;
        }
        setDisplayState(sortedData);
        setLocalStorageItem("currentstate", sortedData);
    }
};