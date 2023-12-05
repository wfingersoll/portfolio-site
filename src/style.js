import { styled } from 'styled-components'

export const NavbarContainer = styled.div`
    width: 100%;
    height: 20%;
    position: absolute;
    z-index: 100;
    top: 0%;
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(2,0,36,1) 75%);
`;

export const NavbarButtonContainer = styled.div`
    display: inline-block;
    padding-right: 56px;
    padding-left: 56px;
    margin-top: .75%;
`;

export const NavbarButton = styled.a`
    font-family: Noto Sans, sans-serif  ;
    display: inline-block;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 28px;
    transition: transform .3s;
    letter-spacing: 4px;
    &:hover {
        transform: scale(1.15);
        transition: transform .4s;
    }
`

export const BackgroundImage = styled.img`
    z-index: -1;
    width: 100%;
    height: 900px;
`;

export const Overlay = styled.div`
    background: linear-gradient(180deg, rgba(255,255,255,.2) 0%, rgba(2,0,36,1) 100%);
    width: 100%;
    height: 900px;
    z-index: 20;
    position: absolute;
    top: 0%;
`;

export const OverlayContainer = styled.div`
    width: 100%;
    height: 900px;
    z-index: 30;
    position: absolute;
    top: 0%;
`;

export const OverlayTextContainer = styled.div`
    width: 50%;
`;

export const OverlayTitle = styled.h1`
    margin-left: 10%;
    margin-top: 60%;
    color: #f5f5f5;
    font-size: 86px;
    letter-spacing: 8px;
    font-weight: 300;
    font-family: Noto Sans, sans-serif  ;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.35);
    margin-bottom: 2%;
    text-align: left;
`;

export const OverlaySubtitle = styled.h2`
    margin-top: 0px;
    margin-left: 10%;
    font-weight: 400;
    letter-spacing: 2px;
    text-align: left;
    color: #9e9e9e;
`;

export const AboutProfileContainer = styled.div`
    background: linear-gradient(180deg, rgba(15,15,15,0) 0%, rgba(2,0,36,1) 100%);
    position: absolute;
    z-index: 30;
    width: 45%;
    height: 75%;
    top: 15%;
    left: 5%;
`;

export const AboutProfileHeader = styled.h1`
    color: #f5f5f5;
    font-size: 56px;
    letter-spacing: 4px;
    font-weight: 300;
    font-family: Noto Sans, sans-serif  ;
    text-shadow: 3px 3px 8px rgba(0,0,0,0.35);
`;

export const AboutProfileText = styled.p`
    color: #f5f5f5;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 300;
    font-family: Noto Sans, sans-serif;
    text-align: left;
    padding-left: 16px;
    padding-right: 8px;
`;