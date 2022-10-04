import styled from "styled-components";

export const Container = styled.div`
    width: 85%;
    margin: auto;
`;

export const Detail = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 800px){
        flex-direction: column;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 300px;
`

export const Description = styled.div`
    width: 80%;
    margin: auto;

    @media(max-width: 800px){
        margin-left: 0px;
        margin-top: 100px;
    }
`

export const Text = styled.p`
    color: ${props => props.theme.colors.text};
    margin-left: 15px;
        font-weight: ${props => props.theme.fonts.normal.fontWeight};
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;

    div div {
        font-weight: ${props => props.theme.fonts.subtitle.fontWeight};
    }
    @media (max-width: 1350px) {
        display: block;
    }
`   