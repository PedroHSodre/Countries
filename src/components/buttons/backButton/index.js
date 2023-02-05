import React from "react";
import { Button } from "../globalButtonStyle";

const BackButton = ({handleClick}) => {

    return (
        <Button onClick={() => handleClick()}>
            Voltar
        </Button>
    )
};

export default BackButton;