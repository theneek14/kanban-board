import "./TicketCard.css";

const TicketCardHeader = ({id, profileURL, status}) => {
    return (
        <div className="ticket-card-header">
            <p className="header-id">{id}</p>
            {profileURL ? (
                <div className="ticket-avatar-container">
                    <div className="ticket-image-container">
                        <img
                            src={profileURL}
                            className="image"
                            alt="theneek14"
                        />
                    </div>

                    <span
                        className={`ticket-avatar-badge ${
                            status === true ? "available" : ""
                        }`}
                    ></span>
                </div>
            ) : null}
        </div>
    );
};

export default TicketCardHeader;