import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdFeaturedVideo } from "react-icons/md";
import "./TicketCard.css";

const TicketCardBody = ({title, tag}) => {
    return (
        <div className="ticket-card-body">
            <div className="ticket-card-title">
                <p>{title}</p>
            </div>

            <div className="ticket-tag-container">
                <div className="alert-icon border-curve">
                    <AiOutlineCheckCircle className="bg-color-icon" />
                </div>
                <div className="ticket-card-tag border-curve">
                    <MdFeaturedVideo className="bg-color-icon" />
                    <p className="tag-text">{tag}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketCardBody;