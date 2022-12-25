import React from "react";

const Scroll = (props) => {
    return (
        <div className="overflow-scroll h-screen scroll">
            {props.children}
        </div>
    )
}

export default Scroll