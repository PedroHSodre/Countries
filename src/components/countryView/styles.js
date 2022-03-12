import styled from 'styled-components';

export const Container = styled.div`    
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.elements};
`

export const Image = styled.img`
    width: 100%;
`

export const Description = styled.div`
    padding: 15px;
`

export const Item = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    span {
        color: ${props => props.theme.colors.text};
    }
`

export const Subtitle = styled.div`
    font-weight: ${props => props.theme.fonts.subtitle.fontWeight};
`
