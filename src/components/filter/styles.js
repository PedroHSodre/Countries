import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
`

export const Select = styled.select`
    border-radius: 4px;
    background-color: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    padding: 15px 20px;
    width: 100%;
    border: none;
    outline: none;
    font-weight: ${props => props.theme.fonts.subtitle.fontWeight};
    
    @media(max-width: 450px){
        width: 125px;
    }
`