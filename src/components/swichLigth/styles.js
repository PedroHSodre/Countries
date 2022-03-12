import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div  {
        font-weight: ${props => props.theme.fonts.title.fontWeight};
    }
`