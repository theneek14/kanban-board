import { useState } from "react";
import Board from "./components/Board/Board";
import { GroupingList, OrderingList, priorityMap } from "./data/data";
import { FiSettings } from "react-icons/fi";

import "./App.css";

import { useEffect } from "react";
import { ordering, groups } from "./constants/constants";
import { getLocalStorageItem } from "./helpers/localStorage";
import { setLocalStorageItem } from "./helpers/localStorage";
import { fetchKanbanData } from "./services/fetchKanbanData";
import { orderHandlerUtil } from "./utilities/orderHandlerUtil";
import { groupHandlerUtil } from "./utilities/groupHandlerUtil";
import { groupTicketsByProperty } from "./utilities/groupTicketsByProperty";
import GroupingDropDown from "./components/DropDown/GroupingDropDown";
import OrderingDropDown from "./components/DropDown/OrderingDropDown";

function App() {
    const [tickets, setTickets] = useState();
    const [users, setUsers] = useState();
    const [selectedGrouping, setSelectedGrouping] = useState(() => {
        const storedState = getLocalStorageItem("selectedgrouping");
        return storedState ? storedState : groups.STATUS;
    });
    const [selectedOrdering, setSelectedOrdering] = useState(() => {
        const storedState = getLocalStorageItem("selectedordering");
        return storedState ? storedState : ordering.PRIORITY;
    });
    const [displayState, setDisplayState] = useState(() => {
        const storedState = getLocalStorageItem("currentstate");
        return storedState ? storedState : [];
    });
    const [showFilterContainer, setShowFilterContainer] = useState(false);
    function getNameById(id) {
        const foundUser = users.find((u) => u.id === id);
        return foundUser ? foundUser.name : "User not found";
    }

    const displayBoard = () => (
        Object.keys(displayState).map((data) => {
            return (
                <Board
                    header={data}
                    tickets={displayState[data]}
                    key={data}
                />
            );
        })
    );

    useEffect(() => {
        const loadKanbanData = async () => {
            try {
                const results = await fetchKanbanData();
                // Now you can use the 'results' data here
                setTickets(results.tickets);
                setUsers(results.users);
            } catch (error) {
                // Handle the error if necessary
                console.error("Error loading kanban data:", error);
            }
        };
        loadKanbanData();
    }, []);

    useEffect(() => {
        if (tickets === undefined) return;
        if (displayState.length === 0) {
            const ticketsGroupedByStatus = groupTicketsByProperty(
                "status",
                tickets
            );
            setDisplayState(ticketsGroupedByStatus);
            setLocalStorageItem("currentstate", ticketsGroupedByStatus);
        }
    }, [tickets]);

    const groupHandler = (element) => {
        groupHandlerUtil(
            element,
            setShowFilterContainer,
            setSelectedGrouping,
            setLocalStorageItem,
            setDisplayState,
            tickets,
            getNameById,
            groupTicketsByProperty
        );
    };

    const orderHandler = (element) => {
        orderHandlerUtil(
            element,
            setShowFilterContainer,
            setSelectedOrdering,
            setLocalStorageItem,
            displayState,
            setDisplayState
        );
    };

    return (
        <article>
            <header>
                <div className="select-container">
                    <div
                        className="display-button border-curve pointer"
                        onClick={() => {
                            setShowFilterContainer((prev) => !prev);
                        }}
                    >
                        <FiSettings />
                        <p>Display</p>
                    </div>
                    {showFilterContainer ? (
                        <div className="select-popup border-curve">
                            <GroupingDropDown 
                                selectedGrouping={selectedGrouping}
                                groupHandler={groupHandler}
                            />

                            <OrderingDropDown 
                                selectedOrdering={selectedOrdering}
                                orderHandler={orderHandler}
                            />
                        </div>
                    ) : null}
                </div>
            </header>
            <main className="main-container">
                <div className="board-grid-container">
                    <div className="board-grid-inner">
                        {displayBoard()}
                    </div>
                </div>
            </main>
        </article>
    );
}

export default App;
