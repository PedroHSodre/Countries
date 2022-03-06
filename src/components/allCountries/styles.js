import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`;

export const Grid = styled.div`
    display: grid;
    grid-gap: 35px;
    margin-top: 50px;
    grid-template-columns: repeat(4, 1fr);
`
