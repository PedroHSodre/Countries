import styled from 'styled-components';

export const Container = styled.div`    
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.elements};
    border-radius: 4px;

    &:hover {
        opacity: .4;
    }
`

export const Image = styled.img`
    width: 100%;
    border-radius: 4px 4px 0 0;
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
        margin-left: 6px;
    }
`

export const Subtitle = styled.div`
    font-weight: ${props => props.theme.fonts.subtitle.fontWeight};
`
