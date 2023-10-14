import { GroupingList } from "../../data/data";
import "../../App.css";

const GroupingDropDown = ({ selectedGrouping, groupHandler }) => {
    return (
        <div className="flex-container">
            <p>Grouping</p>
            <select
                className="select-element"
                name="group-select"
                onChange={(e) => groupHandler(e)}
                value={selectedGrouping}
            >
                {GroupingList.map((item) => (
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

export default GroupingDropDown;