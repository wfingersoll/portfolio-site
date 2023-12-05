import { styled } from 'styled-components'

export const BackgroundImage = styled.img`
    z-index: -1;
`;

export const Overlay = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(2,0,36,0.8708215708158263) 100%);
    z-index: 20;
`;