import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    max-width: 1375px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 80px 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-gap: 60px;
    margin-top: 50px;
    grid-template-columns: repeat(4, 1fr);

    @media(max-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 600px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 450px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
export const Pressable = styled.div`
    cursor: pointer;
`