import "./Board.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { SiInstatus } from "react-icons/si";

const BoardHeader = ({tickets, header}) => {
    return (
        <div className="board-header">
            <div>
                <div className="flex-gap">
                    <SiInstatus className="bg-color-status-icon" />
                    <p>{header}</p>
                    <span>{tickets.length}</span>
                </div>
            </div>

            <div className="flex-gap">
                <AiOutlinePlus className="bg-color-icon" />
                <BiDotsHorizontalRounded className="bg-color-icon" />
            </div>
        </div>
    );
};

export default BoardHeader;