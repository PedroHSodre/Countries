import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const Detail = styled.div`
    display: flex;
    
    @media(max-width: 600px){
        flex-direction: column;
    }
`

export const Image = styled.img`
    width: 450px;
    height: 300px;
`

export const Description = styled.div`
    width: 100%;
    margin-left: 100px;

    @media(max-width: 600px){
        margin-left: 0px;
        margin-top: 100px;
    }
`

export const Text = styled.p`
    color: ${props => props.theme.colors.text};
    margin-left: 15px;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
`   