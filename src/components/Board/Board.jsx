/* eslint-disable react/prop-types */
import Card from "../TicketCard/TicketCard";
import BoardHeader from "./BoardHeader";
import "./Board.css";
import { profileImageUrl }  from "../../constants/constants";

const Board = ({ tickets, header }) => {
    const renderTickets = () => (
        tickets.map((ticket) => (
            <Card
                key={ticket.id}
                id={ticket.id}
                profileURL={profileImageUrl}
                status={ticket.status}
                title={ticket.title}
                tag={ticket.tag[0]}
            />
        ))
    );
    return (
        <div className="board-container">
            <BoardHeader 
                tickets={tickets}
                header={header}
            />

            <div className="board-body">
                {renderTickets()}
            </div>
        </div>
    );
}

export default Board;
