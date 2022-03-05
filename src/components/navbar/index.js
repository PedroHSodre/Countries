import React from "react";
import SwichLigth from "../swichLigth";
import Title from "../title";

import { Container } from './styles.js'

const Navbar = ({handleChangeLight}) => {
   return (
        <Container>
            <Title>
                Where in the world?
            </Title>
            <SwichLigth handleChangeLight={handleChangeLight} />
        </Container>
    )
};

export default Navbar;