import { React, useState } from "react";

function Button({ name, classSelection, handleClassSelection }) {

    return (
        <button className={classSelection === name ? "selected" : ""} onClick={() => handleClassSelection(name)}>{name}</button>
    )
}

export default Button;