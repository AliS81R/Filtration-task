import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valueProperty, contantProperty, onItemSelect, selectedItem }) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map(item => (
                <li key={items[item][valueProperty]}
                    className={"list-group-item" + (items[item] === selectedItem ? " active" : "")}>
                    onClick={() => onItemSelect(items[item])}
                    role="button"
                    {items[item][contantProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contantProperty: "name"
}
GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    contantProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object.isRequired
};

export default GroupList;