import "./Board.css";
import { BiPlusCircle } from "react-icons/bi";
import { BiDotsHorizontal } from "react-icons/bi";
import { SiQuasar } from "react-icons/si";

const BoardHeader = ({tickets, header}) => {
    return (
        <div className="board-header">
            <div>
                <div className="flex-gap">
                    <SiQuasar className="bg-color-status-icon" />
                    <p>{header}</p>
                    <span>{tickets.length}</span>
                </div>
            </div>

            <div className="flex-gap">
                <BiPlusCircle className="bg-color-icon" />
                <BiDotsHorizontal className="bg-color-icon" />
            </div>
        </div>
    );
};

export default BoardHeader;
