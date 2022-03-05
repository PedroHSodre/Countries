import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {BsSun, BsFillMoonFill} from 'react-icons/bs';
import {Container} from './styles';

const SwichLigth = ({handleChangeLight}) => {
    const { title } = useContext(ThemeContext);

    return (
        <Container>
            <div style={{marginRight: '10px', cursor: 'pointer'}}>
                {title === 'Dark' ? <BsFillMoonFill onClick={handleChangeLight} size={24}/> : <BsSun onClick={handleChangeLight} size={24} />}    
            </div>
            <div>
                {title} mode
            </div>
        </Container>
    )
};

export default SwichLigth;
