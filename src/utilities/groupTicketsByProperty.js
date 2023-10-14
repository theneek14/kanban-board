export const groupTicketsByProperty = (property, state) => {
    const groupedTickets = {};

    state.forEach((ticket) => {
        const value = ticket[property];
        if (!groupedTickets[value]) {
            groupedTickets[value] = [];
        }
        groupedTickets[value].push(ticket);
    });

    return groupedTickets;
};