import styled from "styled-components";

export const Filter = styled.input`
    background-color: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    border: none;
    outline: none;
    padding: 15px 20px;
    width: 300px;
    font-weight: ${props => props.theme.fonts.normal.fontWeight};

    &:focus{
        outline: none;
    }

    @media(max-width: 600px){
        width: 200px;
    }

    @media(max-width: 450px){
        width: 125px;
    }
`