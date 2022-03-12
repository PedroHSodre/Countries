import styled from "styled-components";

export const Container = styled.div`
`

export const Select = styled.select`
    width: 100%;
    background-color: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    padding: 15px 20px;
    width: 170px;
    border: none;
    outline: none;
    font-weight: ${props => props.theme.fonts.subtitle.fontWeight};
    
    @media(max-width: 450px){
        width: 125px;
    }
`