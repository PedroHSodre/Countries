import React from "react";
import { Button } from "../globalButtonStyle";

const BackButton = ({setCountryDetail}) => {

    return (
        <Button onClick={() => setCountryDetail({})}>
            Back
        </Button>
    )
};

export default BackButton;