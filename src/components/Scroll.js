import React from "react";

const Scroll = (props) => {
    return (
        <div className="overflow-scroll scroll rounded-sm h-screen">
            {props.children}
        </div>
    )
}

export default Scroll