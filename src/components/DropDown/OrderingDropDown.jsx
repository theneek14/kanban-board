import { OrderingList } from "../../data/data";
import "../../App.css";

const OrderingDropDown = ({ selectedOrdering, orderHandler }) => {
    return (
        <div className="flex-container">
            <p>Ordering</p>
            <select
                className="select-element"
                name="group-select"
                onChange={(e) => orderHandler(e)}
                value={selectedOrdering}
            >
                {OrderingList.map((item) => (
                    <option
                        value={item}
                        label={item}
                        key={item}
                    />
                ))}
            </select>
        </div>
    );
};

export default OrderingDropDown;