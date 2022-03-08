import styled from "styled-components";

export const Button = styled.button`
    margin: 50px 0;
    width: 125px;
    padding: 15px 10px;
    background-color: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    border: none;
    cursor: pointer;

    &:hover {
        border: solid 1px white;
    }
`