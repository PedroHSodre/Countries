import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.elements};
    display: flex;
    padding: 25px;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.text}
`