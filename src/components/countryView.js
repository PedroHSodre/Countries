import React from "react";

const CountryView = ({country}) => {
    return (
        <div>
            <img src={country.image} alt={'Country Flag'} />
            {country.name}
        </div>
    )
};

export default CountryView;
