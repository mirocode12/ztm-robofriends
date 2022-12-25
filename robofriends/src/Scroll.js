import React from "react";

const Scroll = (props) => {
    return (
        <div className="overflow-scroll h-screen">
            {props.children}
        </div>
    )
}

export default Scroll