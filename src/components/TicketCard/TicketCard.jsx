import "./TicketCard.css";
import TicketCardHeader from "./TicketCardHeader";
import TicketCardBody from "./TicketCardBody";

const TicketCard = ({ id, profileURL, status, title, tag }) => {
    return (
        <div className="ticket-card-container border-curve">
            <TicketCardHeader 
                id={id}
                profileURL={profileURL}
                status={status}
            />

            <TicketCardBody 
                title={title}
                tag={tag}
            />
        </div>
    );
};

export default TicketCard;
