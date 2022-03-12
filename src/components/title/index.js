import React from "react";
import { Container} from './styles.js';
const Title = ({children}) => {
    return (
        <Container className="title">
            {children}
        </Container>
    );
};

export default Title;